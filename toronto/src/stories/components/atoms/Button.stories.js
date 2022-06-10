import Button from '@/components/atoms/Button';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    type: {
      defaultValue: 'basic',
      options: ['basic', 'core', 'special', 'Danger', 'Warning'],
      control: { type: 'select' },
    },
    size: {
      defaultValue: 'medium',
      options: ['tiny', 'small', 'medium', 'large', 'xLarge'],
      control: { type: 'inline-radio' },
    },
    icon: {
      name: 'containsIcon',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      name: 'isDisabled',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    loading: {
      name: 'isLoading',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    onClick: { action: 'onClick' },
    children: { control: { type: 'text' } },
  },
};

export const Default = (args) => {
  return (
    <div style={{ padding: 30 }}>
      <Button {...args}>버튼</Button>
    </div>
  );
};
