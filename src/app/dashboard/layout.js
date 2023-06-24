import Link from "next/link";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="w-full h-full flex flex-col bg-pink-200 gap-2 p-2">
      <div className="w-full bg-white flex gap-5">
        <Link href={"/dashboard/map?year=2019&view=province"}>Map</Link>
        <Link href={"/dashboard/scatter?year=2019&view=province"}>Scatter</Link>
      </div>
      <div className="w-full h-full flex gap-1">
        <div className="w-1/2 h-full bg-white">{children}</div>
        <div className="w-1/2 h-full bg-white">Right</div>
      </div>
    </div>
  );
}
