"use client";

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import Image from 'next/image';
import Link from 'next/link';

const Herocard1 = () => {
    const dispatch = useDispatch();
    
    // Access products state from Redux store
    const { items, status, error } = useSelector((state) => state.products);

    // Fetch products when component mounts or status changes to "idle"
    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    // Show loading or error messages
    if (status === "loading") return <p>Loading...</p>;
    if (status === "failed") return <p>Error: {error}</p>;

    // Filter products to only smartphones and sort by rating (highest first)
    const smartphones = items
        .filter(item => item.category === 'smartphones')
        .sort((a, b) => b.rating - a.rating);

    // Take the top-rated smartphone
    const product = smartphones[0];

    return (
        <div className="h-[48%] w-full flex flex-col md:flex-row items-center justify-center p-8 bg-white rounded-lg shadow-xl mb-[10px]">
            {product && (
                <>
                    <Link
                        key={product.id}
                        href={`/products/${product.id}`} // Link to product details page
                        className="group flex"
                    >
                        {/* Image container */}
                        <div className="relative w-[80%] h-[60%] md:w-[60%] md:h-[80%] flex items-center justify-center overflow-hidden">
                            <Image
                                src={product.images[0]} // First image of the product
                                alt={product.title}
                                width={185}
                                height={185}
                                className="min-w-full min-h-full object-contain rounded-lg"
                            />
                        </div>

                        {/* Product details */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0 md:ml-[5%]">
                            <p className="text-gray-500 text-sm uppercase font-semibold">{product.brand}</p> {/* Brand */}
                            <h2 className="text-4xl font-extrabold text-gray-900 mt-2">{product.title}</h2> {/* Title */}
                        </div>
                    </Link>
                </>
            )}
        </div>
    );
};

export default Herocard1;
