import React from "react";
import NavHomepage from "../components/NavHomepage";
import PaiCart from "../components/chart/TimeMachineDetail";
import LayoutArena from "../components/chart/LayoutMachineArena";
import Maintenance from "../components/chart/Maintenance";
import MachineActivity from "../components/chart/MachineActivity";
import MTTR from "../components/chart/MTTR";
import ProductivGrap from "../components/chart/ProductiveGraph";
import Volatage from "../components/chart/Volatage";
import Ampere from "../components/chart/Ampere";
import TopFrequency from "../components/chart/TopFrequency";

export default function homepage() {
  return (
    <div className="w-full px-2 text-[#fff]">
      <NavHomepage />
      <div className="grid grid-cols-3 gap-3 p-2">
        <PaiCart />
        <LayoutArena />
        <Maintenance />
        <MachineActivity />
        <MTTR />
        <ProductivGrap />
        <Volatage />
        <Ampere />
        <TopFrequency />
      </div>
    </div>
  );
}
