"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../features/products/productsSlice";
import Link from "next/link";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState(""); // state to store input value
  const [open, setOpen] = useState(false); // state to toggle dropdown

  const handleChange = (e) => {
    setQuery(e.target.value); // update input state
    dispatch(setSearchQuery(e.target.value)); // send value to Redux store
  };

  // List of product categories
  const categories = [
    "smartphones",
    "laptops",
    "mens-watches",
    "womens-watches",
    "sunglasses",
    "fragrances",
    "skin-care",
    "beauty",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "womens-bags",
    "womens-jewellery",
    "vehicle",
    "motorcycle",
  ];

  return (
    <div className="w-full h-[75px] mx-auto mt-4 px-4 bg-[#1ABA1A] fixed top-[48px] left-0 flex items-center justify-between gap-4 z-20">
      {/* Search Box */}
      <div className="w-[40%] border border-gray-300 p-2 flex items-center gap-2 bg-white rounded-xl relative">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={handleChange} // handle input change
          className="w-full outline-none border-none bg-transparent text-black placeholder-[#999999]"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass} // search icon
          className="text-black w-4 h-4"
        />
      </div>

      {/* Categories Dropdown */}
      <div className="relative inline-block text-left">
        <button
          onClick={() => setOpen(!open)} // toggle dropdown
          className="bg-[#1ABA1A] text-white px-4 py-2 rounded-lg border border-white hover:bg-[#159815] transition-colors"
        >
          Categories
        </button>

        {open && (
          <div className="absolute left-[-280px] mt-2 min-w-[400px] max-h-96 overflow-y-auto bg-white text-black rounded-xl shadow-xl ring-1 ring-black/5 z-30 p-4 animate-fadeIn">
            <ul className="grid grid-cols-3 gap-4">
              {categories.map((cat, index) => (
                <li key={index}>
                  <Link
                    href={`/products?category=${cat}`}
                    className="block px-3 py-2 rounded-md hover:bg-[#1ABA1A]/10 hover:text-[#1ABA1A] transition-colors duration-150"
                    onClick={() => setOpen(false)} // close dropdown on click
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
