import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiTrophy } from "react-icons/gi";
import { IoTime } from "react-icons/io5";
import { MdOutlineDoneOutline, MdOutlineSupportAgent } from "react-icons/md";

const InputField = ({ label, type, placeholder }) => {
  return (
    <div className="mt-2">
      <label htmlFor={label} className="text-lg py-2 sm:py-4 block">
        {label}
      </label>
      <input
        type={type}
        id={label}
        className="border border-gray-400 p-3 sm:p-6 text-lg rounded-lg w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

const InfoCard = ({ icon: Icon, size, title, description1, description2 }) => {
  return (
    <div className="flex px-2 mb-12 space-x-6">
      <Icon size={size} />
      <div className="">
        <h2 className="text-2xl text-gray-800 font-semibold">{title}</h2>
        <p className="text-base text-gray-500 ">{description1}</p>
        <p className="text-base text-gray-500 ">{description2}</p>
      </div>
    </div>
  );
};

const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-center p-8 space-x-3">
      <Icon size={65} className="text-gray-700" />
      <div className="">
        <h2 className="text-3xl font-semibold text-gray-700 tracking-wide">
          {title}
        </h2>
        <p className="text-lg font-medium text-gray-500 tracking-wider">
          {description}
        </p>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="">
      <Navbar />

      <div className="py-20 max-w-4xl w-full mx-auto">
        <h1 className="py-4 text-4xl text-gray-800 font-semibold text-center">
          Get In Touch With Us
        </h1>
        <p className="max-w-2xl mx-auto text-base text-gray-500 text-center tracking-wider">
          For More Information About Our Product & Service. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate.
        </p>

        <div className="flex flex-col md:flex-row py-10 px-4 md:px-0 space-x-0 md:space-x-4 lg:space-x-16">
          <div className="w-full max-w-96">
            <InfoCard
              icon={FaLocationDot}
              size={35}
              title={"Address"}
              description1={
                "236 5th SE Avenue, New York, NY10000, United States"
              }
            />
            <InfoCard
              icon={FaPhoneAlt}
              size={22}
              title={"Phone"}
              description1={"Mobile: +(84) 546-6789"}
              description2={"Hotline: +(84) 546-6789"}
            />
            <InfoCard
              icon={IoTime}
              size={30}
              title={"Working Time"}
              description1={"Monday-Friday: 9:00 - 22:00"}
              description2={"Saturday-Sunday: 9:00 - 21:00"}
            />
          </div>
          <div className="w-full">
            <InputField label={"Your Name"} type={"text"} placeholder={"Abc"} />
            <InputField
              label={"Email Address"}
              type={"email"}
              placeholder={"Abc@def.com"}
            />
            <InputField
              label={"Subject"}
              type={"text"}
              placeholder={"This is an optional"}
            />
            <div className="mt-2">
              <label htmlFor={"message"} className="text-lg py-4 block">
                Message
              </label>
              <textarea
                type={"text"}
                id={"message"}
                rows={3}
                className="border border-gray-400 p-6 text-lg rounded-lg w-full"
                placeholder="Hi, I'd like to ask about"
              />
            </div>
            <div className="mt-8">
              <button className="px-20 py-3 text-white bg-secondary hover:bg-light text-base tracking-wider rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-12 max-w-7xl w-full bg-gray-100 mx-auto flex flex-col lg:flex-row justify-between">
        <Card
          icon={GiTrophy}
          title={"High Quality"}
          description={"crafted from top materials"}
        />
        <Card
          icon={MdOutlineDoneOutline}
          title={"Warranty Protection"}
          description={"Over 2 years"}
        />
        <Card
          icon={MdOutlineSupportAgent}
          title={"24 / 7 Support"}
          description={"Dedicated support"}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Page;
