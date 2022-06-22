import React, { useState } from 'react';
import { Text } from '@/components/atoms';
import styled from 'styled-components';

const Tooltip = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseOver = () => {
    setIsOpen(true);
  };

  const handleMouseOut = () => {
    setIsOpen(false);
  };

  const node = React.Children.toArray(children).map((element) => {
    return React.cloneElement(element, {
      ...element.props,
      onMouseOver: handleMouseOver,
      onMouseOut: handleMouseOut,
    });
  });

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {node}
      <TooltipContainer isOpen={isOpen}>
        <Text>{text}</Text>
      </TooltipContainer>
    </div>
  );
};

export default Tooltip;

const TooltipContainer = styled.div`
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  display: ${({ isOpen }) => (isOpen ? 'inline-block' : 'none')};
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  color: #fff;
  z-index: 100;
`;
