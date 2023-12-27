// eslint-disable-next-line no-unused-vars
import { t } from "i18next";
import { GraphProps } from "../../models/WeatherDataModel";
import { Line } from "react-chartjs-2";

import { Chart as ChartJS, registerables } from "chart.js/auto";
const Graph = ({ temperature, time }: GraphProps) => {
  ChartJS.register(...registerables);
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const graphData = {
    labels: time,

    datasets: [
      {
        label: t("Temperature"),
        data: temperature,
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <Line data={graphData} options={options} style={{ maxHeight: "40vh" }} />
  );
};

export default Graph;
