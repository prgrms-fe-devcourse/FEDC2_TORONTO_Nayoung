import { Loader } from '@/components/atoms';

export default {
  title: 'Components/Atoms/Loader',
  component: Loader,
  argTypes: {
    color: { control: 'color' },
  },
};

export const Spinner = (args) => {
  return <Loader {...args} type='spinner'></Loader>;
};

export const Spinners = (args) => {
  return <Loader {...args} type='spinners'></Loader>;
};

export const ThreeDots = (args) => {
  return <Loader {...args} type='three-dots'></Loader>;
};

export const SpinningCircles = (args) => {
  return <Loader {...args} type='spinning-circles'></Loader>;
};

export const Puff = (args) => {
  return <Loader {...args} type='puff'></Loader>;
};

export const Audio = (args) => {
  return <Loader {...args} type='audio'></Loader>;
};

export const Error = () => {
  return <Loader type='없는이름'></Loader>;
};
