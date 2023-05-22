import { Bar } from "react-chartjs-2";
import React from "react";
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
        "#1C4BCD",
        "#157A3A",
        "#1C4BCD",
        "#157A3A",
      ],
      borderColor: "#afafaf000",
      data: [29,75,39, 80, 60, 50, 92, 44, 50],
    },
  ],
};

export default function ProductiveGraph() {
  return (
    <div className="w-full h-full">
      <div>
        <h4>Productive Graph (Fine Boring)</h4>
      </div>
      <Bar
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
      <div className="flex justify-between ">
        <div className="flex gap-8">
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-[#1C4BCD] rounded-full"></div>
            <p>Plan</p>
          </div>
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-[#157a3a] rounded-full"></div>
            <p>Actual</p>
          </div>
        </div>
        <div className="flex gap-2">
            <div className="w-4 h-4 bg-[#fff] rounded-full"></div>
            <div className="w-4 h-4 bg-[#afafaf] rounded-full"></div>
            <div className="w-4 h-4 bg-[#afafaf] rounded-full"></div>
          
        </div>
      </div>
    </div>
  );
}
