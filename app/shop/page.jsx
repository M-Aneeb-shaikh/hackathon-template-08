import FollowProductCard from "@/components/FollowProductCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
import Section from "@/components/Section";

const Page = () => {
  const allProducts = [
    {
      id: 1,
      title: "Classic White Sneakers",
      price: 79.99,
      description:
        "Minimalist design meets comfort in these versatile white sneakers",
      category: "Footwear",
      imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    },
    {
      id: 2,
      title: "Wireless Noise-Canceling Headphones",
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
    {
      id: 13,
      title: "Wool Blend Sweater",
      price: 69.99,
      description: "Cozy knit sweater perfect for cold weather",
      category: "Clothing",
      imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    },
    {
      id: 14,
      title: "Bamboo Yoga Mat",
      price: 44.99,
      description: "Eco-friendly mat with excellent grip",
      category: "Sports",
      imageUrl: "https://images.unsplash.com/photo-1592432678016-e910b452f9d5",
    },
    {
      id: 15,
      title: "Leather Wallet",
      price: 49.99,
      description: "Slim profile wallet with RFID protection",
      category: "Accessories",
      imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93",
    },
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

      <div className="bg-gray-200 py-20">
        <div className="max-w-7xl w-full mx-auto">
          <h2 className="p-2 text-center text-5xl font-medium">
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

          <h2 className="p-2 text-center text-5xl font-medium">
            Follow Products And Discount On Instagram
          </h2>
          <div className="mt-10 grid grid-cols-6 gap-5">
            {allProducts.slice(0, 6).map((product) => (
              <FollowProductCard
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
