import styled from 'styled-components';
import { Header, Avatar, Text, Button } from '@/components/atoms';
import Input from '../components/atoms/Input';
const EditProfile = () => {
  return (
    <ContentWrapper>
      <Wrapper>
        <Header>프로필 편집</Header>
        <LabelSection>
          <Text>프로필 사진</Text>
          <Button>추가</Button>
        </LabelSection>
        <Avatar src='https://picsum.photos/200' size={120} />
        <LabelSection>
          <Text>성명</Text>
          <Button>변경</Button>
        </LabelSection>
        <InputWrapper>
          <Input />
        </InputWrapper>
        <LabelSection>
          <Text>비밀번호</Text>
          <Button>변경</Button>
        </LabelSection>
        <InputWrapper>
          <Input />
        </InputWrapper>
        <LabelSection>
          <Text>비밀번호 확인</Text>
        </LabelSection>
        <InputWrapper>
          <Input />
        </InputWrapper>
      </Wrapper>
    </ContentWrapper>
  );
};

export default EditProfile;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #f9fafb;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  width: 700px;
  height: 600px;
`;

const LabelSection = styled.section`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 90%;
`;
