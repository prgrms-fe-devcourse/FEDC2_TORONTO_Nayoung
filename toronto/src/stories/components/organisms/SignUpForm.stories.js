import SignUpForm from '@/components/organisms/SignUpForm';

export default {
  title: 'Component/organisms/SignUpForm',
  component: SignUpForm,
};

export const Default = (args) => {
  return <SignUpForm {...args} />;
};
