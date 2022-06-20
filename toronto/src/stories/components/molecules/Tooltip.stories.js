import { Tooltip } from '@/components/molecules';

export default {
  title: 'Components/Molecules/Tooltip',
  component: Tooltip,
};

export const Default = () => {
  return (
    <Tooltip text='안녕'>
      <div>마우스 올리면?!</div>
    </Tooltip>
  );
};
