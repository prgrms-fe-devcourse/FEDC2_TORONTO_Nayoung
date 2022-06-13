import Base from './Base';

const Circle = ({ size }) => {
  return (
    <Base style={{ width: size, height: size, borderRadius: '50%' }}></Base>
  );
};

export default Circle;
