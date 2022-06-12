import StyledLink from '@/components/atoms/StyledLink';
import Card from '@/components/atoms/Card';
import Header from '@/components/atoms/Header';
import Image from '@/components/atoms/Image';
import Text from '@/components/atoms/Text';
import Icon from '@/components/atoms/Icon';
import styled from 'styled-components';

const StyledLi = styled.li`
  list-style: none;
  max-width: 400px;
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

const PostItem = ({ post }) => {
  const { _id: id, image } = post;
  const { postTitle, postContent } = post.title;

  return (
    <StyledLi>
      <StyledLink
        to={`/posts/${id}`}
        style={{
          display: 'inline-block',
          color: 'black',
          width: '100%',
        }}
      >
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
              <Icon iconName={'thumbs-up'} strokeWidth={2} />
            </TitleContainer>
            <Image
              src={image}
              width={'100%'}
              height={200}
              placeholder={'https://via.placeholder.com/200'}
            />
            <Text size='normal' style={{ paddingTop: 20 }}>
              {postContent}
            </Text>
          </PostContainer>
        </Card>
      </StyledLink>
    </StyledLi>
  );
};

export default PostItem;
