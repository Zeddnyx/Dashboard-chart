import { Bar } from "react-chartjs-2";
import React from "react";
const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Dat", "Sun"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "plan",
      backgroundColor:"#1C4BCD",
      borderColor: "#afafaf000",
      data: [70,80, 60, 66, 68, 62, 73, 60],
    },
    {
      label: "actual",
      backgroundColor: "#157A3A",
      borderColor: "#afafaf000",
      data: [71, 69, 43, 58, 44, 71, 52, 43],
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
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-[#1C4BCD] rounded-full"></div>
            <p>Plan</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-[#157a3a] rounded-full"></div>
            <p>Actual</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-[#fff] rounded-full"></div>
            <div className="w-3 h-3 bg-[#afafaf] rounded-full"></div>
            <div className="w-3 h-3 bg-[#afafaf] rounded-full"></div>
          
        </div>
      </div>
    </div>
  );
}
