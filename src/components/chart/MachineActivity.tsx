import React from "react";
import { Bar } from "react-chartjs-2";
const labels = [0, 1, 2, 3, 4,5,6];
const data = {
  labels: labels,
  datasets: [
    {
      label: "",
      backgroundColor: "#144828",
      borderColor: "transparent",
      data: [100, 100, 100, 100, 100, 100, 100],
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

export default function MachineActivity() {
  return (
    <div className="w-full h-full">
      <div>
      <h2>Machine Activity</h2>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}
