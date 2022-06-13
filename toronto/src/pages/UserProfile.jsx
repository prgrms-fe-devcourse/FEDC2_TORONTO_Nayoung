import Button from '@components/atoms/Button';
import styled from 'styled-components';
import Text from '@components/atoms/Text';

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
`;

const UserProfile = () => {
  return (
    <ContentWrapper>
      <Wrapper>
        <ProfileSection>
          <Text size={24}>Avatar</Text>
          <ProfileWrapper>
            <Text size={18}>이메일</Text>
            <Button>프로필 편집</Button>
          </ProfileWrapper>
        </ProfileSection>
        <section>Tab 컴포넌트</section>
        <section>내 포스트</section>
      </Wrapper>
    </ContentWrapper>
  );
};

export default UserProfile;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  width: 1000px;
  height: 500px;
  padding: 2rem;
`;

const ProfileSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
