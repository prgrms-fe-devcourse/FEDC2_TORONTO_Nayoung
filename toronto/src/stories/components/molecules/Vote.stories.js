import Vote from '@/components/molecules/Vote';

export default {
  title: 'Component/Molecules/Vote',
  component: Vote,
  argTypes: {
    agreeText: { control: 'text' },
    disagreeText: { control: 'text' },
  },
};

export const Default = (args) => {
  return <Vote agreeText='찬성' disagreeText='반대' {...args}></Vote>;
};
