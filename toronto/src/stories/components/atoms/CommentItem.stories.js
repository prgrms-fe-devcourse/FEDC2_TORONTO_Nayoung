import CommentItem from '@/components/atoms/CommentItem';

export default {
  title: 'Component/Comment',
  component: CommentItem,
  argTypes: {
    width: { control: 'text' },
    author: { control: 'text' },
    content: { control: 'text' },
    isAuthor: { control: 'boolean' },
  },
};

export const Item = (args) => {
  return <CommentItem {...args} />;
};
