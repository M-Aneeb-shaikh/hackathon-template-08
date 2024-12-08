"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { GiCompass } from "react-icons/gi";

const Footer = () => {
  const categories = [
    { name: "Sofa", href: "/category/sofa" },
    { name: "Armchair", href: "/category/armchair" },
    { name: "Wing Chair", href: "/category/wing-chair" },
    { name: "Desk Chair", href: "/category/desk-chair" },
    { name: "Wooden Chair", href: "/category/wooden-chair" },
    { name: "Park Bench", href: "/category/park-bench" },
  ];

  const support = [
    { name: "Help & Support", href: "/help-support" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Help", href: "/help" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl w-full mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-cyan-500">
                <GiCompass className="w-10 h-10" />
              </div>
              <span className="text-2xl font-semibold">Comforty</span>
            </div>

            <p className="text-gray-600 text-base tracking-wider py-2">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-teal-500">
                <FaFacebookF size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-teal-500">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-teal-500">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-teal-500">
                <FaPinterestP size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-teal-500">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              CATEGORY
            </h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-gray-600 hover:text-teal-500"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              SUPPORT
            </h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-teal-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              NEWSLETTER
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-4 py-8 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>@ 2021 - Blogy - Designed & Develop by Zakirsoft</p>
      </div>
    </footer>
  );
};

export default Footer;
