import { StyledLink, Card, Header, Image, Text } from '@/components/atoms';
import styled from 'styled-components';
import { useUsersState } from '@/contexts/UserContext';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

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

const PostItem = ({ post }) => {
  const state = useUsersState();
  const navigate = useNavigate();
  const { data: user } = state.user;
  const userId = user?._id;
  const { _id: postId, image, comments } = post;
  const { postTitle, postContent } = JSON.parse(post.title);
  const isVoted = comments.some((comment) => comment.author?._id === userId);

  const handleClick = useCallback(
    (e) => {
      if (userId && isVoted) {
        e.preventDefault();
        navigate(`/controversy/result/${postId}`);
      }
    },
    [isVoted, userId, postId, navigate],
  );

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
          </TitleContainer>
          <StyledLink
            to={`/controversy/${postId}`}
            onClick={handleClick}
            style={{ color: 'black' }}
          >
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
