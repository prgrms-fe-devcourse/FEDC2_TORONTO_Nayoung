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
import { getUserPostApi, getUserDummyApi, getPostsChannel } from '@/api/Api';
import { useState, useEffect } from 'react';

const UserProfile = () => {
  const state = useUsersState();
  const { data: user, loading, error } = state.user;
  const [postsDummy, setPostsDummy] = useState([]);
  const [likesPosts, setLikesPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // 특정 사용자의 User 객체의 posts key에 해당하는 Post[]
      const postsDummy = await getUserPostApi();

      // 특정 사용자의 User 객체
      const userDummy = await getUserDummyApi();
      const userLikesPostsId = userDummy.data.likes.map((like) => like.post);

      // 특정 채널의 전체 Post 배열
      const channelId = postsDummy.data.posts[0].channel._id;
      const channelPosts = await getPostsChannel(channelId);

      const likePosts = channelPosts.data.filter((post) =>
        userLikesPostsId.includes(post._id),
      );
      setPostsDummy(postsDummy.data.posts);
      setLikesPosts(likePosts);
    };
    fetchData();
  }, []);

  //전체 posts 중에서 id값이 userLikesPostsId인 값이 속하는지 판단해서 return post
  if (loading) return <Loader type='spinner' />;
  if (error) return <div>에러가 발생했습니다</div>;
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
              {/* TODO: User 객체에 포스트를 작성 후  */}
              {/* {user.posts ? <PostList posts={user.posts} /> : []} */}
              {postsDummy ? <PostList posts={postsDummy} /> : []}
            </Tab.Item>
            <Tab.Item title='좋아요 게시물' index='item2'>
              <PostList posts={likesPosts} />
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
