import Chart from '@/components/atoms/Chart';

export default {
  title: 'Component/Chart',
  component: Chart,
};

const data = [
  {
    id: 'scala',
    label: 'scala',
    value: 525,
    color: 'hsl(173, 70%, 50%)',
  },
  {
    id: 'java',
    label: 'java',
    value: 15,
    color: 'hsl(105, 70%, 50%)',
  },
  {
    id: 'javascript',
    label: 'javascript',
    value: 54,
    color: 'hsl(210, 70%, 50%)',
  },
  {
    id: 'php',
    label: 'php',
    value: 532,
    color: 'hsl(116, 70%, 50%)',
  },
  {
    id: 'go',
    label: 'go',
    value: 492,
    color: 'hsl(317, 70%, 50%)',
  },
];

export const Defualt = () => {
  return <Chart data={data}>Chart</Chart>;
};
