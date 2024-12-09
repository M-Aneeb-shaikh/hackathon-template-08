"use client";

import CartCard from "@/components/CartCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

const Page = () => {
  const cartItems = [
    {
      id: 1,
      name: "Classic White Sneakers",
      variant: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      mrp: 79.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    },
    {
      id: 2,
      name: "Wireless Noise-Canceling Headphones",
      variant: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      mrp: 99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.mrp, 0);

  return (
    <div className="">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items Section */}
          <div className="flex-grow">
            <h2 className="text-2xl font-semibold mb-6">Bag</h2>

            <div className="space-y-6">
              {cartItems.map((item) => (
                <CartCard
                  key={item.id}
                  name={item.name}
                  imageUrl={`${item.image}?auto=format&fit=crop&w=400&q=80`}
                  quantity={item.quantity}
                  size={item.size}
                  mrp={item.mrp}
                  variant={item.variant}
                />
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="w-full lg:w-96">
            <div className="py-6 px-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Estimated Delivery & Handling</span>
                  <span>Free</span>
                </div>

                <div className="pt-4 border-t flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-cyan-600 text-white py-3 rounded-full mt-6 hover:bg-cyan-700 transition-colors">
                Member Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
