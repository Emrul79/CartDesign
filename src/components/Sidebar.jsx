import React from "react";

import { AppProvider } from "../context/context";
import { getImage } from "../utils/getImage";
import OrderSummary from "./OrderSummary";
export default function Sidebar() {
  const { state, dispatch } = React.useContext(AppProvider);

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>
        {state.cart.map((product) => {
          return (
            <div
              key={product.id}
              className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4"
            >
              <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                <img
                  src={getImage(product.name)}
                  alt="Gradient Graphic T-shirt"
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between">
                  <h3 className="font-medium">{product.title}</h3>
                  <span
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: product })
                    }
                    className="text-red-500 text-sm cursor-pointer"
                  >
                    ×
                  </span>
                </div>
                <p className="text-sm text-gray-500">Size: Large</p>
                <p className="text-sm text-gray-500">Color: White</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-bold">${product.price}</p>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        dispatch({
                          type: "DECREMENT_QUANTITY",
                          payload: product,
                        })
                      }
                      className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                    >
                      −
                    </button>
                    <span className="text-sm">{product.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "INCREMENT_QUANTITY",
                          payload: product,
                        })
                      }
                      className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4"></div>
      </div>
      <OrderSummary />
    </div>
  );
}
