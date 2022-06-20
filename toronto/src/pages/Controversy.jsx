import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostApi, postCommentApi } from '@api/Api';
import { useUsersState } from '@contexts/UserContext';
import { Header, Text } from '@components/atoms';
import { ControversyVote } from '@components/molecules';

const Wrapper = styled.div`
  height: 100vh;
  width: 80%;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
`;

const Controversy = () => {
  const navigate = useNavigate();
  const state = useUsersState();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { postId } = useParams();
  const { data: user } = state.user;
  const userId = user?._id;

  const getPostData = useCallback(async () => {
    setIsLoading(true);

    try {
      const postData = await getPostApi(postId);
      const isVoted = postData.data.comments.some(
        (comment) => comment.author?._id === userId,
      );
      if (userId && isVoted) {
        navigate(`/controversy/result/${postId}`);
        return;
      }
      const { postTitle, postContent, agreeContent, disagreeContent } =
        JSON.parse(postData.data.title);
      setData({
        postTitle,
        postContent,
        agreeContent,
        disagreeContent,
        image: postData.data.image,
      });
    } catch (e) {
      navigate('/404/notFound');
    }

    setIsLoading(false);
  }, [navigate, postId, userId]);

  useEffect(() => {
    getPostData();
  }, [getPostData]);

  const handleChange = async (opinionState) => {
    if (!user) {
      alert('로그인 하셔야 합니다.!');
      navigate('/');
      return;
    }
    if (!opinionState || !postId) return;
    await postCommentApi({
      comment: JSON.stringify({
        type: 'vote',
        content: opinionState,
      }),
      postId: postId,
    });
    navigate(`/controversy/result/${postId}`);
  };

  return (
    <>
      {data && !isLoading && (
        <Wrapper>
          <Header>{data.postTitle}</Header>
          <Text style={{ whiteSpace: 'pre-line' }}>{data.postContent}</Text>
          <ControversyVote
            agreeTitle={data.agreeContent}
            disagreeTitle={data.disagreeContent}
            imgSrc={data.image || 'https://picsum.photos/200'}
            onChange={handleChange}
          />
        </Wrapper>
      )}
    </>
  );
};
export default Controversy;
