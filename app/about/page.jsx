import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck, CiCreditCard1 } from "react-icons/ci";
import { FaLeaf } from "react-icons/fa";
import PopularProducts from "@/components/PopularProducts";

const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="w-full bg-gray-100 p-12 rounded-sm">
      <Icon size={28} className="text-cyan-600" />
      <h3 className="text-cyan-600 text-xl py-2">{title}</h3>
      <p className="text-cyan-600">{description}</p>
    </div>
  );
};

const Page = () => {
  return (
    <div className="">
      <Navbar />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-10 md:py-20">
          <div className="w-full md:w-1/2 h-[500px] sm:pr-10 flex flex-col justify-between px-12 py-20 bg-cyan-700">
            <div className="">
              <h2 className="text-4xl font-bold text-white mb-4">
                About Us - Comforty
              </h2>
              <p className="text-white mb-8">
                At Comforty, we believe that the right chair can transform your
                space and elevate your comfort. Specializing in ergonomic
                design, premium materials, and modern aesthetics, we craft
                chairs that seamlessly blend style with functionality.
              </p>
            </div>
            <button className="bg-cyan-600 text-white px-6 py-3 w-fit rounded-md hover:bg-cyan-500 transition-colors duration-300">
              View collection
            </button>
          </div>
          <div className="w-full md:w-1/2 h-[500px] bg-gray-100 p-8 flex items-center justify-center">
            <img
              src="/images/bannerImage.png"
              alt="Chair"
              className="w-auto h-full object-cover"
            />
          </div>
        </div>

        <div className="py-8">
          <h2 className="text-2xl sm:text-3xl text-gray-800 text-center font-semibold">
            What makes our product different.
          </h2>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            <Card
              icon={TbTruckDelivery}
              title={"Next day as standard"}
              description={
                "Order before 3pm and get your order the next day as standard"
              }
            />

            <Card
              icon={CiCircleCheck}
              title={"Made by true artisans"}
              description={
                "Handmade crafted goods made with real passion and craftmanship"
              }
            />
            <Card
              icon={CiCreditCard1}
              title={"Unbeatable prices"}
              description={
                "For our materials and quality you won't find better prices anywhere"
              }
            />
            <Card
              icon={FaLeaf}
              title={"Recycled packaging"}
              description={
                "We use 100% recycled to ensure our footprint is more manageable"
              }
            />
          </div>
        </div>

        <PopularProducts />
      </div>

      <Footer />
    </div>
  );
};

export default Page;
