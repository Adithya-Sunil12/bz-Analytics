"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiArrowUp } from "react-icons/hi";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface BaseProps {
  children: React.ReactNode;
}

export default function Base({ children }: BaseProps) {
  const [darkMode, setDarkMode] = useState(true);
  const [showTop, setShowTop] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const langRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /*cursor*/
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);


  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className={`${plusJakarta.className} bg-white dark:bg-black text-black dark:text-white min-h-screen flex flex-col`}
    >

      {/*custom cursor */}
      <div
        className="fixed z-[9999] pointer-events-none w-5 h-5 border-2 border-orange-500 rounded-full transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${cursor.x - 10}px, ${cursor.y - 10}px, 0)`,
        }}
      />
     

      {/* header*/}
      <header className="w-full bg-black text-white relative z-40">
        <div className="max-w-[1660px] mx-auto px-4 sm:px-6 xl:px-12 py-5 flex items-center justify-between">

          {/*logo*/}
          <img src="/images/bq.png" alt="BZ" className="h-8 sm:h-10" />

          <div className="flex items-center gap-6 lg:gap-8">

            {/*nav*/}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[14px] font-bold">
              {[
                "Home",
                "About Us",
                "Services",
                "Success Stories",
                "Blogs",
                "Careers",
                "Contact Us",
              ].map((item) => (
                <Link key={item} href="#" className="group relative">
                  <span className="group-hover:text-orange-500 transition">
                    {item}
                  </span>

                  <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition" />
                </Link>
              ))}
            </nav>

            {/*language*/}
            <div ref={langRef} className="relative hidden sm:block z-50">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-sm font-medium hover:text-orange-500 transition"
              >
                <img src="/images/usa.png" alt="EN" className="h-4 w-4 rounded-full" />
                EN
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-3 w-36 bg-black border border-gray-800 shadow-lg p-3 space-y-3 text-sm z-50">
                  <button className="flex items-center gap-3 w-full text-left">
                    <img src="/images/usa.png" className="h-4 w-4 rounded-full" />
                    EN
                  </button>

                  <button className="flex items-center gap-3 w-full text-left">
                    <img src="/images/india.png" className="h-4 w-4 rounded-full" />
                    HI
                  </button>

                  <button className="flex items-center gap-3 w-full text-left">
                    <img src="/images/uae.png" className="h-4 w-4 rounded-full" />
                    AR
                  </button>
                </div>
              )}
            </div>
          </div>

          {/*cta*/}
          <button className="hidden sm:block border border-white px-4 sm:px-6 py-2 text-xs sm:text-sm hover:border-orange-500 hover:text-orange-500 transition">
            Schedule a consultation
          </button>
        </div>
      </header>

      {/*content*/}
      <main className="flex-grow">{children}</main>

      {/*footer*/}
       
      <footer className="bg-black text-white pt-16 sm:pt-20 pb-14">

        <div className="max-w-[1660px] mx-auto px-4 sm:px-6 xl:px-12">

          {/*email*/}
          <div className="mb-14 sm:mb-20">
            <p className="text-gray-400 text-sm mb-2">
              Let’s start working together
            </p>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
              hello@bzanalytics.ai
            </h2>

            <div className="border-b border-gray-700 mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">

            {/*left*/}
            <div>
              <img src="/images/bq.png" alt="BZ" className="h-12 sm:h-14 mb-8 sm:mb-10" />

              <div className="flex gap-4 sm:gap-6">
                {[FaLinkedinIn, FaXTwitter, FaFacebookF, FaInstagram, FaYoutube].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-[#111] rounded-full flex items-center justify-center hover:bg-orange-500 transition"
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/*links*/}
            <div className="grid grid-cols-2 gap-10 text-sm text-gray-400">
              <div className="space-y-4">
                <p className="hover:text-orange-500 cursor-pointer">Home</p>
                <p className="hover:text-orange-500 cursor-pointer">About Us</p>
                <p className="hover:text-orange-500 cursor-pointer">Services</p>
                <p className="hover:text-orange-500 cursor-pointer">Success Stories</p>
              </div>

              <div className="space-y-4">
                <p className="hover:text-orange-500 cursor-pointer">Blogs</p>
                <p className="hover:text-orange-500 cursor-pointer">Careers</p>
                <p className="hover:text-orange-500 cursor-pointer">Contact Us</p>
              </div>
            </div>

            {/* subscribe */}
            <div className="flex md:justify-end">
              <div className="bg-[#0f0f0f] p-6 sm:p-8 w-full max-w-[360px]">

                <div className="flex justify-center mb-6">
                  <img src="/images/subscribe.png" className="h-20 sm:h-24" />
                </div>

                <h3 className="text-lg font-semibold text-center mb-2">
                  Subscribe now
                </h3>

                <p className="text-sm text-gray-400 text-center mb-6">
                  Empower Every Mind
                </p>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-black border border-gray-700 p-3 text-sm mb-4 outline-none"
                />

                <button className="w-full bg-orange-500 py-3 text-sm font-semibold hover:bg-orange-600 transition">
                  Submit
                </button>

              </div>
            </div>
          </div>
        </div>

        {/*arrow button*/}
        <div className="fixed right-4 sm:right-6 bottom-8 flex flex-col gap-4">

          {showTop && (
            <button
              onClick={scrollToTop}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-black border-2 border-orange-500 text-orange-500 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
            >
              <HiArrowUp size={18} />
            </button>
          )}

          <button className="w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-full flex items-center justify-center border border-gray-700">
            <FaWhatsapp className="text-green-500 text-xl sm:text-2xl" />
          </button>

        </div>
      </footer>


      {/*darkmode*/}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 left-6 bg-black dark:bg-white text-white dark:text-black border border-white dark:border-black px-3 py-1 text-xs"
      >
        Light/Dark
      </button>
    </div>
  );
}