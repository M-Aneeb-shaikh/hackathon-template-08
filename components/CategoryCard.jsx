import React from "react";
import Image from "next/image";

const CategoryCard = ({ title, productCount, imageUrl }) => {
  return (
    <div className="relative block overflow-hidden rounded-lg group bg-white hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square relative w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 bg-black/60">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-200">
              {productCount.toLocaleString()} Products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
