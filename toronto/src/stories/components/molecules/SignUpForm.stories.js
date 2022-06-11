import SignUpForm from '@/components/organisms/SignUpForm';

export default {
  title: 'Component/organisms/SignUpForm',
  component: SignUpForm,
  argTypes: {
    onSubmit: { action: 'onSubmit' },
  },
};

export const Default = (args) => {
  return <SignUpForm {...args} />;
};
