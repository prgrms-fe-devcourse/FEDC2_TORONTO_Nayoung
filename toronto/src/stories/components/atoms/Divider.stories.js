import { Divider } from '@/components/atoms';

export default {
  title: 'Components/Atoms/Divider',
  component: Divider,
};

export const Horizontal = () => {
  return (
    <>
      <span>위</span>
      <Divider type='horizontal' />
      <span>아래</span>
    </>
  );
};

export const Vertical = () => {
  return (
    <>
      <span>왼쪽</span>
      <Divider type='vertical' />
      <span>오른쪽</span>
    </>
  );
};
