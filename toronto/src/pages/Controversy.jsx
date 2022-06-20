import styled from 'styled-components';
import { ControversyVote } from '@/components/molecules';
import { Header, Text } from '@/components/atoms';
import { useParams, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { getPostApi, postCommentApi } from '@api/Api';
import { useUsersState } from '@contexts/UserContext';

const Wrapper = styled.div`
  height: 100vh;
  padding: 150px 320px;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

const Controversy = () => {
  const state = useUsersState();
  const { data: user } = state.user;
  const [data, setData] = useState({});
  const { postId } = useParams();
  const navigate = useNavigate();

  const getPostData = useCallback(async () => {
    try {
      const postData = await getPostApi(postId);
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
  }, [postId]);

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
    <div>
      {data && (
        <Wrapper>
          <Header>{data.postTitle}</Header>
          <Text style={{ marginBottom: '24px' }}>{data.postContent}</Text>
          <ControversyVote
            agreeTitle={data.agreeContent}
            disagreeTitle={data.disagreeContent}
            imgSrc={data.image}
            onChange={handleChange}
          />
        </Wrapper>
      )}
    </div>
  );
};
export default Controversy;
