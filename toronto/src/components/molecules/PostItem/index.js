import { StyledLink, Card, Header, Image, Text } from '@/components/atoms';
import styled from 'styled-components';
import placeholder from '@/assets/images/post_placeholder.png';

const StyledLi = styled.li`
  list-style: none;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-top: 1px solid #b1b1b182;
`;

const PostItem = ({ post }) => {
  const { _id: postId, image } = post;
  const { postTitle, postContent } = JSON.parse(post.title);

  return (
    <StyledLi>
      <StyledLink to={`/controversy/${postId}`} style={{ color: 'black' }}>
        <Card
          padding={0}
          hover={true}
          radius={0}
          style={{
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
          }}
        >
          <PostContainer>
            <Image
              src={image || placeholder}
              width={'100%'}
              height={200}
              style={{
                flexGrow: 1,
              }}
            />
            <ContentContainer>
              <Header
                level={3}
                style={{
                  margin: 0,
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  fontFamily: 'S-CoreDream-Medium',
                }}
              >
                {postTitle}
              </Header>
              <Text
                size='normal'
                style={{
                  paddingTop: 10,
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  fontFamily: 'S-CoreDream-Regular',
                }}
              >
                {postContent}
              </Text>
            </ContentContainer>
          </PostContainer>
        </Card>
      </StyledLink>
    </StyledLi>
  );
};

export default PostItem;
