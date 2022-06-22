import { Vote } from '@/components/molecules';

export default {
  title: 'Components/Molecules/Vote',
  component: Vote,
  argTypes: {
    agreeText: { control: 'text' },
    disagreeText: { control: 'text' },
  },
};

export const Default = (args) => {
  return <Vote agreeText='찬성' disagreeText='반대' {...args}></Vote>;
};
