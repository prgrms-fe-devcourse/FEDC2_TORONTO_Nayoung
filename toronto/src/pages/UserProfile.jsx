import styled from 'styled-components';
import { Button, Header, Text, Avatar, StyledLink } from '@/components/atoms';
import Tab from '@/components/molecules/Tab';

const UserProfile = () => {
  return (
    <ContentWrapper>
      <Wrapper>
        <ProfileSection>
          <div>
            <Avatar
              src='https://picsum.photos/100'
              size={100}
              shape={'circle'}
            />
          </div>
          <ProfileWrapper>
            <Text size={18}>jkb2221@gmail.com</Text>
            <StyledLink to='/profile/edit'>
              <Button>프로필 편집</Button>
            </StyledLink>
          </ProfileWrapper>
        </ProfileSection>
        <Tab>
          <Tab.Item title='내 게시물' index='item1'>
            <Header>내 게시물</Header>
            <Text>PostList</Text>
          </Tab.Item>
          <Tab.Item title='좋아요 게시물' index='item2'>
            <Header>좋아요 게시물</Header>
            <Text>PostList</Text>
          </Tab.Item>
        </Tab>
      </Wrapper>
    </ContentWrapper>
  );
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
