"use client";

import Image from "next/image";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";

import { useState, useRef } from "react";
import BlogCard from "@/components/BlogCard";
import CtaPage from "@/components/Cta.page";
import Herosection from "@/components/Herosection";

interface Blog {
  id: number;
  title: string;
  image: string;
  description: string;
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const blogs: Blog[] = [
    {
      id: 1,
      title: "Clothing the Needy",
      image: "/images/blog1.png",
      description:
        "Our plan is to create our Winter Warmth Campaign and distribute over 2,000 clothing items to those in need. Thank you to our donors and volunteers for making this possible!",
    },
    {
      id: 2,
      title: "Together for Good: Volunteer Day Recap",
      image: "/images/blog2.png",
      description:
        " Volunteers came together for a day of service, packing relief kits and spreading joy. Check out highlights from this inspiring event and join us next time!",
    },
    {
      id: 3,
      title: "Feeding Hope: Monthly Food Drive Success",
      image: "/images/blog3.png",
      description:
        "Our recent food drive provided over 5,000 meals to underserved communities, ensuring families have the nourishment they need. Join us for next month's drive!",
    },
    {
      id: 4,
      title: "Building Futures: New Shelter Project Launched",
      image: "/images/blog4.png",
      description:
        "We've plan to launched a new shelter initiative to provide safe, temporary housing for displaced individuals. Together, we're creating spaces of hope and recovery.",
    },
  ];
  const handleScroll = (direction: "left" | "right") => {
    const newSlide =
      direction === "left"
        ? Math.max(1, currentSlide - 1)
        : Math.min(5, currentSlide + 1);
    setCurrentSlide(newSlide);
  };

  return (
    <>
      <Herosection />
      <div className="w-5/6 mx-auto pt-[80px] lg:pt-[120px] flex flex-col gap-4">
        <div>
          <p className="text-gray-500">About us</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium">
            Who we are
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-3/4 flex flex-col gap-4 items-start">
            <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/images/wee.png"
                alt="about"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <p className="text-gray-500">
              Common Person Relief is a nonprofit organization committed to
              helping the underserved with food, shelter, clothing, and other
              basic needs. We believe in restoring dignity and building stronger
              communities, one life at a time
            </p>
            <button className="w-full sm:w-auto bg-primarycolor text-white p-3 rounded-md">
              Learn More
            </button>
          </div>
          <div className="hidden lg:flex flex-col gap-4">
            <div className="w-full h-[300px]">
              <Image
                src="/images/wee2.png"
                alt="about"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="w-full h-[300px]">
              <Image
                src="/images/wee3.png"
                alt="about"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-5/6 mx-auto pt-10 lg:pt-20">
        <div className="flex flex-col lg:flex-row gap-4 pb-10 lg:pb-20">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium">
              Our Programs
            </h1>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-4 items-start">
            <p className="text-gray-500">What we do</p>
            <p className="text-gray-500 text-base lg:text-lg">
              Our programs are designed to address essential needs and empower
              individuals. From food drives to housing support and clothing
              distribution, we focus on creating lasting impact in the lives of
              those we serve
            </p>
            <button className="w-full sm:w-auto bg-primarycolor text-white p-3 rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 md:p-10 lg:p-20 flex flex-col lg:flex-row gap-4 items-center lg:items-end">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex gap-4">
            <button
              className="bg-white p-3 rounded-full hover:bg-gray-100"
              onClick={() => handleScroll("left")}
              disabled={currentSlide === 1}
            >
              <BiArrowToLeft />
            </button>
            <button
              className="bg-white p-3 rounded-full hover:bg-gray-100"
              onClick={() => handleScroll("right")}
              disabled={currentSlide === 5}
            >
              <BiArrowToRight />
            </button>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium">
            {currentSlide.toString().padStart(2, "0")}
          </h1>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-x-hidden scroll-smooth"
        >
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentSlide - 1) * (100 + 2)}%)`,
            }}
          >
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
              <div
                key={index}
                className="w-full flex-shrink-0 relative h-[500px]"
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute rounded-md top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h1 className="text-white text-2xl font-medium">
                    {card.title}
                  </h1>
                  <p className="text-gray-500">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-5/6 mx-auto py-10 lg:py-20 flex flex-col gap-4">
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium">
            Our Approach Trustworthiness
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
      </div>

      <div className="w-5/6 mx-auto py-10 lg:py-20 flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium">
          Read our latest events and news
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 pt-10">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
      <CtaPage />
    </>
  );
}
