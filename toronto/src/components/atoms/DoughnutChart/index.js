import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import PropTypes from 'prop-types';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartWrapper = styled.div`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
`;

const DoughnutChart = ({
  data,
  labels,
  backgroundColor,
  borderColor,
  borderWidth,
  chartSize,
}) => {
  const datasets = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderColor,
        borderWidth,
      },
    ],
  };

  return (
    <ChartWrapper width={chartSize} height={chartSize}>
      <Doughnut data={datasets} />
    </ChartWrapper>
  );
};

DoughnutChart.propTypes = {
  data: PropTypes.array.isRequired,
  labels: PropTypes.array,
  backgroundColor: PropTypes.array,
  borderColor: PropTypes.array,
  borderWidth: PropTypes.number,
  chartWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chartHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DoughnutChart;
