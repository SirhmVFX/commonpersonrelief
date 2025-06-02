"use client";

import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import CtaPage from "@/components/Cta.page";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { blogs } from "./data";
import Herosection2 from "@/components/Herosection2";
import Button from "@/components/Button";



export default function Home() {
  

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
  };

  return (
    <>
      <Herosection2 />
      <div className="md:w-5/6 h-screen md:h-[80vh] mx-auto p-4 md:py-[40px] lg:pt-[120px] flex flex-col justify-center gap-4">
        <div className="flex  gap-4">
          <div className="w-full flex flex-col md:flex-row gap-10 items-center ">
            <div className="w-2/5 h-[300px] md:h-[300px] lg:h-[400px]">
              <Image
                src="/images/wee.png"
                alt="about"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-4 items-start w-3/5 ">
              <p className="text-gray-500">About us</p>
              <h1 className="text-xl md:text-3xl lg:text-6xl font-medium">
                Who we are
              </h1>

              <p className="text-gray-500 text-base md:text-xl">
                Common Person Relief is a nonprofit organization committed to
                helping the underserved with food, shelter, clothing, and other
                basic needs. We believe in restoring dignity and building
                stronger communities, one life at a time
              </p>
              <Button type="link" url="/who-we-are" title="Learn More" classname="bg-primarycolor text-white"/>

              
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-5/6 h-screen mx-auto md:py-10 p-4 lg:pt-32">
        <div className=" flex flex-col gap-4">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-medium">
            Our Programs
          </h1>

          <div className="w-full flex flex-col gap-4 items-start">
            <p className="text-gray-500 mx-auto text-base  lg:text-lg">
              Our programs are designed to address essential needs and empower
              individuals. From food drives to housing support and clothing
              distribution, we focus on creating lasting impact in the lives of
              those we serve
            </p>
            {/* <Link href={"/who-we-are/#feeding-hungry"} className="w-full hidden md:block text-center sm:w-auto bg-primarycolor text-white p-3 rounded-md">
              Learn More
            </Link> */}
          </div>
        </div>
        <div className="pt-6">
          <div className="slider-container">
            <Slider {...settings}>
              {[
                {
                  title: "Food Programs",
                  img: "/images/food.jpeg",
                  description:
                    "Distribution of food packs, establishing food banks, and organizing community kitchens in underserved areas.",
                },
                {
                  title: "Shelter Programs",
                  img: "/images/shelt.jpeg",
                  description:
                    "Providing temporary and permanent housing solutions, offering shelter kits for disaster-stricken areas.",
                },
                {
                  title: "Clothing Programs",
                  img: "/images/cloth.jpg",
                  description:
                    "Distributing essential clothing and winter wear to communities in need across the region.",
                },
                {
                  title: "Education & Skills Training",
                  img: "/images/edu.jpeg",
                  description:
                    "Offering vocational training, literacy programs, and skill development workshops to empower communities.",
                },
                {
                  title: "Emergency Response",
                  img: "/images/emerg.jpg",
                  description:
                    "Rapid deployment of resources and support during natural disasters, crises, and emergency situations.",
                },
              ].map((card, index) => (
                <div key={index} className="w-full relative h-[500px]">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div className="absolute rounded-md top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <h1 className="text-white text-2xl md:text-4xl  font-medium">
                      {card.title}
                    </h1>
                    <p className="text-gray-500">{card.description}</p>
                    <Link
                      href={"/what-we-serve"}
                      className=" text-center w-fit  text-primarycolor underline py-2 rounded-md"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* <div className="md:w-5/6 h-[60vh] mx-auto md:py-10 p-4 lg:py-20 flex flex-col gap-4">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium">
            Our Partners
          </h1>
          <p className="text-gray-500">
            These are brands we look forward to patronize and work with
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-0 lg:flex">
          {[
            "/images/comp1.png",
            "/images/comp2.png",
            "/images/comp3.png",
            "/images/comp4.png",
          ].map((src, index) => (
            <div key={index} className="w-full h-[40px] md:h-[60px]">
              <Image
                src={src}
                alt="brand"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div> */}

      <div className="md:w-5/6 mx-auto p-4 h-[60vh] my-10 flex flex-col gap-6">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-medium my-4 ">
            Upcoming event
          </h1>
        <div className="w-full h-full relative">
          <Image
            src={"/images/wort1.jpg"}
            width={1000}
            height={1000}
            alt="event"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 from-black to-transparent  bg-gradient-to-t rounded-xl  "></div>
          <div className="absolute left-10 bottom-10 right-10 flex flex-col items-start  gap-2">
            <h1 className="text-md md:text-xl lg:text-4xl font-medium text-white">
            
Work Ready Transition Program (WORT)
            </h1>
            <p className="text-white">
            Together, we bring hope and relief to those in need.</p>
            <Link
              href="/who-we-are/stories/january-2025-outreach"
              className=" sm:w-auto text-primarycolor flex  gap-4 items-center"
            >
              Learn More
              <AiOutlineArrowRight className="w-[30px] h-[30px] p-2 rounded-full border border-white" />
            </Link>
          </div>
        </div>
      </div>

      <div className="md:w-5/6 justify-center mx-auto  flex flex-col gap-2 md:mt-32">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-medium">
          Read our Latest Events and News
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 lg:gap-10 pt-10">
          {blogs.slice(0, 4).map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

        <Link href={"/who-we-are/stories"} className="text-center p-8">See More</Link>
      </div>


      <div className="md:w-5/6 justify-center mx-auto flex flex-col gap-2 md:mt-20">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-medium">
          Our Blogs and Articles
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 lg:gap-10 pt-10 pb-10">
          {blogs.slice(4, 8).map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
        <Link href={"/who-we-are/stories"} className="text-center p-8">See More</Link>
      </div>
      <CtaPage />
    </>
  );
}
