"use client";

import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const ProductCard = ({ image, title, price, label }) => {
  return (
    <div className="bg-white group cursor-pointer mb-4">
      <div className="h-72 rounded-md overflow-hidden bg-gray-200 relative">
        {label && (
          <span
            className={twMerge(
              "absolute top-5 left-5 text-sm text-white py-1 px-2 rounded-sm",
              label == "New" ? "bg-green-600" : "bg-orange-600"
            )}
          >
            {label}
          </span>
        )}
        <Image
          width={500}
          height={500}
          src={image}
          alt={title}
          className="h-full object-cover"
        />
      </div>
      <div className="py-4 flex justify-between w-full">
        <div className="w-[calc(100%-52px)]">
          <h3 className="text-base font-medium text-gray-700 group-hover:text-cyan-500 transition duration-300 truncate">
            {title}
          </h3>
          <p className="text-base text-gray-800 font-bold">${price}</p>
        </div>
        <button className="min-h-12 min-w-12 flex items-center justify-center bg-gray-500 group-hover:bg-cyan-500 text-white rounded-md transition duration-300">
          <FaShoppingCart className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
