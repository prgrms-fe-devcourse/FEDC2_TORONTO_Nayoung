import React, { useState } from 'react';
import { Text } from '@/components/atoms';

const Tooltip = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseOver = () => {
    setIsOpen(true);
  };

  const handleMouseOut = () => {
    setIsOpen(false);
  };

  const node = React.Children.toArray(children).map(
    (element, index, elements) => {
      return React.cloneElement(element, {
        ...element.props,
        onMouseOver: handleMouseOver,
        onMouseOut: handleMouseOut,
      });
    },
  );

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {node}
      <div
        style={{
          position: 'absolute',
          top: '110%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'max-content',
          display: isOpen ? 'inline-block' : 'none',
          padding: 5,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          borderRadius: '4px',
          color: '#fff',
        }}
      >
        <Text>{text}</Text>
      </div>
    </div>
  );
};

export default Tooltip;
