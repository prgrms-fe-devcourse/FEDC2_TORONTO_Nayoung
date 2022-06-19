/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import {
  Button,
  Header,
  Text,
  Avatar,
  StyledLink,
  Loader,
} from '@/components/atoms';
import Tab from '@/components/molecules/Tab';
import PostList from '@/components/organisms/PostList';
import { useUsersState } from '@/contexts/UserContext.js';
import { getUserApi, getPostsApi } from '@/api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

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
  useEffect(() => {
    const fetchData = async () => {
      const userRes = await getUserApi(userId);
      const userPostsIdArray = userRes.data.posts;
      const userLikesPostsIdArray = userRes.data.likes.map((like) => like.post);

      if (userRes.data.posts.length >= 1 || userRes.data.posts.length >= 1) {
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
      setUser(userRes.data);
    };
    fetchData();
  }, [userId]);

  //전체 posts 중에서 id값이 userLikesPostsId인 값이 속하는지 판단해서 return post
  if (loading) return <Loader type='spinner' />;
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
            <div>
              <Avatar src={user.image} size={100} shape={'circle'} />
            </div>
            <ProfileWrapper>
              <Text size={18}>{user.email}</Text>
              <Text size={18}>{user.username}</Text>
              <StyledLink to={'edit'}>
                <Button>프로필 편집</Button>
              </StyledLink>
            </ProfileWrapper>
          </ProfileSection>
          <Tab>
            <Tab.Item title='내 게시물' index='item1'>
              {user.posts ? <PostList posts={myPosts} /> : []}
            </Tab.Item>
            <Tab.Item title='좋아요 게시물' index='item2'>
              {user.likes ? <PostList posts={likesPosts} /> : []}
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
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  background-color: #f9fafb;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 700px;
  height: 600px;
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
  padding: 2rem;
`;
