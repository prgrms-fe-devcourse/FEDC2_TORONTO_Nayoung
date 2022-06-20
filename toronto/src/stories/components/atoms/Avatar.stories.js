import { Avatar } from '@/components/atoms';

export default {
  title: 'Components/Atoms/Avatar',
  component: 'Avatar',
  argTypes: {
    src: { defaultValue: 'https://picsum.photos/200' },
    shape: {
      defaultValue: 'circle',
      control: 'inline-radio',
      options: ['circle', 'round', 'square'],
    },
    size: {
      defaultValue: 70,
      control: { type: 'range', min: 40, max: 200 },
    },
    mode: {
      defaultValue: 'cover',
      control: 'inline-radio',
      options: ['contain', 'cover', 'fill'],
    },
  },
};

export const Default = (args) => <Avatar {...args} />;

export const Group = () => {
  return (
    <Avatar.Group size={40}>
      <Avatar src='https://picsum.photos/200' />
      <Avatar src='https://picsum.photos/300' />
      <Avatar src='https://picsum.photos/400' />
      <Avatar src='https://picsum.photos/500' />
    </Avatar.Group>
  );
};
