import React from "react";
import { Line } from "react-chartjs-2";
const DATA_COUNT = 10;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}
const datapoints = [0, 20, 20, 60, 60, 100];
const data = [10, 20, 30, 40, 60, 80, 100];
const data2 = {
  labels: labels,
  radius: 0,
  hitRadius: 0,
  datasets: [
    {
      label: "MTTR & MTTBF",
      data: data,
      borderColor: "#157A3A",
      backgroundColor: "#157a3a",
      fill: false,
      pointBorderColor: "transparent",
      pointBorderWidth: 0,
      tension: 0.4,
    },
    {
      label: "Plan",
      data: datapoints,
      borderColor: "#B27F20",
      fill: false,
      pointBorderColor: "transparent",
      pointBorderWidth: 0,
      tension: 0.4,
    },
  ],
};
const options = {
  type: "line",
  locale: false,
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

export default function MTTR() {
  return (
    <div className="grid gap-3 h-60 overflow-x-scroll">
      <div>
        <h2>MTTR</h2>
        <Line data={data2} options={options} />
      </div>
      <div>
        <h2>MTBF</h2>
        <Line data={data2} options={options} />
      </div>
    </div>
  );
}
