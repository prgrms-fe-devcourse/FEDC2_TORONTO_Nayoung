import styled from 'styled-components';
import ControversyVote from '@/components/molecules/ControversyVote';
import Header from '@/components/atoms/Header';
import Text from '@/components/atoms/Text';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { getPostApi } from '../api/Api';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Controversy = () => {
  const [data, setData] = useState({});
  const { postId } = useParams();
  const navigate = useNavigate();

  const getpostData = useCallback(async () => {
    const postData = await getPostApi(postId);
    const postTitleData = JSON.parse(postData.data.title);
    setData({
      postTitle: postTitleData.postTitle,
      postContent: postTitleData.postContent,
      agreeContent: postTitleData.agreeContent,
      disagreeContent: postTitleData.disagreeContent,
      image: postData.data.image,
    });
  }, [postId]);

  useEffect(() => {
    getpostData();
  }, [getpostData]);

  const handleChange = (opinionState) => {
    
    switch (opinionState) {
      case 'agree':
        console.log('>>>', 'agree');
        break;
      case 'disagree':
        console.log('disagree');
        navigate('/');
        break;
      default:
    }
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
