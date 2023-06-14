import Link from "next/link";
import React from "react";

const DisplayPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full text-2xl">
      <span>Make your choice of setup for the page</span>
      <div className="flex gap-5">
        <Link href={"/display/map"} className="bg-red-200 p-1 rounded">
          Map
        </Link>
        <Link href={"/display/scatter"} className="bg-red-200 p-1 rounded">
          Scatter
        </Link>
      </div>
    </div>
  );
};

export default DisplayPage;
