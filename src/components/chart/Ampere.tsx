import React from "react";
import { Line } from "react-chartjs-2";
const labels = [1,2,3,4,5,6,7,8,9];
const data = {
  labels: labels,
  datasets: [
    {
      label: "ampere",
      data: [25, 30, 40,29, 30, 26, 40,29, 30, 26, 50,80],
      backgroundColor: "#1C4BCD",
      borderColor: "#1C4BCD",
      pointBorderColor: "transparent",
      pointBorderWidth: 0,
      tension: 0.5,
    },
  ],
};
const options = {
  radius: 0,
  hitRadius: 0,
  plugins: {
    legend: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        borderDash: [10],
      },
    },
  },
};

export default function Ampere() {
  return (
    <div>
      <div>
        <h4>Ampere (FR1)</h4>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}
