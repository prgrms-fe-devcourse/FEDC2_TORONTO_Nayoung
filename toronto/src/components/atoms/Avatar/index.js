import ImageComponent from '../Image';
import AvatarGroup from '../../molecules/AvatarGroup';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const ShapeToCssValue = {
  circle: '50%',
  round: '4px',
  sqare: '0px',
};

const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: ${({ shape }) => ShapeToCssValue[shape]};
  background-color: #eee;
  overflow: hidden;
  > img {
    transition: opacity 0.3s ease-out;
  }
`;

const Avatar = ({
  lazy,
  threshold,
  src,
  size = 70,
  shape = 'circle',
  placeholder,
  alt,
  mode = 'dover',
  __TYPE,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setLoaded(true);
  }, [src]);

  return (
    <AvatarWrapper {...props} shape={shape}>
      <ImageComponent
        block
        lazy={lazy}
        threshold={threshold}
        width={size}
        height={size}
        src={src}
        placeholder={placeholder}
        alt={alt}
        mode={mode}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </AvatarWrapper>
  );
};

Avatar.defaultProps = {
  __TYPE: 'Avatar',
};

Avatar.Group = AvatarGroup;

export default Avatar;
