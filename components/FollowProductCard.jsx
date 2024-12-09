import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const FollowProductCard = ({ src, title }) => {
  return (
    <div className="w-full h-full aspect-square bg-white rounded-lg group cursor-pointer relative overflow-hidden">
      <div className="absolute z-10 top-0 left-0 bg-black/60 h-full w-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <FaInstagram size={80} color="#ffffff" />
      </div>
      <Image
        src={src}
        alt={title}
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default FollowProductCard;
