// components/PopularProducts.js
import React from "react";

const PopularProducts = () => {
  const products = [
    {
      id: 1,
      name: "The Popular Suede Sofa",
      price: "99.00",

      image: "/images/image13.png",
    },
    {
      id: 2,
      name: "The Dandy Chair",
      price: "99.00",

      image: "/images/image12.png",
    },
    {
      id: 3,
      name: "The Dandy Chair",
      price: "99.00",

      image: "/images/image11.png",
    },
  ];

  return (
    <div className="py-8 lg:py-12 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">
        Our Popular Products
      </h2>

      <div className="flex flex-col lg:flex-row lg:space-x-6">
        <div className="w-full lg:w-1/2 overflow-hidden hover:scale-105 transition duration-300 mb-8">
          <img
            src={products[0].image}
            alt={products[0].name}
            className="w-full object-cover"
          />
          <div className="py-4">
            <h3 className="text-xl font-medium mb-2 text-gray-800 truncate">
              {products[0].name}
            </h3>
            <p className="text-gray-900 text-lg font-medium">
              ${products[0].price}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-6 w-full lg:w-1/2">
          {products.slice(1).map((product, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden w-full sm:w-1/2 hover:scale-105 transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover"
              />
              <div className="py-4">
                <h3 className="text-xl font-medium text-gray-800 mb-2 truncate">
                  {product.name}
                </h3>
                <p className="text-gray-900 text-lg font-medium">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
