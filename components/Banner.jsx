"use client";

import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner h-[80vh] overflow-hidden w-full max-w-7xl bg-gray-200 mx-auto flex items-center justify-center rounded-bl-3xl">
      <div className="p-8 px-14">
        <h2 className="text-base text-gray-700 mb-4">Welcome to Chairy</h2>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Best Furniture Collection For Your Interior.
        </h1>
        <a
          href="/shop"
          className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-md hover:bg-cyan-600 transition-colors"
        >
          Shop Now
        </a>
      </div>
      <div className="w-full h-[80%]">
        <Image
          alt="banner Image"
          src={"/images/bannerImage.png"}
          width={1000}
          height={1000}
          className="h-full object-fill"
        />
      </div>
    </div>
  );
};

export default Banner;
