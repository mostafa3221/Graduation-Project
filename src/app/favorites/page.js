"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";

const page = () => {
  const [favorites, setFavorites] = useState([]);

  // Load the favorite products from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Show a message if there are no favorite products
  if (favorites.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-gray-500 text-lg">There are no products in the favorites.</p>
      </div>
    );
  }

  return (
    <>
      {/* Main navigation component */}
      <MainNav />
      <main>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            {/* Page title */}
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
              Favorite products
            </h2>

            {/* Grid of favorite products */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {favorites.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group"
                >
                  {/* Product image */}
                  <Image
                    width={185}
                    height={185}
                    alt={product.title}
                    src={product.image}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                  />
                  {/* Product title */}
                  <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                  {/* Product price */}
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    ${product.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      {/* Footer component */}
      <Footer />
    </>
  );
};

export default page;
