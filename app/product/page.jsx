import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
import Section from "@/components/Section";
import ShowProductCard from "@/components/ShowProductCard";

const Page = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eum perspiciatis distinctio tempore voluptas dolore quam, eos totam sint voluptatibus.",

      imageUrl: "/images/image7.png",
    },

    {
      id: 2,
      title: "Library Stool Chair",
      price: 99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eum perspiciatis distinctio tempore voluptas dolore quam, eos totam sint voluptatibus.",

      imageUrl: "/images/image1.png",
    },

    {
      id: 3,
      title: "Library Stool Chair",

      price: 99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eum perspiciatis distinctio tempore voluptas dolore quam, eos totam sint voluptatibus.",

      imageUrl: "/images/image9.png",
    },

    {
      id: 4,
      title: "Library Stool Chair",

      price: 99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eum perspiciatis distinctio tempore voluptas dolore quam, eos totam sint voluptatibus.",

      imageUrl: "/images/image3.png",
    },

    {
      id: 5,
      title: "Library Stool Chair",

      price: 99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eum perspiciatis distinctio tempore voluptas dolore quam, eos totam sint voluptatibus.",

      imageUrl: "/images/image8.png",
    },
  ];
  return (
    <div className="">
      <Navbar />

      <ShowProductCard
        title="Library Stool Chair"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum voluptatem a nobis cumque iste consequatur deserunt consequuntur iure perspiciatis velit."
        imageUrl="/images/image2.png"
        price={20}
      />

      <Section
        title={"Featured Products"}
        center={false}
        className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {featuredProducts.map((product) => (
          <ProductCard
            cart={false}
            key={product.id}
            image={product.imageUrl}
            price={product.price}
            title={product.title}
            label={product?.label}
          />
        ))}
      </Section>

      <Footer />
    </div>
  );
};

export default Page;
