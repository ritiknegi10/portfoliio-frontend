import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <div className="p-5 bg-primary ">
      <div className="flex justify-end items-center max-w-6xl mx-auto p-3">
        <ul className="flex gap-4 items-center">
          <Link to="About" smooth={true} duration={500}>
            <li className=" sm:inline text-gray-300 hover:underline hover:text-secondary">
              About
            </li>
          </Link>

          <Link to="Projects" smooth={true} duration={500}>
            {" "}
            <li className=" text-gray-300 hover:underline  hover:text-secondary">
              {" "}
              Projects
            </li>
          </Link>
          <Link to="Contact" smooth={true} duration={500}>
            {" "}
            <li className=" text-gray-300 hover:underline hover:text-secondary">
              {" "}
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
