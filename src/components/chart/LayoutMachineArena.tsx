import React from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";

export default function TimeMachineDetail() {
  return (
    <div className="grid gap-2">
      <div className="flex justify-center items-center">
        <h4>Layout Machine Arena</h4>
      </div>
      <div className="grid grid-cols-7 gap-2 h-64 w-full">
        {data.map((item, id) => (
          <div key={id} className={`${item.color}  text-center`}>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-[#DC3545] rounded-full"></div>
            <p>Stop</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-[#f1be42] rounded-full"></div>
            <p>Idle</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-[#157a3a] rounded-full"></div>
            <p>Running</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-[#9ba5ac] rounded-full"></div>
            <p>Disconnet</p>
          </div>
        </div>

        <div className="flex gap-1">
          <i className="flex items-center gap-1">
            <AiOutlineWarning />
            <p>Alarm</p>
          </i>
          <i className="flex items-center gap-1">
            <VscTools />
            <p>Maintenance</p>
          </i>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    title: "FR1",
    logo: "",
    color: "bg-[#33a02c]",
  },
  {
    title: "FR3",
    logo: "",
    color: "bg-[#33a02c]",
  },
  {
    title: "FR2",
    logo: "",
    color: "bg-[#33a02c]",
  },
  {
    title: "FR3",
    logo: "",
    color: "bg-[#33a02c]",
  },
  {
    title: "RR4",
    logo: "",
    color: "bg-[#33a02c]",
  },
  {
    title: "GA",
    logo: "",
    color: "bg-[#33a02c]",
  },
  {
    title: "PDHL",
    logo: "",
    color: "bg-[#33a02c]",
  },
  {
    title: "LSR",
    logo: "",
    color: "bg-[#DC3545]",
  },
  {
    title: "FINE B",
    logo: "",
    color: "bg-[#f1be42]",
  },
  {
    title: "",
    logo: "",
    color: "bg-[#9ba5ac]",
  },
  {
    title: "",
    logo: "",
    color: "bg-[#9ba5ac]",
  },
  {
    title: "",
    logo: "",
    color: "bg-[#9ba5ac]",
  },
  {
    title: "",
    logo: "",
    color: "bg-[#9ba5ac]",
  },
  {
    title: "",
    logo: "",
    color: "bg-[#9ba5ac]",
  },
  {
    title: "",
    logo: "",
    color: "bg-[#9ba5ac]",
  },
  {
    title: "",
    logo: "",
    color: "bg-[#9ba5ac]",
  },
  {
    title: "",
    logo: "",
    color: "bg-[#9ba5ac]",
  },
  {
    title: "",
    logo: "",
    color: "bg-[#9ba5ac]",
  },
  {
    title: "",
    logo: "",
    color: "bg-[#9ba5ac]",
  },
  {
    title: "",
    logo: "",
    color: "bg-[#9ba5ac]",
  },
  {
    title: "",
    logo: "",
    color: "bg-[#9ba5ac]",
  },
];
