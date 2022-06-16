import PostList from '@/components/organisms/PostList';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputBar from '@/components/molecules/InputBar';
import Button from '@/components/atoms/Button';

const DUMMY_DATA = [
  {
    likes: [],
    comments: [],
    _id: '555',
    title:
      '{"postTitle":"블루투스 논쟁","postContent":"내 연인의 차에 이성인 직장 동료의 블루투스 연결 기록이 남아있다면?!","agreeContent":"뭐가 문제?","disagreeContent":"당근 안되지","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655302512/post/ea68dfde-3668-406c-ae19-9a0477920934.jpg',
    imagePublicId: 'post/ea68dfde-3668-406c-ae19-9a0477920934',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '444',
    title:
      '{"postTitle":"새우 논쟁","postContent":"새우 껍질 까주기 가능?","agreeContent":"가능","disagreeContent":"불가능","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655302481/post/9a814652-24fd-4a77-aeb1-6fe41c71ebd8.jpg',
    imagePublicId: 'post/9a814652-24fd-4a77-aeb1-6fe41c71ebd8',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '333',
    title:
      '{"postTitle":"깻잎 논쟁","postContent":"깻잎 떼주기 가능?","agreeContent":"가능","disagreeContent":"불가능","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655302452/post/2c13397d-94ac-425a-b519-fe9b9d5225b9.jpg',
    imagePublicId: 'post/2c13397d-94ac-425a-b519-fe9b9d5225b9',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '222',
    title:
      '{"postTitle":"패딩 논쟁","postContent":"패딩 지퍼 올려주기 가능?","agreeContent":"가능","disagreeContent":"불가능","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655286185/post/14903348-aef2-41c6-b08f-f7e69f9b320f.jpg',
    imagePublicId: 'post/14903348-aef2-41c6-b08f-f7e69f9b320f',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '111',
    title:
      '{"postTitle":"블루투스 논쟁","postContent":"내 연인의 차에 이성인 직장 동료의 블루투스 연결 기록이 남아있다면?!","agreeContent":"뭐가 문제?","disagreeContent":"당근 안되지","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655302512/post/ea68dfde-3668-406c-ae19-9a0477920934.jpg',
    imagePublicId: 'post/ea68dfde-3668-406c-ae19-9a0477920934',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '00',
    title:
      '{"postTitle":"새우 논쟁","postContent":"새우 껍질 까주기 가능?","agreeContent":"가능","disagreeContent":"불가능","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655302481/post/9a814652-24fd-4a77-aeb1-6fe41c71ebd8.jpg',
    imagePublicId: 'post/9a814652-24fd-4a77-aeb1-6fe41c71ebd8',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '99',
    title:
      '{"postTitle":"깻잎 논쟁","postContent":"깻잎 떼주기 가능?","agreeContent":"가능","disagreeContent":"불가능","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655302452/post/2c13397d-94ac-425a-b519-fe9b9d5225b9.jpg',
    imagePublicId: 'post/2c13397d-94ac-425a-b519-fe9b9d5225b9',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '88',
    title:
      '{"postTitle":"패딩 논쟁","postContent":"패딩 지퍼 올려주기 가능?","agreeContent":"가능","disagreeContent":"불가능","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655286185/post/14903348-aef2-41c6-b08f-f7e69f9b320f.jpg',
    imagePublicId: 'post/14903348-aef2-41c6-b08f-f7e69f9b320f',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '77',
    title:
      '{"postTitle":"블루투스 논쟁","postContent":"내 연인의 차에 이성인 직장 동료의 블루투스 연결 기록이 남아있다면?!","agreeContent":"뭐가 문제?","disagreeContent":"당근 안되지","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655302512/post/ea68dfde-3668-406c-ae19-9a0477920934.jpg',
    imagePublicId: 'post/ea68dfde-3668-406c-ae19-9a0477920934',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '66',
    title:
      '{"postTitle":"새우 논쟁","postContent":"새우 껍질 까주기 가능?","agreeContent":"가능","disagreeContent":"불가능","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655302481/post/9a814652-24fd-4a77-aeb1-6fe41c71ebd8.jpg',
    imagePublicId: 'post/9a814652-24fd-4a77-aeb1-6fe41c71ebd8',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '55',
    title:
      '{"postTitle":"깻잎 논쟁","postContent":"깻잎 떼주기 가능?","agreeContent":"가능","disagreeContent":"불가능","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655302452/post/2c13397d-94ac-425a-b519-fe9b9d5225b9.jpg',
    imagePublicId: 'post/2c13397d-94ac-425a-b519-fe9b9d5225b9',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '44',
    title:
      '{"postTitle":"패딩 논쟁","postContent":"패딩 지퍼 올려주기 가능?","agreeContent":"가능","disagreeContent":"불가능","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655286185/post/14903348-aef2-41c6-b08f-f7e69f9b320f.jpg',
    imagePublicId: 'post/14903348-aef2-41c6-b08f-f7e69f9b320f',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '33',
    title:
      '{"postTitle":"블루투스 논쟁","postContent":"내 연인의 차에 이성인 직장 동료의 블루투스 연결 기록이 남아있다면?!","agreeContent":"뭐가 문제?","disagreeContent":"당근 안되지","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655302512/post/ea68dfde-3668-406c-ae19-9a0477920934.jpg',
    imagePublicId: 'post/ea68dfde-3668-406c-ae19-9a0477920934',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '22',
    title:
      '{"postTitle":"새우 논쟁","postContent":"새우 껍질 까주기 가능?","agreeContent":"가능","disagreeContent":"불가능","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655302481/post/9a814652-24fd-4a77-aeb1-6fe41c71ebd8.jpg',
    imagePublicId: 'post/9a814652-24fd-4a77-aeb1-6fe41c71ebd8',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '11',
    title:
      '{"postTitle":"깻잎 논쟁","postContent":"깻잎 떼주기 가능?","agreeContent":"가능","disagreeContent":"불가능","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655302452/post/2c13397d-94ac-425a-b519-fe9b9d5225b9.jpg',
    imagePublicId: 'post/2c13397d-94ac-425a-b519-fe9b9d5225b9',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '9',
    title:
      '{"postTitle":"패딩 논쟁","postContent":"패딩 지퍼 올려주기 가능?","agreeContent":"가능","disagreeContent":"불가능","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655286185/post/14903348-aef2-41c6-b08f-f7e69f9b320f.jpg',
    imagePublicId: 'post/14903348-aef2-41c6-b08f-f7e69f9b320f',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '8',
    title:
      '{"postTitle":"블루투스 논쟁","postContent":"내 연인의 차에 이성인 직장 동료의 블루투스 연결 기록이 남아있다면?!","agreeContent":"뭐가 문제?","disagreeContent":"당근 안되지","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655302512/post/ea68dfde-3668-406c-ae19-9a0477920934.jpg',
    imagePublicId: 'post/ea68dfde-3668-406c-ae19-9a0477920934',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '7',
    title:
      '{"postTitle":"새우 논쟁","postContent":"새우 껍질 까주기 가능?","agreeContent":"가능","disagreeContent":"불가능","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655302481/post/9a814652-24fd-4a77-aeb1-6fe41c71ebd8.jpg',
    imagePublicId: 'post/9a814652-24fd-4a77-aeb1-6fe41c71ebd8',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '6',
    title:
      '{"postTitle":"깻잎 논쟁","postContent":"깻잎 떼주기 가능?","agreeContent":"가능","disagreeContent":"불가능","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655302452/post/2c13397d-94ac-425a-b519-fe9b9d5225b9.jpg',
    imagePublicId: 'post/2c13397d-94ac-425a-b519-fe9b9d5225b9',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '5',
    title:
      '{"postTitle":"패딩 논쟁","postContent":"패딩 지퍼 올려주기 가능?","agreeContent":"가능","disagreeContent":"불가능","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655286185/post/14903348-aef2-41c6-b08f-f7e69f9b320f.jpg',
    imagePublicId: 'post/14903348-aef2-41c6-b08f-f7e69f9b320f',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '4',
    title:
      '{"postTitle":"블루투스 논쟁","postContent":"내 연인의 차에 이성인 직장 동료의 블루투스 연결 기록이 남아있다면?!","agreeContent":"뭐가 문제?","disagreeContent":"당근 안되지","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655302512/post/ea68dfde-3668-406c-ae19-9a0477920934.jpg',
    imagePublicId: 'post/ea68dfde-3668-406c-ae19-9a0477920934',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '3',
    title:
      '{"postTitle":"새우 논쟁","postContent":"새우 껍질 까주기 가능?","agreeContent":"가능","disagreeContent":"불가능","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655302481/post/9a814652-24fd-4a77-aeb1-6fe41c71ebd8.jpg',
    imagePublicId: 'post/9a814652-24fd-4a77-aeb1-6fe41c71ebd8',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '2',
    title:
      '{"postTitle":"깻잎 논쟁","postContent":"깻잎 떼주기 가능?","agreeContent":"가능","disagreeContent":"불가능","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655302452/post/2c13397d-94ac-425a-b519-fe9b9d5225b9.jpg',
    imagePublicId: 'post/2c13397d-94ac-425a-b519-fe9b9d5225b9',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
  {
    likes: [],
    comments: [],
    _id: '1',
    title:
      '{"postTitle":"패딩 논쟁","postContent":"패딩 지퍼 올려주기 가능?","agreeContent":"가능","disagreeContent":"불가능","agree":[],"disagree":[]}',
    image:
      'https://res.cloudinary.com/learnprogrammers/image/upload/v1655286185/post/14903348-aef2-41c6-b08f-f7e69f9b320f.jpg',
    imagePublicId: 'post/14903348-aef2-41c6-b08f-f7e69f9b320f',
    channel: {
      posts: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
  },
];

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = useRef(2);
  const navigation = useNavigate();

  const initialPosts = useCallback(() => {
    setPosts([...DUMMY_DATA.slice(offset, limit.current)]);
    setOffset((prev) => prev + limit.current);
  }, []);

  const loadPost = useCallback(async () => {
    setPosts([...posts, ...DUMMY_DATA.slice(offset, offset + limit.current)]);
    setOffset((prev) => prev + limit.current);
    console.log('load Post!!', posts.length);
    console.log(posts[posts.length - 1].channel.posts.length);
  }, [offset, limit, posts]);

  useEffect(() => {
    initialPosts();
  }, []);

  console.log(posts);

  return (
    <Container>
      <Wrapper>
        <InputBar
          placeholder={'게시물 검색'}
          buttonType={'inside'}
          onSubmit={(value) => navigation(`/search/${value}`)}
        />
        <Button onClick={() => navigation(`/create-post`)}>논쟁 올리기</Button>
      </Wrapper>
      <PostList posts={posts} />
      {offset < posts[posts.length - 1]?.channel.posts.length && (
        <Button
          onClick={loadPost}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          더 보기
        </Button>
      )}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
