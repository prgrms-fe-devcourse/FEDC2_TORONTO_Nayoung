import LoginForm from '@/components/molecules/LoginForm';

export default {
  title: 'Component/molecules/LoginForm',
  component: LoginForm,
};

export const Default = (args) => {
  return <LoginForm {...args} />;
};
