"use client";
import Image from "next/image";
import React, { memo, useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  // Update cart state and save it to localStorage
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Remove item from cart by id
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  // Increase item quantity
  const increment = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    updateCart(updatedCart);
  };

  // Decrease item quantity but keep it at least 1
  const decrement = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) }
          : item
      );
    updateCart(updatedCart);
  };

  return (
    <section className="p-6 w-[70%] ">
      <h2 className="text-xl font-bold mb-4"> Shopping basket</h2>
      {cart.length === 0 ? (
        <p> The basket is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex items-start  mb-4 border-b pb-2 bg-[#FAFAFA] h-[280] rounded-sm p-4"
            >
              <div className="flex items-start gap-4 ">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={250}
                  height={250}
                  className=" object-cover rounded"
                />
              </div>
              <div className="flex flex-col items- gap-2 my-auto ml-[20px]">
                <div>
                  <p className="font-bold text-[14px] ">{item.title}</p>
                  <p className="text-[#F1352B] font-bold text-[18px]">${item.price}</p>
                </div>
                {/* Quantity controls */}
                <div className="min-w-[37px] max-w-[70px] flex items-center justify-center gap-2 border border-[#999999] rounded p-1">
                    <button
                  onClick={() => decrement(item.id)}
                  className="bg-none px-2 py-1 rounded text-[17px] font-bold"
                >
                  -
                </button>
                <span className="text-[16px] font-bold">{item.quantity || 1}</span>
                <button
                  onClick={() => increment(item.id)}
                  className="bg-none px-2 py-1 rounded text-[17px] font-bold"
                >
                  +
                </button>
                </div>
                {/* Remove item button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded ml-2 min-w-[37px] max-w-[70px] !m-[0px]"
                >
                  حذف
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

// Memo to prevent unnecessary re-renders if props don't change
export default memo(Cart);
