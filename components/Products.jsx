"use client";

import CategoryCard from "./CategoryCard";
import ExploreStylesSection from "./ExploreStylesSection";
import ProductCard from "./ProductCard";
import Section from "./Section";

const Products = () => {
  const products = [
    {
      id: 16,
      title: "Portable Power Bank",
      price: 39.99,
      description: "10000mAh battery capacity with fast charging",
      category: "Electronics",
      imageUrl: "https://images.unsplash.com/photo-1609592424109-dd9892f1b6d4",
    },
    {
      id: 17,
      title: "Canvas Backpack",
      price: 59.99,
      description: "Durable everyday backpack with laptop sleeve",
      category: "Accessories",
      imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a45",
    },
    {
      id: 18,
      title: "Bluetooth Speaker",
      price: 89.99,
      description: "Waterproof speaker with 360° sound",
      category: "Electronics",
      imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    },
    {
      id: 19,
      title: "Polarized Sunglasses",
      price: 129.99,
      description: "Classic aviator style with UV protection",
      category: "Accessories",
      imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    },
    {
      id: 20,
      title: "Air Purifier",
      price: 199.99,
      description: "HEPA filter removes 99.9% of airborne particles",
      category: "Home",
      imageUrl: "https://images.unsplash.com/photo-1605794130270-46b9b61c22cf",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      title: "Classic White Sneakers",
      label: "New",
      price: 79.99,
      description:
        "Minimalist design meets comfort in these versatile white sneakers",
      category: "Footwear",
      imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    },
    {
      id: 2,
      title: "Wireless Noise-Canceling Headphones",
      label: "Sales",
      price: 199.99,
      description: "Premium sound quality with active noise cancellation",
      category: "Electronics",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 3,
      title: "Leather Crossbody Bag",
      price: 129.99,
      description:
        "Genuine leather bag with adjustable strap and multiple compartments",
      category: "Accessories",
      imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7",
    },
    {
      id: 4,
      title: "Smart Fitness Watch",
      price: 149.99,
      description:
        "Track your health and fitness goals with this advanced smartwatch",
      category: "Electronics",
      imageUrl: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1",
    },
  ];

  const ourProducts = [
    {
      id: 5,
      title: "Organic Cotton T-Shirt",
      price: 29.99,
      description: "Sustainable and comfortable basic tee",
      category: "Clothing",
      imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 6,
      title: "Stainless Steel Water Bottle",
      price: 24.99,
      description: "Double-walled insulation keeps drinks cold for 24 hours",
      category: "Accessories",
      imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    },
    {
      id: 7,
      title: "Vintage Denim Jacket",
      price: 89.99,
      description: "Classic denim jacket with a lived-in feel",
      category: "Clothing",
      imageUrl: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d",
    },
    {
      id: 8,
      title: "Professional Camera Backpack",
      price: 119.99,
      description: "Padded protection for your photography gear",
      category: "Accessories",
      imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    },
    {
      id: 9,
      title: "Mechanical Keyboard",
      price: 159.99,
      description: "Tactile typing experience with RGB backlighting",
      category: "Electronics",
      imageUrl: "https://images.unsplash.com/photo-1595225476474-0be12dc681a4",
    },
    {
      id: 10,
      title: "Running Shorts",
      price: 34.99,
      description: "Lightweight shorts with built-in compression liner",
      category: "Clothing",
      imageUrl: "https://images.unsplash.com/photo-1556769980-42e113fd21eb",
    },
    {
      id: 11,
      title: "Ceramic Coffee Mug Set",
      price: 39.99,
      description: "Set of 4 handcrafted ceramic mugs",
      category: "Home",
      imageUrl: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
    },
    {
      id: 12,
      title: "Wireless Gaming Mouse",
      price: 79.99,
      description: "Precision control with customizable buttons",
      category: "Electronics",
      imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
    },
  ];

  const topCategories = [
    {
      id: 13,
      title: "Clothing",
      productCount: 69,
      imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    },
    {
      id: 14,
      title: "Sports",
      productCount: 44,
      description: "Eco-friendly mat with excellent grip",
      imageUrl: "https://images.unsplash.com/photo-1592432678016-e910b452f9d5",
    },
    {
      id: 15,
      title: "Accessories",
      productCount: 49,
      description: "Slim profile wallet with RFID protection",
      imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93",
    },
  ];

  return (
    <div className="">
      <Section title={"Featured Products"} center={false}>
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={`${product.imageUrl}?auto=format&fit=crop&w=400&q=80`}
            price={product.price}
            title={product.title}
            label={product?.label}
          />
        ))}
      </Section>

      <Section
        title={"Top Categories"}
        center={false}
        className={"grid-cols-1 sm:grid-cols-2 md:grid-cols-3"}
      >
        {topCategories.map((product) => (
          <CategoryCard
            key={product.id}
            title={product.title}
            imageUrl={`${product.imageUrl}?auto=format&fit=crop&w=400&q=80`}
            productCount={product.productCount}
          />
        ))}
      </Section>

      <ExploreStylesSection />

      <Section title={"Our Products"}>
        {ourProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={`${product.imageUrl}?auto=format&fit=crop&w=400&q=80`}
            price={product.price}
            title={product.title}
            label={product?.label}
          />
        ))}
      </Section>
    </div>
  );
};

export default Products;
