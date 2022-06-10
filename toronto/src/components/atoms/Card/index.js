import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
  display: inline-block;
  padding: ${({ padding }) =>
    typeof padding === 'number' ? `${padding}px` : padding};
  box-shadow: ${({ shadow }) =>
    shadow &&
    `rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px`};
  background-color: ${({ color }) => color};
  border-radius: ${({ radius }) =>
    typeof radius === 'number' ? `${radius}px` : radius};
  ${({ hover }) =>
    hover &&
    css`
      &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease-out;
      }
    `};
`;

const Card = ({
  children,
  padding,
  hover = false,
  shadow = true,
  color = '#fff',
  radius = 5,
  ...props
}) => {
  return (
    <CardContainer
      {...props}
      padding={padding}
      hover={hover}
      color={color}
      radius={radius}
      shadow={shadow}
      style={{ ...props.style }}
    >
      {children}
    </CardContainer>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hover: PropTypes.bool,
  shadow: PropTypes.bool,
  color: PropTypes.string,
  radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Card;
