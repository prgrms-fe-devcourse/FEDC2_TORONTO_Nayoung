import { useState } from 'react';
import styled from 'styled-components';
import { Card, Icon, Divider } from '@/components/atoms';
import { useUsersState } from '@/contexts/UserContext';

const Wrapper = styled.div`
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
  const user = useUsersState();
  const isAuthor = authorId === user.user.data?._id;

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  const handleClick = () => {
    onDelete && onDelete(id);
  };

  return (
    <Card
      padding={10}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ display: 'block', ...props.style }}
    >
      <Wrapper width={width}>
        <div style={{ flexShrink: 0 }}>{author}</div>
        <div>
          <Divider type='vertical' />
        </div>
        <div>{content}</div>
        <IconWrapper
          onClick={handleClick}
          mouseOver={mouseOver}
          isAuthor={isAuthor}
        >
          <Icon iconName='x-circle' />
        </IconWrapper>
      </Wrapper>
    </Card>
  );
};

export default CommentItem;
