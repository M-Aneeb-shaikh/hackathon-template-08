"use client";

import Image from "next/image";

const Banner = () => {
  return (
    <div className="overflow-hidden py-10 w-full max-w-7xl bg-gray-100 mx-auto flex flex-col lg:flex-row items-center justify-center rounded-bl-3xl">
      <div className="py-12 px-14 w-full  lg:w-1/2">
        <h2 className="text-base text-gray-700 mb-4">Welcome to Chairy</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Best Furniture Collection For Your Interior.
        </h1>
        <a
          href="/shop"
          className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-md hover:bg-cyan-600 transition-colors"
        >
          Shop Now
        </a>
      </div>
      <div className="w-full h-[80%] lg:w-1/2">
        <Image
          alt="banner Image"
          src={"/images/bannerImage.png"}
          width={500}
          height={500}
          className="h-full mx-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
