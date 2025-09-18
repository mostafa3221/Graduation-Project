// components/Footer.jsx

import React, { memo } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="  bg-[#ffffff] py-12 px-[10%] mb-0  bottom-0 left-0">
      <div className=" mx-auto ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">SWOO - 1ST NYC TECH ONLINE MARKET</h3>
            <div className="mb-4">
              <p className="text-gray-600">HOTLINE 24/7</p>
              <a href="tel:02536862516" className="text-green-500 font-bold text-2xl">(025) 3686 2516</a>
            </div>
            <p className="text-gray-600">257 Thatcher Road St, Brooklyn, Manhattan, NY 10092</p>
            <a href="mailto:contact@swootechmart.com" className="text-gray-600">contact@swootechmart.com</a>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-blue-500"><FaTwitter /></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><FaFacebook /></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><FaInstagram /></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><FaPinterest /></a>
            </div>
          </div>
          
          {/* Top Categories */}
          <div>
            <h4 className="font-bold mb-4">TOP CATEGORIES</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/laptops">Laptops</Link></li>
              <li><Link href="/pcs">PC & Computers</Link></li>
              <li><Link href="/cell-phones">Cell Phones</Link></li>
              <li><Link href="/tablets">Tablets</Link></li>
              <li><Link href="/gaming-vr">Gaming & VR</Link></li>
              <li><Link href="/networks">Networks</Link></li>
              <li><Link href="/cameras">Cameras</Link></li>
              <li><Link href="/sounds">Sounds</Link></li>
              <li><Link href="/office">Office</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">COMPANY</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/about">About Swooch</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/career">Career</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/sitemap">Sitemap</Link></li>
              <li><Link href="/store-locations">Store Locations</Link></li>
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h4 className="font-bold mb-4">HELP CENTER</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/customer-service">Customer Service</Link></li>
              <li><Link href="/policy">Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/track-order">Track Order</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/my-account">My Account</Link></li>
              <li><Link href="/product-support">Product Support</Link></li>
            </ul>
          </div>

          {/* Partner */}
          <div>
            <h4 className="font-bold mb-4">PARTNER</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/become-seller">Become Seller</Link></li>
              <li><Link href="/affiliate">Affiliate</Link></li>
              <li><Link href="/advertise">Advertise</Link></li>
              <li><Link href="/partnership">Partnership</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter and Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row-reverse justify-between items-center mb-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h4 className="font-bold mb-2">SUBSCRIBE & GET <span className="text-red-500">10% OFF</span> FOR YOUR FIRST ORDER</h4>
              <div className="flex">
                <input type="email" placeholder="Enter your email address" className="p-2 border-b border-gray-300 rounded-l-md w-full" />
                <button className=" text-[#1ABA1A] text-[16px] font-bold p-2 rounded-r-md">SUBSCRIBE</button>
              </div>
              <p className="text-xs text-gray-500 mt-2">By subscribing, you've accepted our <Link href="/policy" className="underline">Policy</Link></p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Language and Currency Dropdowns - you would implement the logic for these */}
              <div className="relative">
                <select className="p-2 border border-gray-300 rounded-md">
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>
              <div className="relative">
                <select className="p-2 border border-gray-300 rounded-md">
                  <option>Eng</option>
                  <option>Esp</option>
                </select>
              </div>
            </div>
          </div>

          {/* Copyright and Payments */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-300">
            <p className="text-sm text-gray-500 mb-2 md:mb-0">© 2024 <span className="font-bold">Shawnnetc3</span> All Rights Reserved</p>
            <div className="flex items-center space-x-2">
              <Image
                          src="/images/visa.svg"
                          alt="visa"
                          width={40}
                          height={30}
                          priority={true}
                        />
              <Image
                          src="/images/MasterCard.svg"
                          alt="MasterCard.svg"
                          width={40}
                          height={30}
                          priority={true}
                        />
              <Image src="/images/Klarna.svg" alt="Klarna" width={40}
                          height={30} />
              <Image src="/images/stripe.svg" alt="Stripe"  width={40}   height={30}  />
            </div>
            <Link href="/mobile-site" className="text-blue-500 text-sm">Mobile Site</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);