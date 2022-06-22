import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Header, Avatar, Text, Button, Loader } from '@/components/atoms';
import Upload from '@/components/molecules/Upload';
import {
  useUsersState,
  useUsersDispatch,
  putUpdateUser,
  postProfileImage,
} from '@/contexts/UserContext.js';
import { putUpdatePasswordApi } from '@/api/Api.js';
import FormField from '@/components/molecules/FormField';

const EditProfile = () => {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const { data: user, loading, error } = state.user;
  const [inputs, setInputs] = useState({
    name: '',
    password: '',
    passwordConfirm: '',
  });
  const [errors, setErrors] = useState({
    nameError: '',
    passwordError: '',
    passwordConfirmError: '',
  });
  const { name, password, passwordConfirm } = inputs;
  const navigate = useNavigate();

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleNameClick = (e) => {
    e.preventDefault();
    if (!name) {
      errors.nameError = setErrors({
        ...errors,
        nameError: '성명을 입력해주세요',
      });
    } else {
      const res = putUpdateUser(dispatch, inputs.name, inputs.name);
      if (res) {
        alert('성명이 성공적으로 바뀌었습니다');
      }
      setErrors({ ...errors, nameError: '' });
      navigate(`/users/${user._id}`);
    }
  };

  const handlePasswordClick = async (e) => {
    e.preventDefault();
    if (!password) {
      errors.passwordError = setErrors({
        ...errors,
        passwordError: '비밀번호를 입력해주세요',
      });
    } else if (password !== passwordConfirm) {
      errors.passwordConfirmError = setErrors({
        ...errors,
        passwordConfirmError: '비밀번호가 일치하지 않습니다',
      });
    } else {
      await putUpdatePasswordApi(inputs.password);
      alert('비밀번호가 성공적으로 변경되었습니다!');
      setErrors({ ...errors, passwordError: '', passwordConfirmError: '' });
      navigate(`/users/${user._id}`);
    }
  };

  const handleChangeProfile = (file) => {
    if (!file) {
      alert('파일이 존재하지 않습니다!');
    } else {
      const formData = new FormData();
      formData.append('isCover', false);
      formData.append('image', file);
      postProfileImage(dispatch, formData);
      navigate(`/users/${user._id}`);
    }
  };

  if (loading) return <Loader type='spinner' />;
  if (error) return <Header>에러가 발생했습니다</Header>;
  if (!user) {
    return <Header>유저 객체가 없습니다.</Header>;
  } else {
    return (
      <ContentWrapper>
        <Wrapper>
          <Section>
            <Header>프로필 편집</Header>
          </Section>
          <Section>
            <Text strong>프로필 사진</Text>
            <Upload clickArea={true} onChange={handleChangeProfile}>
              {(file) => {
                return (
                  <UploadWrapper>
                    <Button>업로드</Button>
                    <Text>{file ? `파일명: ${file.name}` : ''}</Text>
                  </UploadWrapper>
                );
              }}
            </Upload>
          </Section>
          <div>
            <Avatar src={user.image} size={120} />
          </div>
          <Section>
            <ColWrapper>
              <FormField
                textTitle='성명'
                inputType='text'
                inputName='name'
                inputPlaceholder='성명'
                inputOnChange={onChange}
                textError={errors.nameError}
              />
            </ColWrapper>
            <Button onClick={handleNameClick}>변경</Button>
          </Section>
          <Section>
            <ColWrapper>
              <ColWrapper>
                <FormField
                  textTitle='비밀번호'
                  inputType='password'
                  inputName='password'
                  inputPlaceholder='변경할 비밀번호'
                  inputOnChange={onChange}
                  textError={errors.passwordError}
                />
              </ColWrapper>
              <ColWrapper>
                <FormField
                  textTitle='비밀번호 확인'
                  inputType='password'
                  inputName='passwordConfirm'
                  inputPlaceholder='변경할 비밀번호 확인'
                  inputOnChange={onChange}
                  textError={errors.passwordConfirmError}
                />
              </ColWrapper>
            </ColWrapper>
            <Button onClick={handlePasswordClick}>변경</Button>
          </Section>
        </Wrapper>
      </ContentWrapper>
    );
  }
};

export default EditProfile;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 2rem 10rem 0 10rem;
`;

const Section = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
