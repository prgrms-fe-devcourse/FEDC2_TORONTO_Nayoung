import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledRouterLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const StyledLink = ({ children, ...props }) => {
  return <StyledRouterLink {...props}>{children}</StyledRouterLink>;
};

export default StyledLink;
