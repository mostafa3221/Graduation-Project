"use client";

import Footer from "@/app/components/Footer";
import MainNav from "@/app/components/MainNav";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null); // store current product data
  const [cart, setCart] = useState([]); // store cart items
  const [msg, setMsg] = useState(""); // message shown under Add to Cart button

  // Fetch product data from API when page loads or params.id changes
  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://dummyjson.com/products/${params.id}`);
      if (!res.ok) return; // exit if response not ok
      const data = await res.json();
      setProduct(data); // save product data
    }
    fetchProduct();
  }, [params.id]);

  // Load cart data from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  // Add current product to cart
  const addToCart = () => {
    if (!product) return;
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      let newCart;
      if (existing) {
        // if product already in cart, increase quantity
        newCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // add new product to cart
        newCart = [
          ...prevCart,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0],
            quantity: 1,
          },
        ];
      }
      localStorage.setItem("cart", JSON.stringify(newCart)); // save cart to localStorage
      return newCart;
    });
    setMsg("Added to cart!"); // show success message
    setTimeout(() => setMsg(""), 2000); // hide message after 2s
  };

  if (!product) return <div className="text-center mt-10">Loading...</div>; // show loading while fetching

  const reviews = product.reviews || []; // get reviews or empty array

  return (
    <div>
     {/* Dynamic SEO Meta Tags */}
      <Head>
        <title>{product.title} | MyStore</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={`${product.category}, ${product.title}`} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.images[0]} />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.title} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={product.images[0]} />
      </Head>
      <MainNav /> {/* Navigation bar */}
      <div className="bg-white mt-[60px]">
        <div className="pt-6">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb">
            <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li>
                <a
                  href={`/products`}
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  {product.category}
                </a>
              </li>
              <li className="text-sm">
                <a
                  href="#"
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  {product.title}
                </a>
              </li>
            </ol>
          </nav>

          {/* Image gallery for desktop */}
          <div className="hidden lg:mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
            {product.images.slice(0, 3).map((img, idx) => (
              <Image
                key={idx}
                alt={product.title}
                src={img}
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            ))}
          </div>

          {/* Main image for mobile */}
          <div className="aspect-w-4 aspect-h-3 w-full overflow-hidden rounded-xl lg:hidden shadow-md">
            <Image
              width={998}
              height={998}
              src={product.images[0]}
              alt={product.title}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Product info section */}
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.title}
              </h1>
              <p className="mt-4 text-gray-700">{product.description}</p>
            </div>

            {/* Price and Add to Cart */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                ${product.price}
              </p>

              <div className="mt-10">
                <button
                  onClick={addToCart}
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#1ABA1A] px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                >
                  Add to cart
                </button>
                {msg && <p className="mt-2 text-green-600">{msg}</p>} {/* show message */}
              </div>
            </div>
          </div>

          {/* Reviews section */}
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h3 className="text-xl font-semibold mb-4">Reviews</h3>
            {reviews.length === 0 ? (
              <p className="text-gray-500">No reviews yet.</p>
            ) : (
              <ul className="space-y-4">
                {reviews.map((r, idx) => (
                  <li key={idx} className="border p-4 rounded-md bg-gray-50">
                    <p className="font-medium text-gray-800">
                      {r.reviewerName || "Anonymous"} -{" "}
                      <span className="text-sm text-gray-500">
                        {r.reviewerEmail}
                      </span>
                    </p>
                    <p className="text-gray-700">{r.comment}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Rating: {r.rating} / 5
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      {new Date(r.date).toLocaleDateString()}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <Footer /> {/* Footer section */}
    </div>
  );
}
