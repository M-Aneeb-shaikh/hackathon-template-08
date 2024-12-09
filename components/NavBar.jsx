"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { FaX } from "react-icons/fa6";

const NavLink = ({ href, name }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`pb-2 mb-3 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
        pathname === href
          ? "border-cyan-500 text-cyan-500"
          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
      }`}
    >
      {name}
    </Link>
  );
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleBarClick = (e) => {
    e.preventDefault();

    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-white shadow-md relative">
      <div className="bg-gray-100 py-5 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between max-w-7xl w-full mx-auto">
          <a className="flex items-center" href="/">
            <GiCompass className="h-10 w-10 text-cyan-500" />
            <span className="ml-2 text-2xl font-bold text-gray-700">
              Comforty
            </span>
          </a>
          <a
            href="/cart"
            className="flex items-center bg-white text-gray-600 hover:text-gray-700 ml-4 rounded-md py-3 px-4"
          >
            <FaShoppingCart className="h-5 w-5" />
            <span className="ml-2 text-sm">Cart</span>
            <span className="ml-2 text-sm flex items-center justify-center bg-cyan-500 rounded-full min-h-5 min-w-5">
              2
            </span>
          </a>
        </div>
      </div>

      <div className="flex items-center z-20 justify-between max-w-7xl mx-auto mt-5 px-4 sm:px-6 lg:px-8">
        <div className="hidden sm:flex items-center sm:space-x-8">
          <NavLink href={"/"} name={"Home"} />
          <NavLink href={"/shop"} name={"Shop"} />
          <NavLink href={"/product"} name={"Product"} />
          <NavLink href={"#"} name={"Page"} />
          <NavLink href={"/about"} name={"About"} />
        </div>

        <div className="flex sm:hidden">
          <button
            className={twMerge(
              "rotate-0 transition duration-300",
              showMenu ? "rotate-180" : "rotate-0"
            )}
            onClick={handleBarClick}
          >
            {showMenu ? (
              <FaX size={24} className="text-gray-700" />
            ) : (
              <FaBars size={24} className="text-gray-700" />
            )}
          </button>
        </div>

        <div className="">
          <NavLink href={"/contact"} name={"Contact"} />
        </div>
      </div>

      <div
        className={twMerge(
          "absolute flex sm:hidden flex-col sm:space-x-8 bg-white p-4 pb-10 transition duration-300 w-80 shadow-md",
          showMenu ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <NavLink href={"/"} name={"Home"} />
        <NavLink href={"/shop"} name={"Shop"} />
        <NavLink href={"/product"} name={"Product"} />
        <NavLink href={"#"} name={"Page"} />
        <NavLink href={"/about"} name={"About"} />
      </div>
    </nav>
  );
};

export default Navbar;
