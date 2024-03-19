import Image from "next/image";

const Assemble = () => {
  return (
    <section className=" bg-white py-10   overflow-hidden lg:-mt-[6.2rem] relative z-40">
      <div className="  container flex flex-col lg:flex-row  lg:items-start gap-8">
        <div className=" order-last lg:order-first basis-full lg:basis-1/2">
          <div className="">
            <Image
              width={498}
              height={498}
              className=" w-full h-full object-cover"
              src={"/Assemble.webp"}
              alt="hero"
            />
          </div>
        </div>
        <div className=" basis-full  space-y-2 lg:-space-y-4 xl:-space-y-8 lg:basis-1/2">
          <div>
            <h4 className=" leading-[110%] tracking-[1.44px] text-5xl lg:text-7xl xl:text-8xl  text-skin-gray-900 font-n27 font-normal">
              <span className=" lg:-ml-[17%]"> Anons</span>
              <span className="  flex  gap-4 ">Assemble!</span>
            </h4>
          </div>

          <div className=" lg:pt-6 max-w-[439px]  ">
            <h4 className=" text-xl xl:text-2xl font-normal font-geliat">
              Power to the People, Liberate Satoshi with $SOSA:
            </h4>
            <p className=" text-base font-normal text-skin-gray-800 font-geliat">
              Break the Matrix, Free the Future!
            </p>
          </div>
        </div>
      </div>
      <div className=" relative z-20 pt-24  container flex flex-col lg:flex-row  lg:items-start gap-8">
        <div className=" order-last  basis-full lg:basis-1/2">
          <div className="">
            <Image
              width={498}
              height={498}
              className=" w-full h-full object-cover"
              src={"/matrix-crack.webp"}
              alt="hero"
            />
          </div>
        </div>
        <div className=" basis-full  space-y-2 lg:-space-y-6 xl:-space-y-8 lg:basis-1/2">
          <div className=" lg:pt-[25%]">
            <div>
              <h4 className=" leading-[110%] tracking-[1.44px] text-5xl lg:text-5xl xl:text-6xl  text-skin-gray-900 font-n27 font-normal">
                <span className=" "> $SOSA: </span>
                <span className=" ml-[10%]  flex  gap-4 ">
                  Crack the Matrix
                </span>
              </h4>
            </div>
            <div className=" lg:pt-12 ml-[10%]  space-y-6 max-w-[439px]  ">
              <h4 className=" text-xl xl:text-2xl font-normal font-geliat">
                Free the Future.
              </h4>
              <p className=" text-base font-normal text-skin-gray-800 font-geliat">
                Satoshi Codes Our Escape—Together, We Liberate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url("/shape-2.png")`,
          backgroundSize: "100%",
        }}
        className=" mt-[-6%]   w-full  z-40 relative  overflow-hidden pb-[10%] bg-no-repeat "
      ></div>
      <div className=" relative z-20 pt-24  container flex flex-col lg:flex-row  lg:items-center gap-8">
        <div className=" order-first  basis-full lg:basis-1/2">
          <div className="">
            <Image
              width={425}
              height={400}
              className=" w-full h-full object-cover"
              src={"/meme-coin.webp"}
              alt="hero"
            />
          </div>
        </div>
        <div className=" basis-full  space-y-2 lg:-space-y-6 xl:-space-y-8 lg:basis-1/2">
          <div className=" ">
            <div>
              <h4 className=" leading-[110%] tracking-[1.44px] text-4xl lg:text-5xl xl:text-6xl  text-skin-gray-900 font-n27 font-normal">
                <span className="  lg:ml-[10%]"> $SOSA: </span>
                <span className="  ml-[10%] lg:ml-0 flex  gap-4 ">
                  Not Just a Meme Coin,
                </span>
              </h4>
            </div>
            <div className=" pt-3 lg:pt-10   space-y-4 lg:space-y-6  block  mx-auto max-w-[301px] ">
              <h4 className=" text-xl xl:text-2xl font-normal font-geliat">
                a Declaration of War on Crypto&apos;s Centralization.
              </h4>
              <p className=" text-base font-normal text-skin-gray-800 font-geliat">
                We&apos;re Seizing Power, Charting the Exodus to Financial
                Freedom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assemble;
