import { Header } from '@/components/atoms';

export default {
  title: 'Components/Atoms/Header',
  component: Header,
  argTypes: {
    level: { control: { type: 'range', min: 1, max: 6 } },
    strong: { control: 'boolean' },
    underline: { control: 'boolean' },
    color: { control: 'color' },
  },
};

export const Default = (args) => {
  return <Header {...args}>Header</Header>;
};
