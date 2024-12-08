"use client";

import { FaHeart, FaTrash } from "react-icons/fa";

const CartCard = ({ imageUrl, name, variant, size, quantity, mrp }) => {
  return (
    <div className="flex gap-6 pb-7 border-b">
      <div className="w-36 h-36 bg-gray-100">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-grow">
        <div className="flex justify-between">
          <div>
            <h3 className="text-base font-medium text-gray-700">{name}</h3>
            <p className="text-gray-500 mt-3 text-sm">{variant}</p>
            <div className="mt-1 mb-3 space-x-4">
              <span className="text-gray-500 text-sm">Size: {size}</span>
              <span className="text-gray-500 text-sm">
                Quantity: {quantity}
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-gray-700">MRP: ${mrp}</div>
          </div>
        </div>

        <div className="mt-4 flex gap-4">
          <button className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
            <FaHeart size={18} />
            Save
          </button>
          <button className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
            <FaTrash size={18} />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
