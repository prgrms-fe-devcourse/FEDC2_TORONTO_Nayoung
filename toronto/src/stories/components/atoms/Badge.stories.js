import { Badge, Image } from '@/components/atoms';

export default {
  title: 'Components/Atoms/Badge',
  component: Badge,
  argTypes: {
    count: { defaultValue: 10, control: 'number' },
    maxCount: { defaultValue: 100, control: 'number' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    showZero: { default: false, control: 'boolean' },
  },
};

export const Default = (args) => {
  return (
    <Badge {...args}>
      <Image
        src='https://picsum.photos/60'
        width={60}
        style={{ borderRadius: 8 }}
      />
    </Badge>
  );
};

export const Dot = () => {
  return (
    <Badge dot>
      <Image src='https://picsum.photos/40' width={40} />
    </Badge>
  );
};
