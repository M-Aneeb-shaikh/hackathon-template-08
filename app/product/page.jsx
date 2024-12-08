import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
import Section from "@/components/Section";
import ShowProductCard from "@/components/ShowProductCard";

const Page = () => {
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

  return (
    <div className="">
      <Navbar />

      <ShowProductCard
        title="Professional Camera Backpack"
        description="Padded protection for your photography gear"
        imageUrl="https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
        price={119.99}
      />

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

      <Footer />
    </div>
  );
};

export default Page;
