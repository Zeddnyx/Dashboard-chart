import React from "react";
import { Line } from "react-chartjs-2";
const labels = [1,2,3,4,5,6,7,8,9];
const data = {
  labels: labels,
  datasets: [
    {
      data: [29, 30, 26, 50, 20, 44, 50],
      backgroundColor: "#1C4BCD",
      borderColor: "#afafaf",
      pointBorderColor: "transparent",
      pointBorderWidth: 1,
      tensions: 0.3
    },
  ],
};
const options = {
  plugins: {
    legend: false,
  },
  type : "monotone",
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

export default function Volatage() {
  return (
    <div>
      <div>
        <h4>Volatage (FR1)</h4>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}
