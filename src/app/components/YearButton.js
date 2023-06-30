"use client";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

// this will need to change from hardcoded to pulling from array
const currentUsedYears = [2022, 2021, 2020, 2019];

const YearButton = () => {
  //
  const router = useRouter();
  const pathname = usePathname();

  //
  const [chosenYear, setChosenYear] = useState(2022);
  const [isOpen, setIsOpen] = useState(false);
  //
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  //
  const handleMapYearClick = (e) => {
    setChosenYear(e.target.dataset.tag);
    setIsOpen(!isOpen);
    console.log(pathname);
  };

  useEffect(() => router.push(`${pathname}?year=${chosenYear}`), [chosenYear]);
  //
  return (
    <div className=" inline-block text-left z-[2000]">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-1 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out "
          >
            {chosenYear}
            <FaAngleDown className="text-base ml-1" />
          </button>
        </span>
      </div>
      {isOpen && (
        <div className="origin-top-left absolute mt-1 w-[124px]  rounded-md shadow-lg z-[2000]">
          <div className="rounded-md bg-white shadow-xs">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {currentUsedYears.map((year) => {
                return (
                  <span
                    onClick={handleMapYearClick}
                    data-tag={year}
                    className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
                    role="menuitem"
                    key={year}
                  >
                    {year}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YearButton;
