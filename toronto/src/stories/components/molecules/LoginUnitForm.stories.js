import LoginUnitForm from '@/components/molecules/LoginUnitForm';

export default {
  title: 'Component/molecules/LoginUnitForm',
  component: LoginUnitForm,
};

export const Default = (args) => {
  return (
    <LoginUnitForm
      textTitle='이메일'
      inputType='email'
      inputName='email'
      inputPlaceholder='email'
      textError='실패'
      {...args}
    />
  );
};
