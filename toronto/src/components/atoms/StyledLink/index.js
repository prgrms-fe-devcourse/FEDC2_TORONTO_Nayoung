import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledRouterLink = styled(Link)`
  border-radius: 6px;
  text-decoration: none;
  padding: 0.2rem;
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #000;
  }
  &:hover {
    text-decoration: none;
    color: #000;
    background-color: #eee;
  }
`;

const StyledLink = ({ children, ...props }) => {
  return <StyledRouterLink {...props}>{children}</StyledRouterLink>;
};

export default StyledLink;
