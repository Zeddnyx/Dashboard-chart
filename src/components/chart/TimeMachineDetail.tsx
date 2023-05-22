import React from "react";
import { Chart, ArcElement } from "chart.js/auto";
Chart.register(ArcElement);
import { Pie } from "react-chartjs-2";
const labels = ["Stop Line", "Idle", "Running"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "dataset",
      backgroundColor: ["#9B102F", "#D8A42C", "#B0B325"],
      borderColor: "#afafaf000",
      data: [30, 20, 20],
    },
  ],
};
const options = {
  plugins: {
    legend: {
      position: "right",
    },
  },
};

export default function TimeMachineDetail() {
  return (
    <div className="w-full p-2 flex flex-col">
      <div className="flex justify-between items-center">
        <h4>Time Machine Detail</h4>
        <h4>MTTR | MTBF</h4>
      </div>

      <div className="flex gap-5 h-full w-full">
        <div className="w-64">
          <Pie data={data} options={options} />
        </div>

        <div className="h-full w-40 flex justify-between flex-col gap-2">
          <div className="p-2 h-full from-[#1C4BCD] to-[#151616] bg-gradient-to-b">
            <p>MTTR</p>
            <div className="items-center flex flex-col py-2">
              <h5>1,020 hours</h5>
            </div>
          </div>
          <div className="p-2 h-full from-green-700 to-[#151616] bg-gradient-to-b">
            <p>MTBF</p>
            <div className="items-center flex flex-col py-2">
              <h5>150,8 hours</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
