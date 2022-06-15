import styled from 'styled-components';
import PostItem from '@/components/molecules/PostItem';

const GridContainer = styled.ul`
  display: grid;
  padding: 0;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
`;

const PostList = ({ posts }) => {
  return (
    <GridContainer>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </GridContainer>
  );
};

export default PostList;
