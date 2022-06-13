import LoginForm from '@/components/organisms/LoginForm';

export default {
  title: 'Component/organisms/LoginForm',
  component: LoginForm,
};

export const Default = (args) => {
  return <LoginForm {...args} />;
};
