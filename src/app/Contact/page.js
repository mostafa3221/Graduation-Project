"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";

const ContactPage = () => {
  return (
    <>
    <MainNav/>
    <main className="mt-[30px]">
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
          READY TO WORK WITH US
        </h2>
        <p className="text-gray-600 mb-10">
          Contact us for all your questions and opinions
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Form */}
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number (Optional)
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country / Region <span className="text-red-500">*</span>
              </label>
              <select className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500">
                <option>United States (US)</option>
                <option>United Kingdom (UK)</option>
                <option>Egypt (EG)</option>
                <option>Saudi Arabia (SA)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject (Optional)
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Note about your order, e.g. special note for delivery"
              ></textarea>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <p className="text-sm text-gray-600">
                I want to receive news and updates once in a while. By
                submitting, I&apos;m agreed to the{" "}
                <Link href="#" className="text-green-600 underline">
                  Terms & Conditions
                </Link>
              </p>
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition"
            >
              SEND MESSAGE
            </button>
          </form>

          {/* Right Side - Info */}
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-md">
              <h3 className="text-gray-700 font-semibold uppercase text-sm mb-2">
                United States (Head Quarter)
              </h3>
              <p className="text-gray-600">
                152 Thatcher Road St, Mahattan, 10463, US
              </p>
              <p className="text-gray-600">(+025) 3886 25 16</p>
              <a
                href="mailto:hello@swattechmart.com"
                className="text-green-600"
              >
                hello@swattechmart.com
              </a>

              <h3 className="text-gray-700 font-semibold uppercase text-sm mt-6 mb-2">
                United Kingdom (Branch)
              </h3>
              <p className="text-gray-600">
                12 Buckingham Rd, Thornthwaite, HG3 4TY, UK
              </p>
              <p className="text-gray-600">(+718) 895-5350</p>
              <a
                href="mailto:contact@swattechmart.co.uk"
                className="text-green-600"
              >
                contact@swattechmart.co.uk
              </a>

              {/* Social Links */}
              <div className="flex gap-4 mt-4">
                <Link href="#">
                  <i className="fab fa-twitter text-gray-600 hover:text-green-600"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-facebook text-gray-600 hover:text-green-600"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-instagram text-gray-600 hover:text-green-600"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-youtube text-gray-600 hover:text-green-600"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-pinterest text-gray-600 hover:text-green-600"></i>
                </Link>
              </div>
            </div>

            {/* Image */}
            <Image
              src="/images/contact.png"
              alt="Contact illustration"
              width={600}
              height={400}
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    </main>
    <Footer/>
    </>
  );
};

export default ContactPage;
