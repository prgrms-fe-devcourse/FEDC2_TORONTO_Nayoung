import CommentList from '@/components/molecules/CommentList';

export default {
  title: 'Component/Molecules/CommentList',
  component: CommentList,
  argTypes: {
    name: { control: 'text' },
    width: { control: 'text' },
  },
};

const MOCK_DATA = [
  {
    _id: '1',
    comment:
      '첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글',
    author: 'jeongki',
    post: 'fd45sa6f8978fd456',
    createdAt: '2022-06-15',
    updatedAt: '2022-06-16',
  },
  {
    _id: '2',
    comment: '두 번째 댓글',
    author: 'jeongki',
    post: 'fd45sa6f8978fd456',
    createdAt: '2022-06-15',
    updatedAt: '2022-06-16',
  },
  {
    _id: '3',
    comment: '세 번째 댓글',
    author: 'jeongki',
    post: 'fd45sa6f8978fd456',
    createdAt: '2022-06-15',
    updatedAt: '2022-06-16',
  },
  {
    _id: '4',
    comment: '네 번째 댓글',
    author: 'jeongki',
    post: 'fd45sa6f8978fd456',
    createdAt: '2022-06-15',
    updatedAt: '2022-06-16',
  },
  {
    _id: '5',
    comment:
      '첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글첫 번째 댓글',
    author: 'jeongki',
    post: 'fd45sa6f8978fd456',
    createdAt: '2022-06-15',
    updatedAt: '2022-06-16',
  },
  {
    _id: '6',
    comment: '두 번째 댓글',
    author: 'jeongki',
    post: 'fd45sa6f8978fd456',
    createdAt: '2022-06-15',
    updatedAt: '2022-06-16',
  },
  {
    _id: '7',
    comment: '세 번째 댓글',
    author: 'jeongki',
    post: 'fd45sa6f8978fd456',
    createdAt: '2022-06-15',
    updatedAt: '2022-06-16',
  },
  {
    _id: '8',
    comment: '네 번째 댓글',
    author: 'jeongki',
    post: 'fd45sa6f8978fd456',
    createdAt: '2022-06-15',
    updatedAt: '2022-06-16',
  },
];

const handleDelete = (id) => {
  console.log(id);
};

export const Default = (args) => {
  return (
    <CommentList
      {...args}
      onDelete={handleDelete}
      name='찬성 댓글'
      limit={5}
      comments={MOCK_DATA}
    />
  );
};
