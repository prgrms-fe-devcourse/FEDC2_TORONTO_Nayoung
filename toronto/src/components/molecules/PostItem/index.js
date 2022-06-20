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
  max-height: 300px;
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
      <StyledLink
        to={`/controversy/${postId}`}
        onClick={handleClick}
        style={{ color: 'black' }}
      >
        <Card
          padding={10}
          hover={true}
          radius={5}
          style={{ width: '100%', boxSizing: 'border-box' }}
        >
          <PostContainer>
            <Header
              level={3}
              style={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {postTitle}
            </Header>
            <Image
              src={image || 'https://via.placeholder.com/200'}
              width={'100%'}
              height={200}
            />
            <Text
              size='normal'
              style={{
                paddingTop: 20,
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              {postContent}
            </Text>
          </PostContainer>
        </Card>
      </StyledLink>
    </StyledLi>
  );
};

export default PostItem;
