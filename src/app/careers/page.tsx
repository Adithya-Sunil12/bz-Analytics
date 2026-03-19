"use client";

export default function Page() {
  return (
    <div className="w-full bg-white dark:bg-black text-black dark:text-white">

      {/* HERO */}
      <section className="relative w-full h-[320px] md:h-[420px] lg:h-[480px] overflow-hidden">

        <img
          src="/images/career.jpeg"
          alt="Careers Background"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
        />

        {/* Light Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent dark:from-black/80 dark:via-black/40"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent dark:from-black/1 dark:via-black/1 dark:shadow-[inset_0_-150px_150px_rgba(0,0,0,0.95)]"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10">

            <p className="text-sm md:text-base mb-4 tracking-wide">
              Home . Careers  
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
              Careers
            </h1>

          </div>
        </div>
      </section>

      {/* JOIN SECTION */}
      <section className="py-20 md:py-8 text-center">
        <div className="max-w-[900px] mx-auto px-6">

          <div className="w-2 h-2 bg-orange-500 rounded-full mx-auto mb-6"></div>

          <p className="text-[12px] md:text-[13px] text-gray-400 tracking-[0.3em] mb-4">
            CONTACT WITH BZ
          </p>

         <h2 className="text-2xl md:text-3xl font-bold mb-10 leading-tight">
  Join Bz Team!
</h2>

          <button className="bg-orange-500 px-10 py-4 text-[15px] font-semibold relative overflow-hidden group transition">
            <span className="absolute top-1/2 left-1/2 w-[400%] h-[400%] bg-white 
            -translate-x-1/2 -translate-y-1/2 rotate-45 
            scale-0 group-hover:scale-100 
            transition-transform duration-500 ease-out"></span>

            <span className="relative z-10 group-hover:text-orange-500 transition-colors duration-300">
              Apply Now!
            </span>
          </button>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">

          <div className="bg-gray-100 dark:bg-[#111] p-8 md:p-14 rounded-xl">

            <div className="grid md:grid-cols-2 gap-12 md:gap-16">

              {/* INDIA */}
              <div className="flex items-start gap-6">
                <img
                  src="/images/india.png"
                  className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-xl mb-3">India</h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">
                    International Solution for Free and Open Source Software
                    ICFOSS, Karyavattom, Thiruvananthapuram
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-5">
                    hello@bzanalytics.ai
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    +91 9995 285 233
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    +91 980 9017923
                  </p>
                </div>
              </div>

              {/* UAE */}
              <div className="flex items-start gap-6">
                <img
                  src="/images/uae.png"
                  className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-xl mb-3">UAE</h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">
                    Office# 1703, 17th Floor, Musalla Towers, Near Burjuman Metro
                    Station, Dubai, United Arab Emirates.
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-5 ">
                    hello@bzanalytics.ai
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    +971 5016 623 12
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
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