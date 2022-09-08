import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import { getCollege } from "../redux/reducer/college/college.action";

import Navbar from "../Components/Header/Navbar";
import Tables from "../Components/Table/Tables";

import { BiFilterAlt } from "react-icons/bi";

import { RiSearch2Line } from "react-icons/ri";

function HomepageLayout() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    dispatch(getCollege()).then((data) => {
      setTableData(data.payload);
    });
  }, [dispatch]);

  const sort_up = () => {
    const sorted = [...tableData].sort((a, b) => (b.name < a.name ? 1 : -1));
    setTableData(sorted);
  };
  const sort_down = () => {
    const sorted = [...tableData].sort((a, b) => (b.name > a.name ? 1 : -1));
    setTableData(sorted);
  };

  return (
    <>
      <Navbar />
      <div className="w-100 bg-gray-200 px-20">
        <div
          className="bg-gray-200 relative flex items-center gap-2 border-r-2 border-gray-300 pr-2 w-40 px-20"
          onClick={() => setIsDropDownOpen((prev) => !prev)}
        >
          <span className="  text-zomato-400">
            <BiFilterAlt />
          </span>
          <span className="text-slate-700">Sort</span>
          {isDropDownOpen && (
            <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-gray-100 z-20 flex flex-col gap-2">
              <button onClick={sort_up} className=" border-b-2 border-gray-200">
                Sort Asc.
              </button>
              <button onClick={sort_down}>Sort Desc.</button>
            </div>
          )}
        </div>
      </div>
      <Tables tabledata={tableData} rowsPerPage={10} />
    </>
  );
}

export default HomepageLayout;
