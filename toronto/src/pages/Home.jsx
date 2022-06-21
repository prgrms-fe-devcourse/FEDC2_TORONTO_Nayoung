import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useUsersState } from '@/contexts/UserContext';
import { InputBar } from '@/components/molecules';
import { Button, Skeleton } from '@/components/atoms';
import { PostList } from '@/components/organisms';
import { getPostsSlice, getSearchAll } from '@/api/Api';

const limit = 10;

const renderSkeleton = () => {
  const skeletons = [];

  for (let i = 0; i < limit; i++) {
    skeletons.push(<Skeleton.Box key={i} width={'100%'} height={'100%'} />);
  }

  return skeletons;
};

const Home = () => {
  const state = useUsersState();
  const { data: user } = state.user;
  const [posts, setPosts] = useState([]);
  const offset = useRef(limit);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();

  const initialPosts = useCallback(async () => {
    setIsLoading(true);
    offset.current = limit;

    const res = await getPostsSlice(process.env.REACT_APP_CHANNEL_ID, 0, limit);

    setPosts([...res.data]);
    setIsLoading(false);
  }, []);

  const loadPosts = useCallback(async () => {
    setIsLoading(true);

    const res = await getPostsSlice(
      process.env.REACT_APP_CHANNEL_ID,
      offset.current,
      limit,
    );

    setPosts((prev) => [...prev, ...res.data]);
    setIsLoading(false);
    offset.current += limit;
  }, []);

  const handleNavigate = useCallback(() => {
    if (!user) {
      navigation(`/login`);
      return;
    }

    navigation(`/create-post`);
  }, [navigation, user]);

  useEffect(() => {
    initialPosts();
  }, [initialPosts]);

  const handleSubmit = useCallback(
    async (value) => {
      if (/[a-zA-Z]/g.test(value)) {
        alert('영문 검색은 불가능 합니다.');
        return;
      }

      if (!value) {
        initialPosts();
        return;
      }

      setIsLoading(true);

      const res = await getSearchAll(value);
      const filterPosts = res.data.filter((data) => !data.role);

      setPosts([...filterPosts]);
      setIsLoading(false);
    },
    [initialPosts],
  );

  return (
    <Container>
      <Wrapper>
        <InputBar
          placeholder={'게시물 검색'}
          buttonType={'inside'}
          onSubmit={(value) => handleSubmit(value)}
        />
        <Button onClick={handleNavigate} style={{ height: '100%' }}>
          논쟁 올리기
        </Button>
      </Wrapper>
      <GridContainer>
        <PostList posts={posts} />
        {isLoading && renderSkeleton()}
      </GridContainer>
      {offset.current < posts[0]?.channel.posts?.length && (
        <Button
          onClick={loadPosts}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 20,
          }}
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
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 3rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GridContainer = styled.ul`
  display: grid;
  padding: 0;
  padding-top: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(360px, 1fr));
  grid-auto-rows: minmax(360px, 1fr);
  grid-auto-columns: minmax(360px, 1fr);
  grid-gap: 30px;
`;
