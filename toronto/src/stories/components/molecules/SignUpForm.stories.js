import SignUpForm from '@/components/molecules/SignUpForm';

export default {
  title: 'Component/molecules/SignUpForm',
  component: SignUpForm,
  argTypes: {
    onSubmit: { action: 'onSubmit' },
  },
};

export const Default = (args) => {
  return <SignUpForm {...args} />;
};
