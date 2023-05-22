import React from "react";
import { Line } from "react-chartjs-2";
const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Dat", "Sun"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "dataset",
      backgroundColor: [
        "#1C4BCD",
        "#157A3A",
        "#1C4BCD",
        "#157A3A",
        "#1C4BCD",
        "#157A3A",
      ],
      borderColor: "#afafaf000",
      data: [75, 90, 20, 49, 10, 90, 50],
    },
  ],
};

export default function Ampere() {
  return (
    <div>
      <div>
        <h4>Ampere (FR1)</h4>
      </div>
      <Line
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
