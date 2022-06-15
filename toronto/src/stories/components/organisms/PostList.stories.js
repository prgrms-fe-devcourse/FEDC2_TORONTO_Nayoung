import PostList from '@/components/organisms/PostList';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Component/organisms/PostList',
  component: PostList,
};

const posts = [
  {
    likes: [{ user: '62a6c351f1f0277287103588' }],
    _id: '62a75a3f4ed95908dae3b5a4',
    title:
      '{ "postTitle": "좋아요 테스트용 게시물", "postContent": "대충 내용"}',
    image: 'https://picsum.photos/200',
  },
  {
    likes: [],
    _id: '62a82858b63ef01e9c9e784d',
    title:
      '{ "postTitle": "좋아요 테스트용 게시물", "postContent": "대충 내용"}',
    image: 'https://picsum.photos/200',
  },
  {
    likes: [],
    _id: '62a8282cb63ef01e9c9e7847',
    title:
      '{ "postTitle": "좋아요 테스트용 게시물", "postContent": "대충 내용"}',
    image: 'https://picsum.photos/200',
  },
  {
    likes: [{ user: '62a6c351f1f0277287103588' }],
    _id: '62a8281db63ef01e9c9e7841',
    title:
      '{ "postTitle": "좋아요 테스트용 게시물", "postContent": "대충 내용"}',
    image: 'https://picsum.photos/200',
  },
];

export const Default = () => {
  return (
    <BrowserRouter>
      <PostList posts={posts} />
    </BrowserRouter>
  );
};
