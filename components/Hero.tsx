import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" bg-[#F1F0F0] relative overflow-hidden">
      <header className=" px-5 py-6">
        <Link href={"/"}>
          <Image width={175} height={58} src={"/logo.svg"} alt="sosa" />
        </Link>
      </header>
      <div className="  container flex flex-col lg:flex-row  lg:items-center gap-10">
        <div className=" order-last lg:order-first basis-full lg:basis-1/2">
          <div className="  lg:max-w-[380px] xl:max-w-[451px]">
            <Image
              width={450}
              height={550}
              className=" -rotate-3"
              src={"/hero.webp"}
              alt="hero"
            />
          </div>
        </div>
        <div className=" basis-full  space-y-2 lg:-space-y-4 xl:-space-y-8 lg:basis-1/2">
          <div>
            <h4 className=" leading-[120%] tracking-[1.44px] text-3xl xl:text-5xl text-skin-r3r3r3r3 font-n27 font-normal">
              The Story
              <span className="  flex  gap-4 ">
                <svg
                  className=" mt-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={53}
                  height={56}
                  viewBox="0 0 53 56"
                  fill="none"
                >
                  <path
                    d="M47.5989 0.999973H24.6208C11.5763 0.999973 1 11.0107 1 23.361C1 35.7113 11.5763 45.722 24.6208 45.722H51.7767"
                    stroke="#0151AD"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M42.1355 36.5952L51.9374 45.8732"
                    stroke="#0151AD"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M42.1355 55L51.9374 45.722"
                    stroke="#0151AD"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Of Satoshi
              </span>
            </h4>
          </div>
          <div className=" lg:-ml-[18%]">
            <h2 className=" text-[4rem] lg:text-[5rem] xl:text-[8.75rem]   font-pilat font-bold text-skin-accent">
              $SOSA
            </h2>
          </div>
          <div className=" lg:pt-6 lg:max-w-[411px]  mx-auto space-y-4  ">
            <h4 className=" text-xl xl:text-2xl font-normal font-geliat">
              $SOSA, the meme coin with a big mission: to free Satoshi and his
              dream. $SOSA isn&apos;t just any coin;{" "}
            </h4>
            <p className=" text-base font-normal text-skin-gray-800 font-geliat">
              it is a battle cry for everyone who believes in freedom from the
              matrix.
            </p>
            <ul className=" flex items-center gap-5">
              <li>
                <Link
                  className="  transition-all duration-700  hover:shadow-sm block bg-white px-3 py-3"
                  href={"/"}
                  target="_blank"
                >
                  <Image
                    src={"/telegram.svg"}
                    alt="telegran"
                    width={20}
                    height={20}
                    className=" w-5 h-5"
                  />
                </Link>
              </li>
              <li>
                <Link
                  className="  transition-all duration-700  hover:shadow-sm block bg-white px-3 py-3"
                  href={"/"}
                  target="_blank"
                >
                  <Image
                    src={"/twitter.svg"}
                    alt="telegran"
                    width={20}
                    height={20}
                    className=" w-5 h-5"
                  />
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="  transition-all duration-700  hover:shadow-sm block bg-white px-3 py-3"
                  href={"/"}
                  target="_blank"
                >
                  <Image
                    src={"/99.svg"}
                    alt="telegran"
                    width={20}
                    height={20}
                    className=" w-5 h-5"
                  />
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="  transition-all duration-700  hover:shadow-sm block bg-white px-3 py-3"
                  href={"/"}
                  target="_blank"
                >
                  <Image
                    src={"/eagle.svg"}
                    alt="telegran"
                    width={20}
                    height={20}
                    className=" w-5 h-5"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url("/100.png")`,
          backgroundSize: "100%",
        }}
        className=" w-full md:-mt-4 relative overflow-hidden pb-[10%] 2xl:pb-[8%] bg-no-repeat "
      ></div>

      <div className=" relative z-20 container py-12 flex flex-col lg:flex-row  lg:items-start gap-10">
        <div className=" basis-full lg:basis-1/2">
          <div className=" space-y-4 lg:space-y-6 lg:pt-16">
            <h2 className=" text-6xl lg:text-8xl font-bold font-pilat text-skin-r3r3r3r3">
              $SOSA
            </h2>
            <h3 className=" lg:max-w-[90%] text-2xl sm:text-5xl  font-normal font-n27 text-skin-gray-900 text-right">
              vs. The Matrix:{" "}
            </h3>
            <p className=" text-base text-skin-gray-800 font-normal text-right  lg:max-w-[80%]">
              Free Your Coin, Free Your Mind.
            </p>
          </div>
        </div>
        <div className=" basis-full lg:basis-1/2">
          <div>
            <Image
              width={569}
              height={557}
              className=" w-full"
              src={"/matrix.webp"}
              alt="hero"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url("/shape.png")`,
          backgroundSize: "100%",
        }}
        className=" w-full relative z-30  lg:-mt-[5rem] xl:-mt-[6rem]  overflow-hidden pb-[10%] 2xl:pb-[8%] bg-no-repeat "
      ></div>
    </section>
  );
};

export default Hero;
