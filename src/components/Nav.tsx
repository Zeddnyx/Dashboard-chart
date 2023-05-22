import React from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { BiMessageSquareDetail, BiLogOut, BiHistory } from "react-icons/bi";
import { GrVmMaintenance } from "react-icons/gr";
import {VscTools} from "react-icons/vsc";
import {
  AiFillFileText,
  AiOutlineUser,
  AiOutlineSetting,
} from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
import Logo from "../assets/photo_2023-05-22_11-20-08.jpg";

export default function Nav() {
  return (
    <div className="w-24 text-[#afafaf] fixed top-0 left-0 bg-[#151616] my-2">
      <div className="flex items-center justify-center text-[#18347E]">
        <h1>F.C.C</h1>
      </div>

      <ul className="mt-6 gap-5 flex flex-col items-center text-center h-full overflow-x-scroll">
        {data.map((item, id) => {
          return (
            <li key={id} className="w-full h-12">
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
        <li className="mt-3 px-3 hover:bg-[#334851] py-3 w-full hover:border-l-2 border-[#fff]">
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
    logo: <RxDashboard size="20" />,
  },
  {
    title: "Detail",
    logo: <BiMessageSquareDetail size="20" />,
  },
  {
    title: "Maintenance",
    logo: <VscTools size="20" />,
  },
  {
    title: "Master Data",
    logo: <AiFillFileText size="20" />,
  },
  {
    title: "Acticity User",
    logo: <BiHistory size="20" />,
  },
  {
    title: "Management User",
    logo: <FaUsersCog size="20" />,
  },
  {
    title: "Account",
    logo: <AiOutlineUser size="20" />,
  },
  {
    title: "Settings",
    logo: <AiOutlineSetting size="20" />,
  },
];
