import { FaShoppingCart } from "react-icons/fa";

const ShowProductCard = ({
  title,
  price,
  description,
  imageUrl,
  onAddToCart,
}) => {
  return (
    <div className="max-w-7xl mx-auto py-10 sm:py-16">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Image Container */}
        <div className="w-full md:w-1/2">
          <div className="aspect-square relative bg-pink-50 rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
            {title}
          </h1>

          <div className="py-6 md:py-10 border-b-2 border-gray-400">
            <span className="bg-secondary text-white px-6 py-4 rounded-full text-lg font-semibold">
              ${price.toFixed(2)} USD
            </span>
          </div>

          <p className="text-gray-500 py-6 md:py-10 tracking-wider text-xl">
            {description}
          </p>

          <button
            onClick={onAddToCart}
            className="flex items-center justify-center gap-2 bg-secondary text-white px-6 py-4 rounded-lg hover:bg-light transition-colors w-[230px]"
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
