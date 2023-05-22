import React from "react";
import { Bar } from "react-chartjs-2";
const labels = [0, 1, 2, 3, 4];
const data = {
  labels: labels,
  datasets: [
    {
      label: "",
      backgroundColor: "#B5171F",
      borderColor: "transparent",
      data: [100, 80, 60, 40, 20],
    },
  ],
};
const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      display: false,
    },
  },
};

export default function TopFrequency() {
  return (
    <div className="w-full h-full">
      <div>
        <h2>5 Top Frequency Machine Alarm</h2>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}
