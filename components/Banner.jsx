"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="overflow-hidden py-10 w-full max-w-7xl bg-gray-100 mx-auto flex flex-col lg:flex-row items-center justify-center rounded-bl-3xl">
      <div className="py-8 sm:py-12 px-8 sm:px-14 w-full  lg:w-1/2">
        <h2 className="text-base text-gray-700 mb-4">Welcome to Chairy</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Best Furniture Collection For Your Interior.
        </h1>
        <a
          href="/shop"
          className="flex items-center justify-between w-40  bg-secondary text-white px-6 py-3 rounded-md hover:bg-light transition-colors"
        >
          Shop Now
          <FaArrowRight />
        </a>
      </div>
      <div className="w-full h-[60%] lg:w-1/2">
        <Image
          alt="banner Image"
          src={"/images/image10.png"}
          width={400}
          height={400}
          className="h-full mx-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
