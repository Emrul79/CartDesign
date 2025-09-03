import React from "react";
import { AppProvider } from "../context/context";
import { getImage } from "../utils/getImage";

export default function ProductCard({ product }) {
  const { state, dispatch } = React.useContext(AppProvider);
  //   const { cartData, setCartData } = React.useContext(AppProvider);?
  const inCart = state.cart.some((p) => p.id === product.id);

  const handleButtonClick = () => {
    if (inCart) {
      // Remove from cart
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: product,
      });
    } else {
      // Add to cart with quantity = 1
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...product, quantity: 1 },
      });
    }
  };
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={getImage(product.name)}
          alt="Gradient Graphic T-shirt"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.title} </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={
                    index < product.rating ? "text-yellow-400" : "text-gray-300"
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              {product.rating}/5
            </span>
          </div>
          <span className="text-xs text-gray-700">({product.stock})</span>
        </div>
        <p className="font-bold">${product.price} </p>
        <button
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: { ...product, quantity: 1 },
            })
          }
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
