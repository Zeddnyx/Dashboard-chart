import react from "react";
import { HiMenu } from "react-icons/hi";
import { VscBellDot } from "react-icons/vsc";

export default function NavHomepage() {
  return (
    <div className="flex justify-between items-center w-full py-2">
      <div className="flex gap-10 items-center">
        <HiMenu size="25" />
        <h2>DIGITALIZATION LINE PRODUCTION</h2>
      </div>
      <div className="flex items-center gap-2">
        <p>FRIDAY, 23 DECEMBER 2022</p>
        <p className="font-semibold flex items-center gap-2">
          {" "}
          | 11:21:01{" "}
          <i>
            {" "}
            <VscBellDot size="20" />
          </i>
        </p>
      </div>
    </div>
  );
}
