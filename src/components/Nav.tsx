import React from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { BiMessageSquareDetail, BiLogOut, BiHistory } from "react-icons/bi";
import { GrVmMaintenance } from "react-icons/gr";
import {
  AiFillFileText,
  AiOutlineUser,
  AiOutlineSetting,
} from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
import Logo from "../assets/photo_2023-05-22_11-25-08.jpg";

export default function Nav() {
  return (
    <div className="w-28 text-[#afafaf]">
      <div>
        <img src={Logo} alt="F.C.C" />
      </div>

      <ul className="mt-20 gap-5 flex flex-col items-center text-center">
        {data.map((item, id) => {
          return (
            <li key={id} className="w-full h-14">
              <Link
                to={item.title}
                className="flex flex-col items-center text-center gap-1 py-3 p-1 hover:text-blue-600 hover:bg-[#334851] w-full hover:border-l-2 border-[#fff] group"
              >
                <i>{item.logo}</i>
                <p>{item.title}</p>
              </Link>
            </li>
          );
        })}
        <li className="mt-10 px-3 hover:bg-[#334851] py-3 w-full hover:border-l-2 border-[#fff]">
        <Link to="/" className="flex flex-col items-center">
          <i>
            <BiLogOut size="30" />
          </i>
          <p>Logout</p>
        </Link>
        </li>
      </ul>
    </div>
  );
}

const data = [
  {
    title: "Dashboard",
    logo: <RxDashboard size="30" />,
  },
  {
    title: "Detail",
    logo: <BiMessageSquareDetail size="30" />,
  },
  {
    title: "Maintenance",
    logo: <GrVmMaintenance size="30" />,
  },
  {
    title: "Master Data",
    logo: <AiFillFileText size="30" />,
  },
  {
    title: "Acticity User",
    logo: <BiHistory size="30" />,
  },
  {
    title: "Management User",
    logo: <FaUsersCog size="30" />,
  },
  {
    title: "Account",
    logo: <AiOutlineUser size="30" />,
  },
  {
    title: "Settings",
    logo: <AiOutlineSetting size="30" />,
  },
];
