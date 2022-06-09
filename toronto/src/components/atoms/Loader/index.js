import styled from 'styled-components';
import { LoaderList } from './LoaderList';

const Icon = styled.i`
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
    <Icon {...props}>{LoaderList(type, sizeStyle, color)}</Icon>
  ) : null;
};

export default Loader;
