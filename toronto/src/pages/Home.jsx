import PostList from '@/components/organisms/PostList';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputBar from '@/components/molecules/InputBar';
import Button from '@/components/atoms/Button';
import axios from 'axios';

const limit = 2;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const offset = useRef(0);
  const navigation = useNavigate();

  const initialPosts = useCallback(async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_END_POINT}/posts/channel/${process.env.REACT_APP_CHANNEL_ID}`,
      {
        params: {
          offset: offset.current,
          limit: limit,
        },
      },
    );

    setPosts([...res.data]);
    offset.current += limit;
  }, []);

  const loadPosts = useCallback(async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_END_POINT}/posts/channel/${process.env.REACT_APP_CHANNEL_ID}`,
      {
        params: {
          offset: offset.current,
          limit: limit,
        },
      },
    );

    setPosts((prev) => [...prev, ...res.data]);
    offset.current += limit;
  }, []);

  useEffect(() => {
    initialPosts();
  }, []);

  return (
    <Container>
      <Wrapper>
        <InputBar
          placeholder={'게시물 검색'}
          buttonType={'inside'}
          onSubmit={(value) => navigation(`/search/${value}`)}
        />
        <Button onClick={() => navigation(`/create-post`)}>논쟁 올리기</Button>
      </Wrapper>
      <PostList posts={posts} />
      {offset.current < posts[0]?.channel.posts.length && (
        <Button
          onClick={loadPosts}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          더 보기
        </Button>
      )}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
