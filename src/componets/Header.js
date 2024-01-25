import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";

const Header = () => {
const dispatch = useDispatch();

const toggleMenuHandler = () =>{
  dispatch(toggleMenu());
};

  
  return (
    <div className="grid grid-flow-col p-5 m-1 shadow-lg">
      <div className="flex col-span-10">
        <img
          onClick={()=> toggleMenuHandler()}
          className="h-12 cursor-pointer" // Increase the height to make the logo bigger
          
          alt="logo"
          src="https://www.iconbolt.com/preview/facebook/zwicon/hamburger-menu.svg"
        ></img>
        <img
          className="h-10 mx-2"
          alt="ytlogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="col-span-12 px-10 ">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1 ">
        <img
          alt=" "
          className="h-10"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
