import Base from './Base';

const Box = ({ width, height, ...props }) => (
  <Base style={{ width, height, ...props.style }} />
);

export default Box;
