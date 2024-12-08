import { FaShoppingCart } from "react-icons/fa";

const ShowProductCard = ({
  title,
  price,
  description,
  imageUrl,
  onAddToCart,
}) => {
  return (
    <div className="max-w-7xl mx-auto py-16">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Container */}
        <div className="flex-1">
          <div className="aspect-square relative bg-pink-50 rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 flex flex-col justify-center px-8">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">{title}</h1>

          <div className="py-10 border-b-2 border-gray-400">
            <span className="bg-cyan-600 text-white px-6 py-4 rounded-full text-lg font-semibold">
              ${price.toFixed(2)} USD
            </span>
          </div>

          <p className="text-gray-500 my-10 tracking-wider text-xl">
            {description}
          </p>

          <button
            onClick={onAddToCart}
            className="flex items-center justify-center gap-2 bg-cyan-600 text-white px-6 py-4 rounded-lg hover:bg-cyan-700 transition-colors w-[230px]"
          >
            <FaShoppingCart size={20} />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowProductCard;
