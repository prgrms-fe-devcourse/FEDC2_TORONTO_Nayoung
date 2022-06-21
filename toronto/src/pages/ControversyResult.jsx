import { useCallback, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Header, DoughnutChart, Icon } from '@/components/atoms';
import { Vote, InputBar, Tooltip } from '@/components/molecules';
import { CommentList } from '@/components/organisms';
import { getToken } from '@/lib/Login';
import { useUsersState } from '@/contexts/UserContext';
import { deletePost, getPostApi, deleteCommentApi } from '@/api/Api';
import styled from 'styled-components';

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
      if (res.statusText === 'OK') {
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

  const handleSubmit = (text) => {
    if (opinion === '') {
      alert('찬성/반대 의견을 선택해주세요.');
      return;
    }
    if (postId && text.trim().length > 2) {
      axios(`${process.env.REACT_APP_END_POINT}/comments/create`, {
        method: 'post',
        headers: {
          Authorization: `bearer ${token}`,
        },
        data: {
          comment: JSON.stringify({
            type: opinion,
            content: text,
          }),
          postId: postId,
        },
      }).then(() => getPostData());
    }
  };

  const handleLikeClick = () => {
    if (likeData.isLiked) {
      if (!likeData.likeId) return;
      // 좋아요 삭제
      axios(`${process.env.REACT_APP_END_POINT}/likes/delete`, {
        method: 'delete',
        headers: {
          Authorization: `bearer ${token}`,
        },
        data: {
          id: likeData.likeId,
        },
      }).then(() => {
        getPostData();
      });
    } else {
      // 좋아요 추가
      axios(`${process.env.REACT_APP_END_POINT}/likes/create`, {
        method: 'post',
        headers: {
          Authorization: `bearer ${token}`,
        },
        data: {
          postId,
        },
      }).then(() => {
        getPostData();
      });
    }
  };

  const handleDeleteClick = async () => {
    if (window.confirm('정말 삭제하시겠어요?')) {
      const res = await deletePost(postId);
      if (res.statusText === 'OK') {
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
          <Header
            style={{ fontFamily: 'S-CoreDream-Medium', paddingTop: '2rem' }}
          >
            {data?.post?.title}
          </Header>
          <div style={{ display: isAuthor ? 'block' : 'none' }}>
            <Tooltip text='글 삭제하기'>
              <Icon
                onClick={handleDeleteClick}
                iconName='trash-2'
                style={{ cursor: 'pointer' }}
              />
            </Tooltip>
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
              labels={['찬성', '반대']}
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
              <div
                onClick={handleLikeClick}
                style={{ cursor: 'pointer', padding: 10 }}
              >
                <Icon
                  fill={isLiked ? '#4582EE' : undefined}
                  iconName='thumbs-up'
                />
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
