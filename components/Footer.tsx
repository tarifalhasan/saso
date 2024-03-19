"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      // Adjust 300 as per your requirement
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add an event listener to handle scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer className=" bg-white pt-5 relative overflow-hidden">
      <div className=" container flex flex-col items-center justify-center">
        <div>
          <h2 className=" text-[5rem] sm:text-[7rem] lg:text-[9rem] xl:text-[11rem] font-n27 uppercase   text-skin-r3r3r3r3 text-center rotate-[-2deg] font-normal tracking-[-5.28px]">
            Satoshi
          </h2>
          <div className=" flex -mt-10 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={141}
              height={85}
              viewBox="0 0 141 85"
              fill="none"
              className=" w-20 lg:w-32"
            >
              <path
                d="M139.837 75.2024L38.1559 82.3127C19.9886 83.583 4.28375 70.6709 3.08097 53.4704C1.8785 36.2743 15.6335 21.3022 33.8008 20.0318L71.6214 17.3871"
                stroke="#0151AD"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M59.0828 31.0375L71.8301 17.1567"
                stroke="#0151AD"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M57.2903 5.40448L71.8451 17.3716"
                stroke="#0151AD"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className=" space-y-2">
              <h4 className=" text-lg lg:text-2xl font-geliat font-normal">
                rediscover the real power of Satoshi
              </h4>
              <p className=" text-center text-sm lg:text-base font-normal text-skin-gray-800 font-geliat  tracking-[-0.48px]">
                for the people, by the people
              </p>
            </div>
          </div>
        </div>
        <ul className=" flex flex-wrap justify-center items-center py-10 gap-5">
          <li>
            <Link
              className=" h-[128px]  transition-all duration-700 bg-skin-blue-600 py-4 flex items-center justify-center  w-[128px] flex-grow"
              href={"https://t.me/sosa_portal"}
              target="_blank"
            >
              <span className=" flex flex-col items-center justify-center space-y-4">
                <Image
                  src={"/telegram-light.svg"}
                  alt="telegran"
                  width={32}
                  height={32}
                  className=" w-8 h-8"
                />
                <span className=" text-base font-medium font-geliat text-white">
                  Telegram
                </span>
              </span>
            </Link>
          </li>
          <li>
            <Link
              className=" h-[128px]  transition-all duration-700 bg-skin-blue-600 py-4 flex items-center justify-center  w-[128px] flex-grow"
              href={"https://twitter.com/StoryOfSatoshi"}
              target="_blank"
            >
              <span className=" flex flex-col items-center justify-center space-y-4">
                <Image
                  src={"/twitter-2.svg"}
                  alt="twitter"
                  width={32}
                  height={32}
                  className=" w-8 h-8"
                />
                <span className=" text-base font-medium font-geliat text-white">
                  Twitter
                </span>
              </span>
            </Link>
          </li>
          <li>
            <Link
              className=" h-[128px]  transition-all duration-700 bg-[#00B8D8] py-4 flex items-center justify-center  w-[128px] flex-grow"
              href={"/"}
              target="_blank"
            >
              <span className=" flex flex-col items-center justify-center space-y-4">
                <Image
                  src={"/dex.svg"}
                  alt="dex"
                  className=" w-[27px] h-8"
                  width={27}
                  height={32}
                />
                <span className=" text-base font-medium font-geliat text-white">
                  DEXTools
                </span>
              </span>
            </Link>
          </li>
          <li>
            <Link
              className=" h-[128px]  transition-all duration-700 bg-[#000] py-4 flex items-center justify-center  w-[128px] flex-grow"
              href={"/"}
              target="_blank"
            >
              <span className=" flex flex-col items-center justify-center space-y-4">
                <Image
                  src={"/eagle-lgiht.svg"}
                  alt="eagle light"
                  width={32}
                  height={32}
                  className=" w-8 h-8"
                />
                <span className=" text-base font-medium font-geliat text-white">
                  DEX Screener
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="  relative border-t-2 border-skin-gray-200 pt-4 pb-7 flex items-center flex-wrap gap-4 justify-between mx-auto max-w-[95%]">
        <p className=" text-skin-gray-900 font-normal text-xs 2xl:text-sm font-geliat">
          © 2024 $SOSA
        </p>
        {/* <ul className="  inline-flex items-center gap-8">
          <li>
            <Link
              href={"/"}
              className=" hover:underline text-xs font-geliat 2xl:text-sm font-normal text-skin-gray-900"
            >
              Terms of use
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="hover:underline text-xs font-geliat 2xl:text-sm font-normal text-skin-gray-900"
            >
              Privacy Policy
            </Link>
          </li>
        </ul> */}

        <div className="  fixed   z-50  bottom-[44px]  right-5 ">
          {showScrollButton && (
            <button
              className=" bg-skin-gray-200 w-14 h-14 flex items-center justify-center rounded-full"
              onClick={scrollToTop}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 5V19M12 5L18 11M12 5L6 11"
                  stroke="#B3B3B3"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
