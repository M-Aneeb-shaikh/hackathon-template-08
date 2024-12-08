import React from "react";
import Image from "next/image";
import Link from "next/link";

const ExploreStylesSection = () => {
  const products = [
    {
      id: 17,
      title: "Accessories",
      productCount: 59,
      imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a45",
    },
    {
      id: 18,
      title: "Electronics",
      productCount: 89,
      imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    },
    {
      id: 19,
      title: "Accessories",
      productCount: 129,
      imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    },
    {
      id: 20,
      title: "Home",
      productCount: 199,
      imageUrl: "https://images.unsplash.com/photo-1605794130270-46b9b61c22cf",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-[-90deg]">
        <h2 className="text-2xl lg:text-2xl font-bold tracking-wider whitespace-nowrap">
          EXPLORE NEW AND POPULAR STYLES
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2 relative ml-8">
          <div className="block relative aspect-[3/4] lg:aspect-square w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c"
              alt="Featured Style - Modern Orange Chair"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Grid - Right Side */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative block overflow-hidden group bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-square relative w-full">
                  <Image
                    src={`${product.imageUrl}?auto=format&fit=crop&w=400&q=80`}
                    alt={product.title}
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-black/90 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="space-y-1 flex items-center justify-between">
                      <h3 className="text-base font-medium text-white">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-200">
                        {product.productCount.toLocaleString()} Products
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreStylesSection;
