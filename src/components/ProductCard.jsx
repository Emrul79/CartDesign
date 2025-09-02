import React, { useState } from "react";
import product1 from "../assets/productsimage/image 1.png";
import { AppProvider } from "../context/context";

export default function ProductCard({ product }) {
  const [buttonclicked, setButtonClicked] = useState(false);
  const { cartData, setCartData } = React.useContext(AppProvider);
  const inCart = cartData.some((p) => p.id === product.id);

  const handleButtonClick = () => {
    if (inCart) {
      // Remove from cart
      setCartData((prev) => prev.filter((p) => p.id !== product.id));
    } else {
      // Add to cart with quantity = 1
      setCartData((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={product1}
          alt="Gradient Graphic T-shirt"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.title} </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <div className="flex text-yellow-400">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="text-gray-300">★</span>
            </div>
            <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
          </div>
          <span className="text-xs text-gray-700">({product.stock})</span>
        </div>
        <p className="font-bold">${product.price} </p>
        <button
          onClick={handleButtonClick}
          className={`w-full mt-2 py-1 text-gray-100 rounded flex items-center justify-center ${
            inCart ? "bg-red-600" : "bg-green-700"
          }`}
        >
          {inCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
