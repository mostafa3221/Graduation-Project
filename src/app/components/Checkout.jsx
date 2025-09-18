"use client";
import React, { useEffect, useState } from "react";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Load cart from localStorage
  const loadCart = () => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCart(parsedCart);
      calculateTotal(parsedCart);
    } else {
      setCart([]);
      setTotal(0);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  // Calculate total price
  const calculateTotal = (cartItems) => {
    const sum = cartItems.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );
    setTotal(sum);
  };

  // Checkout button
  const handleCheckout = () => {
    if (cart.length === 0) return alert("Your cart is empty!");
    alert(`Purchase successful! Total: $${total.toFixed(2)}`);
    localStorage.removeItem("cart");
    setCart([]);
    setTotal(0);
  };

  return (
    <div className="p-6 border border-[#1ABA1A] rounded shadow-md max-w-md mx-auto w-[30%] mt-[65px] h-full bg-white">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="mb-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.title} x {item.quantity || 1}
                </span>
                <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <hr className="mb-4" />
          <div className="flex justify-between mb-4 font-bold text-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          {/* Checkout button */}
          <button
            onClick={handleCheckout}
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition mb-2"
          >
            Checkout
          </button>
          {/* Refresh button (same style, under Checkout) */}
          <button
            onClick={loadCart}
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
          >
            Refresh Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
