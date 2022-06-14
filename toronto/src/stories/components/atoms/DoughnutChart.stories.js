import DoughnutChart from '@/components/atoms/DoughnutChart';

export default {
  title: 'Component/DoughnutChart',
  component: DoughnutChart,
};
const data = {
  labels: ['Red', 'Blue'],
  datasets: [
    {
      data: [12, 19],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
      borderWidth: 1,
    },
  ],
};

export const Defualt = (args) => {
  return (
    <div style={{ width: '500px', height: '500px' }}>
      <DoughnutChart data={data} {...args} />
    </div>
  );
};
