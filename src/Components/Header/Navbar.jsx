import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { RiSearch2Line } from "react-icons/ri";

import { postDetails } from "../../redux/reducer/Details/details.reducer";

function MobileNav() {
  return (
    <div className="flex w-full items-center justify-between lg:hidden">
      <div className="w-28">
        <img
          src="https://internshala.com/cached_uploads/logo%2F5f364d92373751597394322.png"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3 relative">
        <>
          <div className="flex w-full items-center gap-2">
            <RiSearch2Line />
            <input
              type="search"
              placeholder="Search for college name"
              className="w-full focus:outline-none"
            />
          </div>
        </>
      </div>
    </div>
  );
}


function LargeNav() {
  const reduxState = useSelector(
    (globalState) => globalState.collegeReducer.colleges
  );

  const [searchInput, setSearchInput] = useState("");

  
  const [searchData, setSearchData] = useState([]);    //searched data

 
  // search utility funciton
  const handleChange = async (e) => {
    setSearchInput(e.target.value);
    let value = e.target.value;
    if (value.length > 2) {
      let search = await arraySearch(reduxState, value);
      
      setSearchData(search);
    } 
  };

  // search funciton 
  const arraySearch = (array, keyword) => {
    const searchTerm = keyword.toLowerCase();
    return array.filter((value) => {
      return value.name.toLowerCase().match(new RegExp(searchTerm, "g"));
    });
  };

  const history = useHistory();
  const continueToCheckout = () => history.push("/details");

  const dispatch=useDispatch()
  const passingdata=(data)=>
  {
    dispatch(postDetails(data));
    continueToCheckout();
    window.location.href="/details";

  }


  return (
    <>
      <div className="hidden lg:inline container px-20 mx-auto ">
        <div className="gap-4 lg:flex w-full items-center justify-around">
          <div className="w-32">
            <img
              src=" https://internshala.com/cached_uploads/logo%2F5f364d92373751597394322.png"
              alt=" "
              className="w-full h-full"
            />
          </div>
          <div className="w-3/4 bg-white p-3 flex items-center gap-3 border border-gray-200 shadow-md rounded relative h-full">
            <div className="flex w-full items-center gap-2">
              <RiSearch2Line />
              <input
                type="search"
                placeholder="Search for college name"
                className="w-full focus:outline-none "
                onChange={handleChange}
              />
              
              { searchData.length>0 && 
                <div className="absolute shadow-sm py-3   top-10  w-full bg-gray-100 z-20 flex h-32 flex-col gap-2 overflow-y-auto">
                  {searchData &&
                    searchData.map((val, index) => {
                      return (
                        <>
                          {console.log(searchData.length)}
                          <div className="px-2 border-b-2 border-gray-300 cursor-pointer"
                          onClick={()=>passingdata(val)}
                          >{val.name}</div>
                        </>
                      );
                    })}
                </div>
              }
            </div>
          </div>

          <div className=" w-20">
            <div className="border border-gray-300 text-zomato-400 w-full h-20 rounded-full">
              <img
                src="https://cdn1.vectorstock.com/i/1000x1000/36/15/businessman-character-avatar-isolated-vector-12613615.jpg"
                alt=""
                className="w-full h-full rounded-full object-cover relative"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


// Navbar
function Navbar() {
  return (
    <>
      <nav className="p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
        <MobileNav />
        <LargeNav />
      </nav>
    </>
  );
}

export default Navbar;
