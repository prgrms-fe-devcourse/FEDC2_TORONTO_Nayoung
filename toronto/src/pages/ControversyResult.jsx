import { useCallback, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Header, DoughnutChart, Icon, Loader } from '@/components/atoms';
import { Vote, InputBar, Tooltip } from '@/components/molecules';
import { CommentList } from '@/components/organisms';
import { getToken } from '@/lib/Login';
import { useUsersState } from '@/contexts/UserContext';
import {
  deletePost,
  getPostApi,
  deleteCommentApi,
  deleteLikeApi,
  postCommentApi,
  postLikeApi,
} from '@/api/Api';

const ResultPage = () => {
  const [data, setData] = useState({
    post: {
      title: '',
    },
    agree: 0,
    disagree: 0,
    comments: [],
    likes: [],
    author: {},
  });
  const [opinion, setOpinion] = useState('');
  const [likeData, setLikeData] = useState({});
  const [loading, setLoading] = useState({
    like: false,
    comment: false,
    deletePost: false,
  });
  const { postId } = useParams();
  const token = getToken();
  const userData = useUsersState();
  const navigate = useNavigate();
  const isAuthor = userData.user.data?._id === data.author?._id;

  const getPostData = useCallback(async () => {
    const res = await getPostApi(postId);
    const titleData = JSON.parse(res.data.title);

    setData({
      post: {
        id: res.data._id,
        title: titleData.postTitle,
        agreeContent: titleData.agreeContent,
        disagreeContent: titleData.disagreeContent,
      },
      comments: res.data.comments,
      likes: res.data.likes,
      author: res.data.author,
    });
    setLikeData({
      isLiked:
        res.data.likes.filter(({ user }) => user === userData.user.data?._id)
          .length > 0
          ? true
          : false,
      likeId: res.data.likes.filter(
        ({ user }) => user === userData.user.data?._id,
      )[0]?._id,
    });
  }, [postId, userData]);

  const checkValidPost = useCallback(async () => {
    const res = await getPostApi(postId);

    if (res.data._id !== postId) {
      navigate('/no-matched-post', { replace: true });
    }
  }, [navigate, postId]);

  const checkAuthUser = useCallback(() => {
    if (!token) {
      alert('로그인 된 사용자만 접근할 수 있습니다.');
      navigate('/');
    }
  }, [token, navigate]);

  const deleteComment = async (id) => {
    if (window.confirm('정말 삭제하시겠어요?')) {
      const res = await deleteCommentApi(id);
      if (res.data) {
        getPostData();
      }
    }
  };

  useEffect(() => {
    checkAuthUser();
    checkValidPost();
    getPostData();
  }, [getPostData, checkValidPost, checkAuthUser]);

  const agreeComments = data.comments
    .filter((item) => {
      const type = JSON.parse(item.comment).type;
      return type === 'agree';
    })
    .reverse();

  const disagreeComments = data.comments
    .filter((item) => {
      const type = JSON.parse(item.comment).type;
      return type === 'disagree';
    })
    .reverse();

  const votes = data.comments.filter((item) => {
    const type = JSON.parse(item.comment).type;
    return type === 'vote';
  });

  const agreeVotes = votes.filter((item) => {
    return JSON.parse(item.comment).content === 'agree';
  });

  const disagreeVotes = votes.filter((item) => {
    return JSON.parse(item.comment).content === 'disagree';
  });

  const isLiked =
    data.likes.filter(({ user }) => user === userData.user.data?._id).length > 0
      ? true
      : false;

  const handleChange = (opinionState) => {
    setOpinion(opinionState);
  };

  const handleSubmit = async (text) => {
    if (opinion === '') {
      alert('찬성/반대 의견을 선택해주세요.');
      return;
    }
    if (postId && text.trim().length > 2) {
      setLoading({
        ...loading,
        comment: true,
      });
      const res = await postCommentApi({
        comment: JSON.stringify({
          type: opinion,
          content: text,
        }),
        postId: postId,
      });
      setLoading({
        ...loading,
        comment: false,
      });
      if (res.data) {
        getPostData();
      }
    }
  };

  const handleLikeClick = async () => {
    if (likeData.isLiked) {
      if (!likeData.likeId) return;
      // 좋아요 삭제
      setLoading({
        ...loading,
        like: true,
      });
      const res = await deleteLikeApi(likeData.likeId);
      setLikeData({
        ...likeData,
        isLiked: false,
      });
      setLoading({
        ...loading,
        like: false,
      });
      if (res.data) {
        getPostData();
      }
    } else {
      // 좋아요 추가
      setLoading({
        ...loading,
        like: true,
      });
      const res = await postLikeApi(postId);
      setLikeData({
        ...likeData,
        isLiked: true,
      });
      setLoading({
        ...loading,
        like: false,
      });
      if (res.data) {
        getPostData();
      }
    }
  };

  const handleDeleteClick = async () => {
    if (window.confirm('정말 삭제하시겠어요?')) {
      setLoading({
        ...loading,
        deletePost: true,
      });
      const res = await deletePost(postId);
      setLoading({
        ...loading,
        deletePost: false,
      });
      if (res.data) {
        navigate('/');
      }
    }
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <ResultContainer>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Header style={{ paddingTop: '2rem' }}>{data?.post?.title}</Header>
          <div style={{ display: isAuthor ? 'block' : 'none' }}>
            {loading.deletePost ? (
              <Loader type='spinner' size={24} />
            ) : (
              <Tooltip text='글 삭제하기'>
                <Icon
                  onClick={handleDeleteClick}
                  iconName='trash-2'
                  style={{ cursor: 'pointer' }}
                />
              </Tooltip>
            )}
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              maxWidth: 500,
              maxHeight: 500,
            }}
          >
            <DoughnutChart
              data={[agreeVotes?.length, disagreeVotes?.length]}
              labels={[data.post.agreeContent, data.post.disagreeContent]}
              backgroundColor={[
                'rgba(61, 67, 180, 0.2)',
                'rgba(255, 18, 79, 0.2)',
              ]}
              borderColor={[
                'rgba(131, 134, 245, 0.8)',
                'rgba(255, 114, 202, 0.8)',
              ]}
              chartSize={'100%'}
            />
          </div>
          <Vote
            onChange={handleChange}
            agreeText={`찬성 (${
              votes.length &&
              Math.floor((agreeVotes.length / votes.length) * 100)
            }%)`}
            disagreeText={`반대 (${
              votes.length &&
              Math.floor((disagreeVotes.length / votes.length) * 100)
            }%)`}
          />
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{ cursor: 'pointer', padding: 10 }}>
                {loading.like ? (
                  <Loader type='spinner' size={24} />
                ) : (
                  <Icon
                    onClick={handleLikeClick}
                    fill={isLiked ? '#4582EE' : undefined}
                    iconName='thumbs-up'
                  />
                )}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexGrow: 1,
              }}
            >
              <div style={{ width: '100%', maxWidth: 500 }}>
                <InputBar
                  totalWidth={'100%'}
                  placeholder='찬성/반대 의견을 선택하고 댓글을 작성해주세요.'
                  buttonText='댓글 작성'
                  onSubmit={handleSubmit}
                  loading={loading.comment}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          <div style={{ flex: 1 }}>
            <CommentList
              name='찬성 댓글'
              width={'calc(100% - 20px)'}
              limit={5}
              comments={agreeComments}
              onDelete={deleteComment}
            />
          </div>
          <div style={{ flex: 1 }}>
            <CommentList
              name='반대 댓글'
              width='calc(100% - 20px)'
              limit={5}
              comments={disagreeComments}
              onDelete={deleteComment}
            />
          </div>
        </div>
      </ResultContainer>
    </div>
  );
};

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default ResultPage;
