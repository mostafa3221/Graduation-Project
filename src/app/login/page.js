"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState(""); // store email input
  const [password, setPassword] = useState(""); // store password input
  const [error, setError] = useState(""); // store error messages

  async function handleSubmit(e) {
    e.preventDefault(); // prevent default form submission

    // check if any field is empty
    if (!email || !password) {
      setError("Please fill in all fields ❌");
      return;
    }

    try {
      // send POST request to API
      const res = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      console.log("Response:", data);

      setError(""); // clear error if success
      router.push("/home"); // redirect to home page
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to connect to the server ❌"); // show server error
    }
  }

  return (
    <section className="mx-auto w-full max-w-8xl min-h-full flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-white gap-10">
      {/* Image section */}
      <div className="flex justify-center w-full md:w-1/2">
        <Image
          src="/images/loginin.png"
          alt="Login illustration"
          width={400}
          height={320}
          className="max-w-full h-auto"
          priority
        />
      </div>

      {/* Form section */}
      <div className="flex flex-col justify-center items-start gap-3 w-full md:w-1/2">
        <h2 className="text-[#1ABA1A] text-2xl md:text-3xl font-bold">
          Welcome Back
        </h2>
        <p className="text-[#999999] text-sm md:text-base">LOGIN TO CONTINUE</p>

        <form
          className="flex flex-col gap-4 w-full max-w-md"
          onSubmit={handleSubmit} // attach submit handler
        >
          <div className="flex flex-col gap-2">
            {/* Email input */}
            <label htmlFor="email-login" className="text-black text-sm md:text-base">
              Enter your Email
            </label>
            <input
              type="email"
              id="email-login"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // update state
              placeholder="Enter your email"
              className="w-full border border-[#cccccc] rounded-lg py-3 px-5 outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            {/* Password input */}
            <label htmlFor="password-login" className="text-black text-sm md:text-base">
              Enter your password
            </label>
            <input
              type="password"
              id="password-login"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // update state
              placeholder="Enter your password"
              className="w-full border border-[#cccccc] rounded-lg py-3 px-5 outline-none"
            />
          </div>

          {/* Forget password link */}
          <Link href="/forgot-password">
            <p className="text-[#999999] text-xs md:text-sm">Forget Password</p>
          </Link>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full md:w-[150px] bg-[#1ABA1A] text-white rounded-lg py-3 px-5 mt-4"
          >
            Login
          </button>

          {/* Show error message */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default Page;
