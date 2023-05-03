import { useState } from "react";
import Cards from "./Cards";
import { Icon } from "@mui/material";
import { Home, Person, Construction, Work, Phone } from "@mui/icons-material";

import { ConstructionIcon } from "@mui/icons-material";

const Nav = ({ scrollToPage }) => {
  const [page, setPage] = useState(0);

  const scrollToPages = (id) => {
    // console.log(page);
    // console.log(id); py-3 -py-5
    scrollToPage(id);
    // setPage(null);
  };

  if (page != 2) {
    scrollToPages("welcome");
    setPage(page + 1);
    //
  }
  return (
    <div className=" w-full h-12 hover:bg-slate-800  text-white flex bg-gray-900">
      <button style={{}} className=" bg-gray-900 w-7/12">
        <div className="">
          {/* <Home /> */}
          Alrizki Pasca Ramadhani
        </div>
      </button>
      <button
        style={{}}
        className=" bg-gray-900 w-1/12 hover:bg-slate-700"
        //  className=" w-14 rounded-full h-14 hover:bg-slate-700 bg-gray-900"
        id={"home"}
        onClick={() => scrollToPages("welcome")}
      >
        <div className="">
          {/* <Home /> */}
          Home
        </div>
      </button>
      <button
        className="w-1/12   hover:bg-slate-700 bg-gray-900"
        id={"about"}
        onClick={() => scrollToPages("about")}
      >
        <div className="grid justify-items-center ">
          {/* <Person /> */}
          About
        </div>
      </button>
      <button
        className="w-1/12 hover:bg-slate-700 bg-gray-900"
        id={"experience"}
        onClick={() => scrollToPages("experience")}
      >
        <div className="grid justify-items-center ">
          {/* <Work /> */}
          Experience
        </div>
      </button>
      <button
        className="w-1/12 hover:bg-slate-700 bg-gray-900"
        id={"skills"}
        onClick={() => scrollToPages("skills")}
      >
        <div className="grid justify-items-center ">
          {/* <Construction /> */}
          Focus
        </div>
      </button>
      <button
        className="w-1/12 hover:bg-slate-700 bg-gray-900"
        id={"contact"}
        onClick={() => scrollToPages("contact")}
      >
        <div className="grid justify-items-center ">
          {/* <Phone /> */}
          Find Me
        </div>
      </button>
    </div>
  );
};

export default Nav;
