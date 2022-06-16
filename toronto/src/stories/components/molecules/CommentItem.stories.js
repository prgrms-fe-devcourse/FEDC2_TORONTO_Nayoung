import CommentItem from '@/components/molecules/CommentItem';

export default {
  title: 'Component/Molecules/CommentItem',
  component: CommentItem,
  argTypes: {
    width: { control: 'text' },
    author: { control: 'text' },
    content: { control: 'text' },
    isAuthor: { control: 'boolean' },
  },
};

export const Default = (args) => {
  return <CommentItem {...args} />;
};
