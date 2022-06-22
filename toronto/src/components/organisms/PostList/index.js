import PostItem from '@/components/molecules/PostItem';

const PostList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </>
  );
};

export default PostList;
