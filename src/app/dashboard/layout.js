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

// the "NAVBAR" here would be able to change the searchParams and control the routing.. this could also be done from within the other components but lets set it up here... we can send the user to map/scatter,,, a year,,, a level eg country/province/district, and like an active state eg, activeProvince id or activeDistrict id

// the components below here , 'children' is the map or scatter,, the right side will be the panel that also react to the search params...shows cards, lists, line charts, summaries,
// if you can get the system responding in this manner then it would be easier to set up every component to react correctly depending on the url created...
// eg... /dashboard/map?year=2021&view=province&active=provinceName (this shows a selected province and all districts)
// eg... /dashboard/map?year=2021&view=district&active=districtName (this shows the selected district)
// eg... /dashboard/map?year=2021&view=province&active=null (this shows all provinces)
// eg... the scatter would be the same here
