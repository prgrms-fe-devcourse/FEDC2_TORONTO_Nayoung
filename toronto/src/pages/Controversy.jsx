import styled from 'styled-components';
import ControversyVote from '@/components/molecules/ControversyVote';
import Header from '@/components/atoms/Header';
import Text from '@/components/atoms/Text';
// import { useParams } from 'react-router-dom';
// import { useCallback, useEffect } from 'react';
// import { getPostApi } from '../api/Api';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Controversy = () => {
  // const { postId } = useParams();

  // const postData = useCallback(getPostApi(postId), [postId]);

  // useEffect(() => {
  //   getPostApi(postId);
  //   console.log(postData);
  // }, [postId]);

  return (
    <Wrapper>
      <Header>Header</Header>
      <Text style={{ marginBottom: '24px' }}>details</Text>
      <ControversyVote
        agreeTitle='된다.'
        disagreeTitle='안된다.'
        imgSrc={'https://picsum.photos/200'}
      />
    </Wrapper>
  );
};

export default Controversy;
