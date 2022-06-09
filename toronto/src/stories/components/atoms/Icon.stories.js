import Icon from '@/components/atoms/Icon';

export default {
  title: 'Component/Icon',
  component: Icon,
  argTypes: {
    size: { defaultValue: 24, control: { type: 'range', min: 16, max: 80 } },
    strokeWidth: {
      defaultValue: 1,
      control: { type: 'range', min: 1, max: 3 },
    },
    color: { defaultValue: '#000', control: 'color' },
    rotate: { defaultValue: 0, control: 'number' },
  },
};

export const Default = (args) => {
  return <Icon {...args} />;
};
