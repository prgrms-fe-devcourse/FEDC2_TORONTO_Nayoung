import styled from 'styled-components';
import { LoaderList } from './LoaderList';

const LoaderContainer = styled.i`
  display: inline-block;
  vertical-align: middle;
`;

const Loader = ({
  size = 64,
  color = '#919EAB',
  loading = true,
  type = 'spinner', // spinner, spinners, three-dots, spinning-circles, puff, audio
  ...props
}) => {
  const sizeStyle = {
    width: size,
    height: size,
  };

  return loading ? (
    <LoaderContainer {...props}>
      {LoaderList(type, sizeStyle, color)}
    </LoaderContainer>
  ) : null;
};

export default Loader;
