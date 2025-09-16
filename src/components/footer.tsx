import React from "react";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-blue-700 dark:text-white">
              X6 Drinks
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm max-w-xs">
              Refreshing energy. Pure taste. Crafted for the bold.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col md:flex-row md:gap-16 text-center md:text-left">
            <div>
              <h4 className="text-gray-800 dark:text-gray-200 font-semibold mb-3">
                Explore
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:text-blue-600 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-blue-600 transition"
                  >
                    3D View
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-blue-600 transition">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-600 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-800 dark:text-gray-200 font-semibold mb-3">
                Connect
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:info@x6drinks.com"
                    className="hover:text-blue-600 transition"
                  >
                    info@x6drinks.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="hover:text-blue-600 transition"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Socials */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
          © 2025{" "}
          <span className="font-semibold text-blue-700 dark:text-white">
            X6
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
