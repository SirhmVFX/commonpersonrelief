import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import React from "react";
import { BsDot } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  
    <div className="herosection relative">
      <div className="w-5/6 mx-auto py-20 lg:py-40 absolute top-0 left-0 right-0 flex flex-col gap-4">
        <h1 className="text-6xl md:text-5xl lg:text-[110px] text-white lg:w-full font-medium leading-tight lg:leading-none">
          Charity is an act of a Soft Heart
        </h1>
        <p className="text-white lg:w-2/4 text-base md:text-xl lg:text-2xl">
          Providing food, shelter, and hope to those who need it most. Together,
          we can make a difference
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="flex items-center justify-center gap-2 bg-primarycolor text-white p-3 rounded-md w-full sm:w-auto">
            Make a donation
            <BiHeart className="text-xl" />
          </button>
          <button className="border border-primarycolor text-primarycolor p-3 rounded-md w-full sm:w-auto">
            Talk to us
          </button>
        </div>
      </div>
      <div className="w-5/6 pt-[110%] md:pt-[60%] lg:pt-[40%] mx-auto absolute left-0 right-0">
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
      </div>
     
      <div className="hidden md:block w-full mx-auto absolute left-0 right-0 pt-[120%] md:pt-[70%] lg:pt-[43%]">
         <div className="slider-container">
     <Slider {...settings} >
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
    
   </>
  );
}

export default Herosection;
