import { Skeleton } from '@/components/atoms';

export default {
  title: 'Components/Atoms/Skeleton',
  component: Skeleton,
};

export const Box = () => {
  return <Skeleton.Box width={300} height={300}></Skeleton.Box>;
};

export const Circle = () => {
  return <Skeleton.Circle size={50}></Skeleton.Circle>;
};

export const Paragraph = () => {
  return (
    <Skeleton.Paragraph
      line={3}
      style={{ width: '300px' }}
    ></Skeleton.Paragraph>
  );
};

export const Notification = () => {
  return <Skeleton.Notification></Skeleton.Notification>;
};
