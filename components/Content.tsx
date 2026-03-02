"use client";

export default function Content() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">

      {/*hero section*/}
      <section className="relative w-full h-[500px] overflow-hidden">

        {/* background image*/}
        <img
          src="/images/career.jpeg"
          alt="Careers Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>

        {/* text */}
        <div className="relative z-10 h-full flex items-center">

          {/* Increased left spacing to match original */}
          <div className="pl-[140px]">

            <p className="text-sm font-medium text-gray-300 mb-3 tracking-wide">
              Home . Careers
            </p>

            <h1 className="text-6xl font-bold leading-tight">
              Careers
            </h1>

          </div>

        </div>
      </section>
      



    {/* join section */}

      <section className="py-24 text-center bg-white dark:bg-black transition-colors duration-300">

        <div className="max-w-[1660px] mx-auto px-6">

          <div className="w-2 h-2 bg-orange-500 rounded-full mx-auto mb-4"></div>

          <p className="text-xs text-gray-400 tracking-widest mb-4">
            CONTACT WITH BZ
          </p>

          <h2 className="text-3xl font-bold mb-8">
            Join Bz Team!
          </h2>

          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 text-sm font-semibold transition">
            Apply Now!
          </button>

        </div>

      </section>
    



      {/*  CONTACT CARD */}
      <section className="pb-32 bg-white dark:bg-black transition-colors duration-300">

        <div className="max-w-[1100px] mx-auto bg-gray-100 dark:bg-[#111] p-12 rounded transition-colors duration-300">

          <div className="grid md:grid-cols-2 gap-16">

            {/* INDIA */}
            <div className="flex gap-6">
              <img
                src="/images/india.png"
                alt="India"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold text-lg mb-3">
                  India
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-6">
                  International Solution for Free and Open Source
                  Software ICFOSS, Karyavattom,
                  Thiruvananthapuram
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  hello@bzanalytics.ai
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  +91 9995 285 233
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  +91 980 9017923
                </p>
              </div>
            </div>


            {/* UAE */}
            <div className="flex gap-6">
              <img
                src="/images/uae.png"
                alt="UAE"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold text-lg mb-3">
                  UAE
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-6">
                  Office# 1703, 17th Floor, Musalla Towers,
                  Near Burjuman Metro Station, Dubai,
                  United Arab Emirates.
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  hello@bzanalytics.ai
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  +971 5016 623 12
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  +971 5011 362 66
                </p>
              </div>
            </div>

          </div>
        </div>

      </section>
   
    </div>
  );
}