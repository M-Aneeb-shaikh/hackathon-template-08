import React from "react";
import Image from "next/image";

const ExploreStylesSection = () => {
  const products = [
    {
      id: 1,
      title: "Accessories",
      productCount: 59,
      imageUrl: "/images/image4.png",
    },
    {
      id: 2,
      title: "Electronics",
      productCount: 89,
      imageUrl: "/images/image1.png",
    },
    {
      id: 3,
      title: "Accessories",
      productCount: 129,
      imageUrl: "/images/image6.png",
    },
    {
      id: 4,
      title: "Home",
      productCount: 199,
      imageUrl: "/images/image1.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2 relative ml-8">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-[-90deg] mr-8">
            <h2 className="text-xl lg:text-2xl font-bold tracking-wider whitespace-nowrap">
              EXPLORE NEW AND POPULAR STYLES
            </h2>
          </div>
          <div className="block relative aspect-[3/4] lg:aspect-square w-full overflow-hidden">
            <Image
              src="/images/image3.png"
              alt="Featured Style - Modern Orange Chair"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              // sizes="(max-width: 768px) 100vw, 50vw"
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
