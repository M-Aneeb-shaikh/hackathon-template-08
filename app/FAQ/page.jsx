// pages/index.js
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const Card = ({ title, children }) => {
  return (
    <div className="p-5 bg-gray-100 rounded-lg">
      <div className="flex justify-between mb-2">
        <h2 className="text-lg font-medium text-gray-800 mb-2">{title}</h2>
        <GoPlus size={28} className="text-gray-800" />
      </div>
      <p className="text-gray-600">{children}</p>
    </div>
  );
};

const Page = () => {
  return (
    <div className="">
      <Navbar />

      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            Questions Looks Here
          </h1>
          <p className="text-gray-600 mb-8 text-center p-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <Card title={"What types of chairs do you offer?"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              quis modi ullam amet debitis libero veritatis enim repellat optio
              natus eum delectus deserunt, odit expedita eos molestiae ipsa
              totam quidem?
            </Card>

            <Card title={" Do your chairs come with a warranty?"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              quis modi ullam amet debitis libero veritatis enim repellat optio
              natus eum delectus deserunt, odit expedita eos molestiae ipsa
              totam quidem?
            </Card>

            <Card title={"What types of chairs do you offer?"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              quis modi ullam amet debitis libero veritatis enim repellat optio
              natus eum delectus deserunt, odit expedita eos molestiae ipsa
              totam quidem?
            </Card>

            <Card title={"What will be delivered? And When?"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              quis modi ullam amet debitis libero veritatis enim repellat optio
              natus eum delectus deserunt, odit expedita eos molestiae ipsa
              totam quidem?
            </Card>

            <Card title={"Can I try a chair before purchasing?"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              quis modi ullam amet debitis libero veritatis enim repellat optio
              natus eum delectus deserunt, odit expedita eos molestiae ipsa
              totam quidem?
            </Card>

            <Card title={"How do I clean and maintain my Comforty chair?"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              quis modi ullam amet debitis libero veritatis enim repellat optio
              natus eum delectus deserunt, odit expedita eos molestiae ipsa
              totam quidem?
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
