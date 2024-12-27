import FollowProductCard from "@/components/FollowProductCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
import Section from "@/components/Section";

const Page = () => {
  const allProducts = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      description:
        "Minimalist design meets comfort in these versatile white sneakers",
      category: "Footwear",
      imageUrl: "/images/image1.png",
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 20,
      description: "Premium sound quality with active noise cancellation",
      category: "Electronics",
      imageUrl: "/images/image2.png",
    },
    {
      id: 3,
      title: "Library Stool Chair",
      price: 20,
      description:
        "Genuine leather bag with adjustable strap and multiple compartments",
      category: "Accessories",
      imageUrl: "/images/image3.png",
    },
    {
      id: 4,
      title: "Library Stool Chair",
      price: 20,
      description:
        "Track your health and fitness goals with this advanced smartwatch",
      category: "Electronics",
      imageUrl: "/images/image4.png",
    },
    {
      id: 5,
      title: "Library Stool Chair",
      price: 20,
      description: "Sustainable and comfortable basic tee",
      category: "Clothing",
      imageUrl: "/images/image5.png",
    },
    {
      id: 6,
      title: "Library Stool Chair",
      price: 20,
      description: "Double-walled insulation keeps drinks cold for 24 hours",
      category: "Accessories",
      imageUrl: "/images/image6.png",
    },
    {
      id: 7,
      title: "Library Stool Chair",
      price: 20,
      description: "Classic denim jacket with a lived-in feel",
      category: "Clothing",
      imageUrl: "/images/image7.png",
    },
    {
      id: 8,
      title: "Library Stool Chair",
      price: 20,
      description: "Padded protection for your photography gear",
      category: "Accessories",
      imageUrl: "/images/image1.png",
    },
    {
      id: 9,
      title: "Library Stool Chair",
      price: 20,
      description: "Tactile typing experience with RGB backlighting",
      category: "Electronics",
      imageUrl: "/images/image8.png",
    },
    {
      id: 10,
      title: "Library Stool Chair",
      price: 20,
      description: "Lightweight shorts with built-in compression liner",
      category: "Clothing",
      imageUrl: "/images/image2.png",
    },
    {
      id: 11,
      title: "Library Stool Chair",
      price: 20,
      description: "Set of 4 handcrafted ceramic mugs",
      category: "Home",
      imageUrl: "/images/image3.png",
    },
    {
      id: 12,
      title: "Library Stool Chair",
      price: 20,
      description: "Precision control with customizable buttons",
      category: "Electronics",
      imageUrl: "/images/image9.png",
    },
  ];

  const discountProducts = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      description:
        "Minimalist design meets comfort in these versatile white sneakers",
      category: "Footwear",
      imageUrl: "/images/image5.png",
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 20,
      description: "Premium sound quality with active noise cancellation",
      category: "Electronics",
      imageUrl: "/images/image8.png",
    },
    {
      id: 3,
      title: "Library Stool Chair",
      price: 20,
      description:
        "Genuine leather bag with adjustable strap and multiple compartments",
      category: "Accessories",
      imageUrl: "/images/image2.png",
    },
    {
      id: 4,
      title: "Library Stool Chair",
      price: 20,
      description:
        "Track your health and fitness goals with this advanced smartwatch",
      category: "Electronics",
      imageUrl: "/images/image1.png",
    },
    {
      id: 5,
      title: "Library Stool Chair",
      price: 20,
      description: "Sustainable and comfortable basic tee",
      category: "Clothing",
      imageUrl: "/images/image3.png",
    },
    {
      id: 6,
      title: "Library Stool Chair",
      price: 20,
      description: "Double-walled insulation keeps drinks cold for 24 hours",
      category: "Accessories",
      imageUrl: "/images/image9.png",
    },
  ];

  return (
    <div className="">
      <Navbar />

      <Section title={"All Products"} center={false}>
        {allProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={`${product.imageUrl}?auto=format&fit=crop&w=400&q=80`}
            price={product.price}
            title={product.title}
            label={product?.label}
          />
        ))}
      </Section>

      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl w-full mx-auto">
          <h2 className="p-2 text-center text-3xl md:text-5xl font-medium">
            Or Subscribe To The Newsletter
          </h2>

          <div className="p-2 w-full max-w-3xl mx-auto flex items-center justify-center py-8 space-x-6">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-transparent outline-none p-2 border-b-2 border-b-gray-800 w-full"
            />

            <button className="bg-transparent outline-none py-2 px-4 border-b-2 border-b-gray-800">
              SUBMIT
            </button>
          </div>

          <h2 className="p-2 text-center text-3xl md:text-5xl font-medium">
            Follow Products And Discount On Instagram
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {discountProducts.map((product) => (
              <FollowProductCard
                key={product.id}
                src={`${product.imageUrl}?auto=format&fit=crop&w=400&q=80`}
                title={product.title}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
