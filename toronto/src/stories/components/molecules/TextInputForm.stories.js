import TextInputForm from '@/components/molecules/TextInputForm';

export default {
  title: 'Component/molecules/TextInputForm',
  component: TextInputForm,
};

export const Default = (args) => {
  return (
    <TextInputForm
      textTitle='로그인'
      inputType='email'
      inputName='email'
      inputPlaceholder='email'
      {...args}
    />
  );
};
