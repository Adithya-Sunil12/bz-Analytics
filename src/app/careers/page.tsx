"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="w-full bg-white dark:bg-black text-black dark:text-white">

      {/* HERO */}
       <section className="relative w-full h-[35vh] md:h-[55vh] lg:h-[60vh] flex items-center overflow-hidden">

  {/* IMAGE */}
  <img
    src="/images/entry.jpeg"
    alt="Careers Background"
    className="absolute inset-0 bg-cover bg-center opacity-80"
  />

    {/* Overlay (changes with theme) */}
      <div className="absolute inset-0 
      bg-gradient-to-t 
      from-white/60 via-white/70 to-white/40
      dark:from-black dark:via-black/30 dark:to-black/40"></div>

  {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >

          {/* Breadcrumb */}
          <div className="flex items-center gap-3 
          text-black dark:text-white 
          text-sm md:text-base font-medium mb-3">

            <span className="hover:text-orange-500 transition-colors cursor-pointer">
              Home
            </span>

            <span>.</span>

            <span className="cursor-pointer hover:text-orange-500">
              Careers
            </span>

          </div>

          {/* Heading */}
          <h1 className="text-black dark:text-white 
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
          font-bold leading-tight">
            Careers
          </h1>

        </motion.div>
      </div>
</section>


 {/*SECOND SECTION  */}
      <div className="theme-bg theme-text  px-6 py-16 sm:py-10 text-center  sm:mt-0 md:-mt-10 md:mb-12">
        <div className="flex justify-center mt-10 sm:mt-16 ">
          <span className="w-2 h-2 -mt-5 bg-orange-400 rounded-full text-2xl"></span>
        </div>

        <p className="uppercase text-xs sm:text-sm md:text-sm mb-2">
          CONTACT WITH BZ
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-[46px] font-extrabold leading-12 mb-[50px]">
          Join Bz Team!
        </h1>

          <button className="bg-orange-400 px-[42px] py-[15px] text-[14px] md:text-[15px] font-semibold relative overflow-hidden group transition">
            
            <span className="absolute top-1/2 left-1/2 w-[400%] h-[400%] bg-white 
            -translate-x-1/2 -translate-y-1/2 rotate-45 
            scale-0 group-hover:scale-100 
            transition-transform duration-500 ease-out"></span>

            <span className="relative z-10 group-hover:text-orange-500 transition-colors duration-300">
              Apply Now!
            </span>

          </button>

      </div>

      

      {/* CONTACT SECTION */}
      <section className="pb-[100px]">
        <div className="max-w-[1200px] mx-auto px-6">

          <div className="bg-gray-100 dark:bg-[#111] p-[30px] md:p-[50px] mb-10 max-w-[1170px] min-h-[331px] mx-auto border-1 border-black dark:border-dark">

            <div className="grid md:grid-cols-2 gap-[40px] md:gap-[70px]">

              {/* INDIA */}
              <div className="flex items-start gap-5 ">
                <img
                  src="/images/india.png"
                  className="h-[52px] w-[52px] md:h-[60px] md:w-[60px] rounded-full object-cover mt-3"
                />

                <div className="w-[403] h-[180]">
                  <h3 className="font-bold text-[18px] md:text-[19px] mb-3 mt-3">
                    India
                  </h3>

                  <p className="text-[16px] md:text-[16px] mt-3 text-gray-600 dark:text-white leading-[22px]">
                    International Solution for Free and Open Source 
                  </p>

                  <p className="text-[16px] md:text-[16px] mt-3 text-gray-600 dark:text-white leading-[22px]">
                    Software ICFOSS, Karyavattom, 
                  </p>

                  <p className="text-[16px] md:text-[16px] mt-3 text-gray-600 dark:text-white leading-[22px]">
                    Thiruvananthapuram
                  </p>

                  <p className="text-[16px] text-gray-600 mt-2 dark:text-white hover:text-orange-400 cursor-pointer">
                    hello@bzanalytics.ai
                  </p>

                  <p className="text-[16px] text-gray-600 mt-2 dark:text-white hover:text-orange-400 cursor-pointer">
                    +91 9995 285 233
                  </p>

                  <p className="text-[16px] text-gray-600 mt-2 dark:text-white hover:text-orange-400 cursor-pointer">
                    +91 980 9017923
                  </p>
                </div>
              </div>

              {/* UAE */}
              <div className="flex items-start gap-5">
                <img
                  src="/images/uae.png"
                  className="h-[52px] w-[52px] md:h-[60px] md:w-[60px] rounded-full object-cover mt-3"
                />

                <div>
                  <h3 className="font-bold text-[18px] md:text-[20px] mb-2 mt-3">
                    UAE
                  </h3>

                  <p className="text-[16px] md:text-[16px] mt-3 text-gray-600 dark:text-white leading-[22px]">
                    Office# 1703, 17th Floor, Musalla Towers, Near
                  </p>

                  <p className="text-[16px] md:text-[16px] mt-3 text-gray-600 dark:text-white leading-[22px]">
                    Burjuman Metro Station, Dubai, United Arab 
                  </p>

                  <p className="text-[16px] md:text-[16px] mt-3 text-gray-600 dark:text-white leading-[22px]">
                    Emirates.
                  </p>

                  <p className="text-[16px] text-gray-600 mt-2 dark:text-white hover:text-orange-400 cursor-pointer">
                    hello@bzanalytics.ai
                  </p>

                  <p className="text-[16px] text-gray-600 mt-2 dark:text-white hover:text-orange-400 cursor-pointer">
                    +971 5016 623 12
                  </p>

                  <p className="text-[16px] text-gray-600 mt-2 dark:text-white hover:text-orange-400 cursor-pointer">
                    +971 5011 362 66
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}