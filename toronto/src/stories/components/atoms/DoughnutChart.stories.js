import { DoughnutChart } from '@/components/atoms';

export default {
  title: 'Components/Atoms/DoughnutChart',
  component: DoughnutChart,
  argTypes: {
    borderWidth: { defulatValue: 1, control: 'number' },
    chartSize: { defaultValue: 100, control: 'number' },
  },
};

export const Default = (args) => {
  return (
    <DoughnutChart
      {...args}
      data={[12, 9]}
      labels={['Red', 'Blue']}
      backgroundColor={['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)']}
      borderColor={['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)']}
    />
  );
};
