import PostItem from '@/components/molecules/PostItem';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

export default {
  title: 'Component/PostItem',
  component: PostItem,
};

const post_1 = {
  _id: '1',
  image: 'https://picsum.photos/500',
  likes: [{ user: '1234' }],
  title: {
    postTitle: '새우 논쟁',
    postContent: '대충 새우를 까주냐 마느냐 한다는 내용',
  },
};

const post_2 = {
  _id: '2',
  image: 'https://picsum.photos/500',
  likes: [{ user: '4567' }],
  title: {
    postTitle: '대충 타이틀이 엄청나게 긴 경우를 확인해봅시다',
    postContent:
      '대충 내용이 엄청나게 긴 경우. 컨텐츠는 내용이 길어져도 overflow 처리를 하지 않아요~ 세 번째 라인까지 확인ㄴㄴㄴㄴ',
  },
};

export const Default = () => {
  return (
    <BrowserRouter>
      <PostItem post={post_1} />
    </BrowserRouter>
  );
};

export const ContentOverflow = () => {
  return (
    <BrowserRouter>
      <PostItem post={post_2} />
    </BrowserRouter>
  );
};

const GridContainer = styled.ul`
  display: grid;
  padding: 0;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
`;

export const List = () => {
  return (
    <BrowserRouter>
      <GridContainer>
        <PostItem post={post_1} />
        <PostItem post={post_2} />
        <PostItem post={post_1} />
        <PostItem post={post_2} />
        <PostItem post={post_1} />
        <PostItem post={post_2} />
      </GridContainer>
    </BrowserRouter>
  );
};
