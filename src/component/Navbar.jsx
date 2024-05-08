import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../contextapi/authContextProvider";

const Navbar = () => {
  const {auth}=useContext(MyContext)
  return (
    <nav className="w-full bg-[#00203FFF] px-4 h-[9vh] flex items-center justify-end text-xl text-white fixed top-0 z-30">
      <ul className="flex justify-end gap-10">
        <li >
         {auth? <Link to={"/"}>Home</Link>:'best of luck'}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
