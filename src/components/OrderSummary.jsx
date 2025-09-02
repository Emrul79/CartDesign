import React, { useState } from "react";
import { AppProvider } from "../context/context";

export default function OrderSummary() {
  const { cartData } = React.useContext(AppProvider);

  const [promoCode, setPromoCode] = useState("");
  const [discountRate, setDiscountRate] = useState(0); // percentage like 0.2 for 20%
  const [freeShipping, setFreeShipping] = useState(false);
  const [error, setError] = useState("");

  // Define promo codes
  const validCodes = {
    SAVE20: { type: "discount", value: 0.2 },
    WELCOME10: { type: "discount", value: 0.1 },
    FREESHIP: { type: "shipping", value: 0 },
  };

  // Calculate subtotal
  const subtotal = cartData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Calculate discount
  const discount = subtotal * discountRate;

  // Delivery fee
  const deliveryFee = subtotal > 0 ? (freeShipping ? 0 : 15) : 0;

  // Final total
  const total = subtotal - discount + deliveryFee;

  // Handle Apply Promo
  const applyPromo = () => {
    const code = promoCode.trim().toUpperCase();

    if (validCodes[code]) {
      const promo = validCodes[code];
      if (promo.type === "discount") {
        setDiscountRate(promo.value);
        setFreeShipping(false);
      } else if (promo.type === "shipping") {
        setDiscountRate(0);
        setFreeShipping(true);
      }
      setError("");
    } else {
      setDiscountRate(0);
      setFreeShipping(false);
      setError("Invalid promo code");
    }
  };
  return (
    <div className="mt-6">
      <h3 className="font-bold text-lg mb-4">Order Summary</h3>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${subtotal}</span>
        </div>
        <div className="flex justify-between text-red-500">
          <span>Discount (20%)</span>
          <span>-${discount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-medium">
            {deliveryFee > 0 ? `$${deliveryFee.toFixed(2)}` : "Free"}
          </span>
        </div>
        <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

      <div className="flex items-center space-x-2 mb-6">
        <div className="flex-grow relative">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Add promo code"
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
          />
          <span className="absolute left-3 top-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
          </span>
        </div>
        <button
          onClick={applyPromo}
          className="bg-black text-white rounded-md px-4 py-2 text-sm"
        >
          Apply
        </button>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <a
        href="#"
        className="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
      >
        Go to Checkout
        <span className="inline-block ml-2">→</span>
      </a>
    </div>
  );
}
