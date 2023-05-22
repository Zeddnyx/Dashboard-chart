import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Maintenance() {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <h2>Maintenance</h2>
      <div className="grid grid-cols-5 gap-2 w-full">
      <div className="col-span-3">
        
        <Calendar onChange={setDate} value={date} />
      </div>
        <div className="grid gap-1 bg-[#181A1B] p-1 col-span-2 pt-5">
          {schedule.map((item) => {
            return (
              <div
                key={item.id}
                className={`bg-[#151616] border-l p-1 flex flex-col justify-between ${
                  item.title === "LSR" ? "border-[#858630]" : "border-[#FF0000]"
                }`}
              >
                <h6>{item.title}</h6>
                <p className="text-gray-500">{item.msg}</p>
                <p className="text-gray-400 text-[13px]">{item.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const schedule = [
  {
    title: "FR1",
    msg: "Machine Error",
    date: "23 Feb 2023",
  },
  {
    title: "FR2",
    msg: "Machine Error",
    date: "23 Feb 2023",
  },
  {
    title: "LSR",
    msg: "Machine Error",
    date: "23 Feb 2023",
  },
];
