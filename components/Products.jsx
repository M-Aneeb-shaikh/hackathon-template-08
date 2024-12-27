"use client";

import CategoryCard from "./CategoryCard";
import ExploreStylesSection from "./ExploreStylesSection";
import ProductCard from "./ProductCard";
import Section from "./Section";

const Products = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "Library Stool Chair",
      label: "New",
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eum perspiciatis distinctio tempore voluptas dolore quam, eos totam sint voluptatibus.",

      imageUrl: "/images/image1.png",
    },

    {
      id: 2,
      title: "Library Stool Chair",
      label: "sales",
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eum perspiciatis distinctio tempore voluptas dolore quam, eos totam sint voluptatibus.",

      imageUrl: "/images/image2.png",
    },

    {
      id: 3,
      title: "Library Stool Chair",

      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eum perspiciatis distinctio tempore voluptas dolore quam, eos totam sint voluptatibus.",

      imageUrl: "/images/image3.png",
    },

    {
      id: 4,
      title: "Library Stool Chair",

      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eum perspiciatis distinctio tempore voluptas dolore quam, eos totam sint voluptatibus.",

      imageUrl: "/images/image4.png",
    },
  ];

  const ourProducts = [
    {
      id: 1,
      title: "Library Stool Chair",
      label: "New",
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eum perspiciatis distinctio tempore voluptas dolore quam, eos totam sint voluptatibus.",

      imageUrl: "/images/image1.png",
    },
    {
      id: 2,
      title: "Library Stool Chair",
      label: "sales",
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eum perspiciatis distinctio tempore voluptas dolore quam, eos totam sint voluptatibus.",

      imageUrl: "/images/image2.png",
    },
    {
      id: 3,
      title: "Library Stool Chair",
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eum perspiciatis distinctio tempore voluptas dolore quam, eos totam sint voluptatibus.",

      imageUrl: "/images/image3.png",
    },
    {
      id: 4,
      title: "Library Stool Chair",
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eum perspiciatis distinctio tempore voluptas dolore quam, eos totam sint voluptatibus.",

      imageUrl: "/images/image4.png",
    },
    {
      id: 5,
      title: "Library Stool Chair",
      label: "New",
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eum perspiciatis distinctio tempore voluptas dolore quam, eos totam sint voluptatibus.",

      imageUrl: "/images/image8.png",
    },
    {
      id: 6,
      title: "Library Stool Chair",
      label: "sales",
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eum perspiciatis distinctio tempore voluptas dolore quam, eos totam sint voluptatibus.",

      imageUrl: "/images/image6.png",
    },
    {
      id: 7,
      title: "Library Stool Chair",
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eum perspiciatis distinctio tempore voluptas dolore quam, eos totam sint voluptatibus.",

      imageUrl: "/images/image7.png",
    },
    {
      id: 8,
      title: "Library Stool Chair",
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eum perspiciatis distinctio tempore voluptas dolore quam, eos totam sint voluptatibus.",

      imageUrl: "/images/image1.png",
    },
  ];

  const topCategories = [
    {
      id: 1,
      title: "Wing Chair",
      productCount: "3,584",
      imageUrl: "/images/image8.png",
    },
    {
      id: 2,
      title: "Wooden Chair",
      productCount: "157",
      description: "Eco-friendly mat with excellent grip",
      imageUrl: "/images/image5.png",
    },
    {
      id: 3,
      title: "Desk Chair",
      productCount: "154",
      description: "Slim profile wallet with RFID protection",
      imageUrl: "/images/image9.png",
    },
  ];

  return (
    <div className="">
      <Section title={"Featured Products"} center={false}>
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.imageUrl}
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
            imageUrl={product.imageUrl}
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
