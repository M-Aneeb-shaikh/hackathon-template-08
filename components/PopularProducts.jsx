// components/PopularProducts.js
import React from "react";

const PopularProducts = () => {
  const products = [
    {
      id: 1,
      name: "Classic White Sneakers",
      price: 79.99,

      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    },
    {
      id: 2,
      name: "Wireless Noise-Canceling Headphones",
      price: 199.99,

      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 3,
      name: "Leather Crossbody Bag",
      price: 129.99,

      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7",
    },
  ];

  return (
    <div className="py-8 lg:py-12 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">
        Our Popular Products
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:space-x-6">
        <div className="w-full lg:w-1/2 overflow-hidden hover:scale-105 transition duration-500 mb-8">
          <img
            src={products[0].image}
            alt={products[0].name}
            className="w-full h-96 object-cover"
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
              className="bg-white overflow-hidden w-full sm:w-1/2 hover:scale-105 transition duration-500"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
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
