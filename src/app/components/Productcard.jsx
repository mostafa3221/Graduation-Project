"use client";

import React, { memo, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import Link from "next/link";
import Image from "next/image";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";

const Productcard = ({ category }) => {
  const dispatch = useDispatch();
  const { items, status, error, searchQuery } = useSelector(
    (state) => state.products
  );

  const [favorites, setFavorites] = useState([]);

  // Loading favorites from localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

// Update localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

// Add/Remove product
  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const exists = prev.find((fav) => fav.id === product.id);
      if (exists) {
        return prev.filter((fav) => fav.id !== product.id);
      } else {
        return [
          ...prev,
          {
            id: product.id,
            title: product.title,
            image: product.images[0],
            price: product.price,
          },
        ];
      }
    });
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // Category Division
  const categoryMap = {
    Electronics: [
      "smartphones",
      "laptops",
      "mens-watches",
      "womens-watches",
      "sunglasses",
    ],
    Beauty: ["fragrances", "skin-care", "beauty"],
    Home: ["home-decoration", "furniture", "lighting"],
    Fashion: [
      "tops",
      "womens-dresses",
      "womens-shoes",
      "mens-shirts",
      "mens-shoes",
      "womens-bags",
      "womens-jewellery",
    ],
    Automotive: ["vehicle", "motorcycle"],
  };

  const selectedCategories = categoryMap[category] || [category];

// Filter products by category + search  
const filteredItems = useMemo(() => {
    let result = category
      ? items.filter((item) => selectedCategories.includes(item.category))
      : items;

    if (searchQuery) {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return result;
  }, [items, category, searchQuery]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredItems.map((product) => {
            const isFavorite = favorites.some((fav) => fav.id === product.id);
            return (
              <div key={product.id} className="relative group">
                {/* Heart Button */}
                <button
                  onClick={() => toggleFavorite(product)}
                  className="absolute top-2 left-2 z-10 rounded-full p-1 bg-white shadow hover:scale-110 transition"
                >
                  {isFavorite ? (
                    <HeartSolid className="h-6 w-6 text-green-500" />
                  ) : (
                    <HeartOutline className="h-6 w-6 text-gray-400" />
                  )}
                </button>

                {/* cards */}
                <Link href={`/products/${product.id}`}>
                  <Image
                    width={185}
                    height={185}
                    alt={product.title}
                    src={product.images[0]}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                  />
                  <h3 className="mt-4 text-sm text-gray-700">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    ${product.price}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(Productcard);
