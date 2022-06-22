import { ControversyVote } from '@/components/molecules';

export default {
  title: 'Components/Molecules/ControversyVote',
  component: ControversyVote,
  argTypes: {
    agreeTitle: { defaultValue: '해도된다.', control: { type: 'text' } },
    disagreeTitle: { defaultValue: '안된다.', control: { type: 'text' } },
    imgSrc: {
      type: { name: 'string', require: true },
      defaultValue: 'https://picsum.photos/200',
      control: { type: 'text' },
    },
  },
};

export const Default = (args) => {
  return <ControversyVote {...args} />;
};
