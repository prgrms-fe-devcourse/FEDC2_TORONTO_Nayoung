import StyledLink from '@/components/atoms/StyledLink';
import Card from '@/components/atoms/Card';
import Header from '@/components/atoms/Header';
import Image from '@/components/atoms/Image';
import Text from '@/components/atoms/Text';
import Icon from '@/components/atoms/Icon';
import Loader from '@/components/atoms/Loader';
import styled from 'styled-components';
import { useState } from 'react';

const StyledLi = styled.li`
  list-style: none;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;

  &:hover {
    transform: scale(1.2);
  }
`;

const PostItem = ({ post }) => {
  const userId = `${process.env.REACT_APP_USER_ID}`; // 더미 데이터, 추후 Context API로 교체 예정;
  const { _id: postId, image, likes } = post;
  const { postTitle, postContent } = JSON.parse(post.title);
  const like = likes
    ? likes.filter(({ user }) => user === userId)[0]
    : undefined;
  const [isLike, setIsLike] = useState(Boolean(like));
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (!userId) return;
    setIsLoading(true);

    if (!isLike) {
      // await axios.post(
      //   `${process.env.REACT_APP_END_POINT}/likes/create`,
      //   {
      //     postId: postId,
      //   },
      //   {
      //     headers: {
      //       Authorization: `bearer ${process.env.REACT_APP_USER_TOKEN}`,
      //     },
      //   },
      // );
      console.log('Like Success!!');
    } else {
      // await axios.delete(`${process.env.REACT_APP_END_POINT}/likes/delete`, {
      //   headers: {
      //     Authorization: `bearer ${process.env.REACT_APP_USER_TOKEN}`,
      //   },
      //   data: {
      //     id: like._id,
      //   },
      // });
      console.log('disLike Success!!');
    }

    setIsLike((like) => !like);
    setIsLoading(false);
  };

  return (
    <StyledLi>
      <Card
        padding={10}
        hover={true}
        radius={5}
        style={{ width: '100%', boxSizing: 'border-box' }}
      >
        <PostContainer>
          <TitleContainer>
            <Header
              level={3}
              style={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              {postTitle}
            </Header>
            {!isLoading ? (
              <StyledButton onClick={handleClick}>
                {isLike ? (
                  <Icon
                    iconName={'thumbs-up'}
                    strokeWidth={1.5}
                    fill={'#2366F6'}
                  />
                ) : (
                  <Icon iconName={'thumbs-up'} strokeWidth={1.5} />
                )}
              </StyledButton>
            ) : (
              <Loader size={24} loading={isLoading} />
            )}
          </TitleContainer>
          <StyledLink to={`/posts/${postId}`} style={{ color: 'black' }}>
            <ContentContainer>
              <Image
                src={image || 'https://via.placeholder.com/200'}
                width={'100%'}
                height={200}
                mode={'cover'}
              />
              <Text size='normal' style={{ paddingTop: 20 }}>
                {postContent}
              </Text>
            </ContentContainer>
          </StyledLink>
        </PostContainer>
      </Card>
    </StyledLi>
  );
};

export default PostItem;
