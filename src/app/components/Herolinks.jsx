"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Herolinks = () => {
  // links
  const categories = [
    "Electronics",
    "Beauty",
    "Home",
    "Fashion",
    "Automotive",
    "groceries",
  ];
  // params
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  return (
    <>
      <div className=" h-full w-[25%] flex flex-col md: flex-row items-center justify-center p-8 bg-white rounded-lg shadow-xl mb-[10px]">
        <ul className="flex flex-col">
          {categories.map((cat, index) => (
            <li key={index} className="p-2 hover:text-blue-500 cursor-pointer">
              <Link href={`/products?category=${cat}`}>{cat}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Herolinks;
