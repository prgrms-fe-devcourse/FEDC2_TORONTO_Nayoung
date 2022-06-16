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

import {
  // getUser,
  useUsersState,
} from '../contexts/UserContext.js';

const UserProfile = () => {
  const state = useUsersState();
  const { data: user, loading, error } = state.user;

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
              <Header>내 게시물</Header>
              <Text>{user.posts}</Text>
            </Tab.Item>
            <Tab.Item title='좋아요 게시물' index='item2'>
              <Header>좋아요 게시물</Header>
              <Text>{user.likes}</Text>
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
