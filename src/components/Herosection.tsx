import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function Herosection() {
  const settings = {
    className: "slider variable-width flex gap-8",
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 300,
  };

  return (
    <>
      <div className="">
        <div className="relative h-screen">
          <div className=" w-full h-full">
            <Image
              src="/images/h1.jpg"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              alt="bg"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
          <div className="w-5/6 mx-auto flex md:items-center md:text-center flex-col gap-4 py-16 ">
            <h1 className="text-6xl md:text-3xl lg:text-[70px] text-white lg:w-full leading-none lg:leading-none">
              Charity is an act of a Soft Heart
            </h1>
            <p className="text-white lg:w-3/4 text-base md:text-xl lg:text-lg">
            Creating lasting change for those in need. Provide food, shelter, education, and hope to countless lives. Together, we can make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/donate" className="flex items-center justify-center gap-2 bg-primarycolor text-white p-3 rounded-md w-full sm:w-auto">
                Make a donation
                <BiHeart className="text-xl" />
              </Link>
              <Link href={"/contact"} className="border gap-2 flex items-center justify-center border-primarycolor text-primarycolor text-center p-3 rounded-md w-full sm:w-auto">
                Talk to us
                <BsArrowRight className="text-xl" />
              </Link>
            </div>
          </div>
          {/* <div className="w-5/6  mx-auto py-8 ">
            <div className="hidden overflow-hidden md:flex gap-4 items-center whitespace-nowrap animate-marquee">
              <p className="text-white text-base md:text-xl lg:text-2xl">
                EMPOWERMENT
              </p>
              <BsDot className="text-white text-base md:text-xl lg:text-2xl" />
              <p className="text-white text-base md:text-xl lg:text-2xl">
                24/7 SUPPORT
              </p>
              <BsDot className="text-white text-base md:text-xl lg:text-2xl" />
              <p className="text-white text-base md:text-xl lg:text-2xl">
                DEVELOPMENT
              </p>
              <BsDot className="text-white text-base md:text-xl lg:text-2xl" />
              <p className="text-white text-base md:text-xl lg:text-2xl">
                OUTREACH
              </p>
              <BsDot className="text-white text-base md:text-xl lg:text-2xl" />
              <p className="text-white text-base md:text-xl lg:text-2xl">
                SOCIAL IMPACT
              </p>
              <BsDot className="text-white text-base md:text-xl lg:text-2xl" />
              <p className="text-white text-base md:text-xl lg:text-2xl">
                SUSTAINABILITY
              </p>
            </div>
          </div> */}

          <div className="hidden md:block w-full mx-auto py-4 ">
            <div className="slider-container">
              <Slider {...settings}>
                <div className="h-[300px] px-2" style={{ width: 400 }}>
                  <Image
                    src={"/images/hero3.png"}
                    width={1000}
                    height={1000}
                    alt="herosection"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="h-[300px] px-2" style={{ width: 600 }}>
                  <Image
                    src={"/images/hero1.jpeg"}
                    width={1000}
                    height={1000}
                    alt="herosection"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="h-[300px] px-2" style={{ width: 275 }}>
                  <Image
                    src={"/images/im2.png"}
                    width={1000}
                    height={1000}
                    alt="herosection"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="h-[300px] px-2" style={{ width: 350 }}>
                  <Image
                    src={"/images/mis.jpeg"}
                    width={1000}
                    height={1000}
                    alt="herosection"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="h-[300px] px-2" style={{ width: 225 }}>
                  <Image
                    src={"/images/shelt.jpeg"}
                    width={1000}
                    height={1000}
                    alt="herosection"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="h-[300px] px-2" style={{ width: 575 }}>
                  <Image
                    src={"/images/im.jpg"}
                    width={1000}
                    height={1000}
                    alt="herosection"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Herosection;
