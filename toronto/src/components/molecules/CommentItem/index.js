import { useState } from 'react';
import styled from 'styled-components';
import { Card, Icon, Header, Text, Loader } from '@/components/atoms';
import { useUsersState } from '@/contexts/UserContext';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  display: flex;
  width: ${({ width }) => width || '300px'};
`;

const IconWrapper = styled.div`
  display: ${({ mouseOver, isAuthor }) =>
    mouseOver && isAuthor ? 'block' : 'none'};
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const CommentItem = ({
  id,
  width,
  author,
  authorId,
  content,
  onDelete,
  ...props
}) => {
  const [mouseOver, setMouseOver] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);
  const user = useUsersState();
  const isAuthor = authorId === user.user.data?._id;

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  const handleClick = async () => {
    setDeleteClicked(true);
    onDelete && (await onDelete(id));
  };

  return (
    <Card
      padding={10}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ display: 'block', ...props.style }}
    >
      <Wrapper width={width}>
        <Header
          level={3}
          style={{ fontFamily: 'S-CoreDream-Regular', margin: 0 }}
        >
          {author}
        </Header>
        <Text style={{ fontFamily: 'S-CoreDream-Regular', paddingTop: 10 }}>
          <div>{content}</div>
        </Text>

        <IconWrapper mouseOver={mouseOver} isAuthor={isAuthor}>
          {deleteClicked ? (
            <Loader type='spinner' size={24} />
          ) : (
            <Icon iconName='x-circle' onClick={handleClick} />
          )}
        </IconWrapper>
      </Wrapper>
    </Card>
  );
};

export default CommentItem;
