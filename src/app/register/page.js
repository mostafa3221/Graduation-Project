"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthNav from "../components/AuthNav";
import Footer from "../components/Footer";

const Page = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState(""); 

  async function handleSubmit(e) {
    e.preventDefault();

    // Validating the inputs
    if (!name || !email || !password || !confirmpassword) {
      setError("Complete all fields");
      return;
    }
    if (password !== confirmpassword) {
      setError("The passwords do not match.");
      return;
    }

    setError("");

    try {
      const res = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, confirmpassword }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data?.message || `The request failed، Status Code : ${res.status}`);
        return;
      }

      const data = await res.json();
      console.log("Response:", data);
      router.push("/home");
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to connect to the server❌");
    }
  }

  return (
    <>
      <AuthNav />

      <main className="flex flex-col items-center justify-between bg-[--background] ">
        <section className="mx-auto w-full max-w-8xl flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-white gap-10">
          {/* Image */}
          <div className="flex justify-center w-full md:w-1/2">
            <Image
              src="/images/loginin.png"
              alt="Register illustration"
              width={400}
              height={320}
              className="max-w-full h-auto"
              priority
            />
          </div>

          {/* form */}
          <div className="flex flex-col justify-center items-start gap-3 w-full md:w-1/2">
            <h2 className="text-[#1ABA1A] text-2xl md:text-3xl font-bold">
              Register
            </h2>
            <p className="text-[#999999] text-sm md:text-base">Join us</p>

            <form
              className="flex flex-col gap-4 w-full max-w-md"
              onSubmit={handleSubmit}
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="Your-name" className="text-black text-sm md:text-base">
                  Enter your Name
                </label>
                <input
                  type="text"
                  id="Your-name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full border border-[#cccccc] rounded-lg py-3 px-5 outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email-register" className="text-black text-sm md:text-base">
                  Enter your Email
                </label>
                <input
                  type="email"
                  id="email-register"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full border border-[#cccccc] rounded-lg py-3 px-5 outline-none"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <label htmlFor="password-register" className="text-black text-sm md:text-base">
                  Enter your password
                </label>
                <input
                  type="password"
                  id="password-register"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full border border-[#cccccc] rounded-lg py-3 px-5 outline-none"
                />
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-2">
                <label htmlFor="password-Confirm" className="text-black text-sm md:text-base">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password-Confirm"
                  name="confirmpassword"
                  value={confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full border border-[#cccccc] rounded-lg py-3 px-5 outline-none"
                />
              </div>

              {/* submit button */}
              <button
                type="submit"
                className="w-full md:w-[150px] bg-[#1ABA1A] text-white rounded-lg py-3 px-5 mt-4"
              >
                Register
              </button>

              {/* error message */}
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </form>

            <p className="text-[#999999] text-sm mt-6">
              Already user?{" "}
              <Link href="/">
                <span className="text-[#1ABA1A]">Login</span>
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Page;
