"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface BaseProps {
  children: React.ReactNode;
}

export default function Base({ children }: BaseProps) {
  const [darkMode, setDarkMode] = useState(true);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  //  dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

      // cursor
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-300">

      {/* customcursor */}
      <div
        className="fixed z-[9999] pointer-events-none w-5 h-5 border-2 border-orange-500 rounded-full transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${cursor.x - 10}px, ${cursor.y - 10}px, 0)`,
        }}
      />
      


      {/* header */}
      <header className="w-full bg-black text-white">
        <div className="max-w-[1660px] mx-auto flex items-center justify-between px-6 py-4">

          <img src="/images/bq.png" alt="BZ" className="h-8" />

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">

            {[
              "Home",
              "About Us",
              "Services",
              "Success Stories",
              "Blogs",
              "Careers",
              "Contact Us",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="relative group transition"
              >
                <span className="group-hover:text-orange-500 transition">
                  {item}
                </span>

               
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition" />

                
              </Link>
            ))}

            <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition">
              <img src="/images/usa.png" alt="EN" className="h-4" />
              EN
            </div>
          </nav>

          <button className="border border-white px-5 py-2 text-sm hover:border-orange-500 hover:text-orange-500 transition duration-300">
            Schedule a consultation
          </button>
        </div>
      </header>
     



      {/*Content */}
      <main>{children}</main>
     



     {/* footer */}
      <footer className="w-full bg-black text-white pt-20 pb-10">

        <div className="max-w-[1660px] mx-auto px-6">

          <div className="mb-12">
            <p className="text-gray-400 text-sm">
              Let’s start working together
            </p>

            <h2 className="text-3xl font-bold mt-2">
              hello@bzanalytics.ai
            </h2>

            <div className="border-b border-gray-700 mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 items-start">

            {/* Left */}
            <div>
              <img src="/images/bq.png" alt="BZ" className="h-10 mb-6" />

              <div className="flex gap-4 mt-6">
                {["linkedin", "x", "facebook", "instagram", "youtube"].map(
                  (icon) => (
                    <div
                      key={icon}
                      className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer"
                    >
                      <img
                        src={`/images/${icon}.png`}
                        alt={icon}
                        className="h-4 invert"
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* center */}
            <div className="grid grid-cols-2 gap-8 text-sm text-gray-400">
              <div className="space-y-3">
                <p className="hover:text-orange-500 cursor-pointer">Home</p>
                <p className="hover:text-orange-500 cursor-pointer">About Us</p>
                <p className="hover:text-orange-500 cursor-pointer">Services</p>
                <p className="hover:text-orange-500 cursor-pointer">
                  Success Stories
                </p>
              </div>

              <div className="space-y-3">
                <p className="hover:text-orange-500 cursor-pointer">Blogs</p>
                <p className="hover:text-orange-500 cursor-pointer">Careers</p>
                <p className="hover:text-orange-500 cursor-pointer">
                  Contact Us
                </p>
              </div>
            </div>

           
            <div className="bg-[#111] p-6 rounded relative">

              {/* image and subscribe */}
              <div className="flex justify-center mb-4">
                <img
                  src="/images/subscribe.png"
                  alt="Subscribe"
                  className="h-20"
                />
              </div>

              <h3 className="font-semibold text-center">
                Subscribe now
              </h3>

              <p className="text-sm text-gray-400 mb-4 text-center">
                Empower Every Mind
              </p>

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-black border border-gray-700 p-2 text-sm mb-4 outline-none"
              />

              <button className="w-full bg-orange-500 py-2 text-sm font-semibold hover:bg-orange-600 transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </footer>




      {/* dark,light button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 left-6 bg-black dark:bg-white text-white dark:text-black border border-white dark:border-black px-3 py-1 text-xs z-50 transition"
        >
        Light/Dark
        </button>
    </div>
  );
}