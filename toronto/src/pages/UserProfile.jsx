import styled from 'styled-components';
import {
  Button,
  Header,
  Text,
  Avatar,
  StyledLink,
  Loader,
  Divider,
  Skeleton,
} from '@/components/atoms';
import Tab from '@/components/molecules/Tab';
import PostList from '@/components/organisms/PostList';
import { useUsersState } from '@/contexts/UserContext.js';
import { getUserApi, getPostsApi } from '@/api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const renderSkeleton = () => {
  const skeletons = [];

  for (let i = 0; i < 3; i++) {
    skeletons.push(<Skeleton.Box key={i} width={'100%'} height={'100%'} />);
  }

  return skeletons;
};

const UserProfile = () => {
  const state = useUsersState();
  const { data: loginUser, loading, error } = state.user;
  const { userId } = useParams();
  const [user, setUser] = useState({
    image: '',
    email: '',
    _id: '',
    username: '',
    posts: [],
    likes: [],
  });
  const [myPosts, setMyPosts] = useState([]);
  const [likesPosts, setLikesPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const userRes = await getUserApi(userId);
      const userPostsIdArray = userRes.data.posts.map((post) => post._id);
      const userLikesPostsIdArray = userRes.data.likes.map((like) => like.post);

      if (userPostsIdArray.length >= 1 || userLikesPostsIdArray.length >= 1) {
        setIsLoading(true);
        const posts = await getPostsApi();
        const myPosts = posts.data.filter((post) =>
          userPostsIdArray.includes(post._id),
        );
        const likesPosts = posts.data.filter((post) =>
          userLikesPostsIdArray.includes(post._id),
        );
        setMyPosts(myPosts);
        setLikesPosts(likesPosts);
      } else {
        setMyPosts([]);
        setLikesPosts([]);
      }
      setIsLoading(false);
      setUser(userRes.data);
    };

    fetchData();
  }, [userId]);

  //전체 posts 중에서 id값이 userLikesPostsId인 값이 속하는지 판단해서 return post
  if (loading)
    return (
      <div
        style={{
          height: 'calc(100vh - 60px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loader type='spinner' />
      </div>
    );
  if (error) return <div>{error}</div>;
  if (!user) {
    return (
      <div>
        <Header>유저 객체가 없습니다!</Header>
      </div>
    );
  } else {
    return (
      <ContentWrapper>
        <Wrapper>
          <ProfileSection>
            <AvatarWrapper>
              <Avatar src={user.image} size={100} shape={'circle'} />
            </AvatarWrapper>
            <ProfileWrapper>
              <ColWrapper>
                <TextWrapper>
                  <Text size={20}>{user.email}</Text>
                </TextWrapper>
                <TextWrapper>
                  <Text size={16}>{user.username}</Text>
                </TextWrapper>
              </ColWrapper>
              <ButtonWrapper>
                {loginUser ? (
                  userId === loginUser._id ? (
                    <StyledLink to={'edit'}>
                      <Button>프로필 편집</Button>
                    </StyledLink>
                  ) : (
                    <div></div>
                  )
                ) : (
                  <div></div>
                )}
              </ButtonWrapper>
            </ProfileWrapper>
          </ProfileSection>
          <Divider />
          <Tab>
            <Tab.Item title='내 게시물' index='item1'>
              <GridContainer>
                {isLoading && renderSkeleton()}
                {user.posts ? <PostList posts={myPosts} /> : []}
              </GridContainer>
            </Tab.Item>
            <Tab.Item title='좋아요 게시물' index='item2'>
              <GridContainer>
                {isLoading && renderSkeleton()}
                {user.likes ? <PostList posts={likesPosts} /> : []}
              </GridContainer>
            </Tab.Item>
          </Tab>
        </Wrapper>
      </ContentWrapper>
    );
  }
};

export default UserProfile;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const ProfileSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 2rem;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  min-height: 100px;
`;

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const AvatarWrapper = styled.div`
  display: flex;
  padding: 2rem;
`;

const GridContainer = styled.ul`
  display: grid;
  padding: 0;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(360px, 1fr));
  grid-auto-rows: minmax(360px, 1fr);
  grid-auto-columns: minmax(360px, 1fr);
  grid-gap: 30px;
  min-height: 500px;
`;

const TextWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
