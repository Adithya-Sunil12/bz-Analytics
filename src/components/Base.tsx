"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiArrowUp } from "react-icons/hi";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface BaseProps {
  children: React.ReactNode;
}

const languages = [
  { code: "en", label: "EN", flag: "/images/usa.png" },
  { code: "hi", label: "HI", flag: "/images/india.png" },
  { code: "ar", label: "AR", flag: "/images/uae.png" },
];

const navItems = [
  "Home",
  "About Us",
  "Services",
  "Success Stories",
  "Blogs",
  "Careers",
  "Contact Us",
];

export default function Base({ children }: BaseProps) {
  const [darkMode, setDarkMode] = useState(true);
  const [showTop, setShowTop] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const [menuOpen, setMenuOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* Cursor */}
      <div
        className="fixed z-[9999] pointer-events-none w-5 h-5 border-2 border-orange-500 rounded-full transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${cursor.x - 10}px, ${cursor.y - 10}px, 0)`,
        }}
      />

      {/* HEADER */}
      <header className="w-full bg-black text-white font-bold sticky top-0 z-50">
        <div className="w-full flex items-center justify-between px-4 py-4">

          <img src="/images/bq.png" alt="logo" className="h-10 w-auto" />

          <nav className="hidden min-[1200px]:flex items-center text-sm font-medium gap-5">
            {navItems.map((item) => (
              <div key={item} className="flex items-center group cursor-pointer">
                <span className="mr-2 text-white group-hover:text-orange-500 xl:inline hidden">
                  •
                </span>

                <Link
                  href="#"
                  className="group-hover:text-orange-500 whitespace-nowrap"
                >
                  {item}
                </Link>
              </div>
            ))}

            {/* Language */}
            <div className="relative ml-2">
              <button
                onClick={() => setOpenLang(!openLang)}
                className="flex items-center gap-2 hover:text-orange-500"
              >
                <img
                  src={selectedLang.flag}
                  className="w-5 h-5 rounded-full"
                />

                {selectedLang.label}

                {openLang ? <FiChevronUp /> : <FiChevronDown />}
              </button>

              {openLang && (
                <div className="absolute right-0 mt-3 bg-zinc-900 border border-gray-700 rounded-md w-[120px] shadow-xl">

                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang);
                        setOpenLang(false);
                      }}
                      className="flex items-center gap-2 px-4 py-3 hover:bg-gray-800 cursor-pointer"
                    >
                      <img
                        src={lang.flag}
                        className="w-4 h-4 rounded-full"
                      />

                      {lang.label}
                    </div>
                  ))}

                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-4">

            <Link
              href="#"
              className="hidden lg:block border relative overflow-hidden border border-white px-6 py-4 group cursor-pointer"
            >
              <span className="absolute top-1/2 left-1/2 w-[400%] h-[400%] bg-white 
                -translate-x-1/2 -translate-y-1/2 rotate-45 
                scale-0 group-hover:scale-100 
                transition-transform duration-300 ease-out"></span>

              <span className="relative z-10 text-white group-hover:text-orange-500 transition-colors duration-300">
                Schedule a consultation
              </span>
            </Link>

            <button
              className="min-[1200px]:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
            </button>

          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="flex-grow">{children}</main>

      {/* NEW FOOTER */}
      <footer
        className="relative text-white py-16 px-6 md:px-12 lg:px-24 border-t border-gray-900 overflow-hidden"
        style={{
          backgroundColor: "#0a0a0a",
          backgroundImage: `repeating-linear-gradient(
            145deg,
            transparent,
            transparent 100px,
            rgba(255,255,225,0.08) 100px,
            rgba(255,255,225,0.04) 101px
          )`,
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">

          <div className="flex flex-col lg:flex-row gap-12 mb-16 items-start">

            {/* LEFT */}
            <div className="lg:w-2/3 w-full">

              <div className="mb-12">
                <p className="text-2xl text-white/70 mb-2">
                  Let's start working together
                </p>

                <a
                  href="mailto:hello@bzanalytics.ai"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold hover:text-orange-400 transition-colors"
                >
                  hello@bzanalytics.ai
                </a>

                <div className="w-full h-[1px] bg-gray-800 mt-10"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-10 items-start">

                {/* LOGO */}
                <div className="flex flex-col gap-6">

                  <Image
                    src="/images/bq.png"
                    alt="BZ"
                    width={200}
                    height={200}
                    className="mb-6 w-[180px] md:w-[220px]"
                  />

                  <div className="mt-10 flex items-center gap-5">

                    <a className="flex h-14 w-14 items-center justify-center rounded-full bg-black hover:bg-white/10">
                      <Linkedin className="h-6 w-6 fill-white text-white" />
                    </a>

                    <a className="flex h-14 w-14 items-center justify-center rounded-full bg-black hover:bg-white/10">
                      <Facebook className="h-6 w-6 fill-white text-white" />
                    </a>

                    <a className="flex h-14 w-14 items-center justify-center rounded-full bg-black hover:bg-white/10">
                      <Instagram className="h-6 w-6 text-white" />
                    </a>

                    <a className="flex h-14 w-14 items-center justify-center rounded-full bg-black hover:bg-white/10">
                      <FaYoutube className="h-6 w-6 text-white" />
                    </a>

                  </div>
                </div>

                {/* LINKS */}
                <div className="flex flex-col gap-4 text-gray-300 md:ml-10">
                  <Link href="#">Home</Link>
                  <Link href="#">About Us</Link>
                  <Link href="#">Services</Link>
                  <Link href="#">Success Stories</Link>
                </div>

                <div className="flex flex-col gap-4 text-gray-300">
                  <Link href="#">Blogs</Link>
                  <Link href="#">Careers</Link>
                  <Link href="#">Contact Us</Link>
                </div>

              </div>
            </div>

            {/* SUBSCRIBE BOX */}
            <div className="w-full lg:w-auto md:ml-5 bg-[#111]/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-gray-800/50 flex flex-col items-start">

              <div className="mb-6 flex justify-center w-full">
                <Image
                  src="/images/subscribe.png"
                  alt="Footer Logo"
                  width={120}
                  height={120}
                />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-1">
                Subscribe now
              </h3>

              <p className="text-gray-300 text-sm mb-8">
                Empower Every Mind
              </p>

              <form className="w-full space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-[#0d0d0d] border border-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:border-orange-500 text-white"
                />

                <button
                  type="submit"
                  className="w-full bg-orange-400 hover:bg-white hover:text-black text-white font-bold py-4 rounded-lg transition-colors"
                >
                  Submit
                </button>
              </form>

            </div>

          </div>
        </div>

        {/* FLOAT BUTTONS */}
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

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 left-6 bg-black dark:bg-white text-white dark:text-black border px-3 py-1 text-xs"
      >
        Light/Dark
      </button>

    </div>
  );
}