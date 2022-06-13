import FormField from '@/components/molecules/\bFormField';

export default {
  title: 'Component/molecules/FormField',
  component: FormField,
};

export const Default = (args) => {
  return (
    <FormField
      textTitle='이메일'
      inputType='email'
      inputName='email'
      inputPlaceholder='email'
      textError='실패'
      {...args}
    />
  );
};
