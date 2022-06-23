import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostApi, postCommentApi } from '@api/Api';
import { useUsersState } from '@contexts/UserContext';
import { Header, Text } from '@components/atoms';
import { ControversyVote } from '@components/molecules';
import placeholder from '@/assets/images/post_placeholder.png';

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
        navigate(`/controversy/result/${postId}`, { replace: true });
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
      alert('로그인이 필요한 페이지 입니다.');
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
    navigate(`/controversy/result/${postId}`, { replace: true });
  };

  return (
    <>
      {data && !isLoading && (
        <Wrapper>
          <HeaderWrapper>
            <Header strong>{data.postTitle}</Header>
          </HeaderWrapper>
          <TextWrapper>
            <Text
              size={40}
              style={{
                whiteSpace: 'pre-line',
                wordBreak: 'keep-all',
                fontSize: '16px',
              }}
            >
              {data.postContent}
            </Text>
          </TextWrapper>
          <ControversyVote
            agreeTitle={data.agreeContent}
            disagreeTitle={data.disagreeContent}
            imgSrc={data.image || placeholder}
            onChange={handleChange}
          />
        </Wrapper>
      )}
    </>
  );
};
export default Controversy;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #fff;
  min-height: 600px;
  flex-direction: column;
  padding: 2rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
