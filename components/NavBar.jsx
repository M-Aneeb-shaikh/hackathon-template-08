"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md">
      <div className="bg-gray-200 py-5 px-4 sm:px-6 lg:px-8">
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

      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 sm:space-x-8 py-5 px-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
              pathname === "/"
                ? "border-cyan-500 text-cyan-500"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            }`}
          >
            Home
          </a>
          <a
            href="/shop"
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
              pathname === "/shop"
                ? "border-cyan-500 text-gray-900"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            }`}
          >
            Shop
          </a>
          <a
            href="/product"
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
              pathname === "/product"
                ? "border-cyan-500 text-gray-900"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            }`}
          >
            Product
          </a>
          <a
            href="/pages"
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
              pathname === "/pages"
                ? "border-cyan-500 text-gray-900"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            }`}
          >
            Pages
          </a>
          <a
            href="/about"
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
              pathname === "/about"
                ? "border-cyan-500 text-gray-900"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            }`}
          >
            About
          </a>
        </div>
        <div className="">
          <a
            href="/contact"
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
              pathname === "/about"
                ? "border-cyan-500 text-gray-900"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
