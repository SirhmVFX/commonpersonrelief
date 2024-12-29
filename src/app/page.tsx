"use client";

import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import CtaPage from "@/components/Cta.page";
import Herosection from "@/components/Herosection";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Blog {
  id: number;
  title: string;
  image: string;
  description: string;
}

export default function Home() {
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
      <Herosection />
      <div className="w-5/6 h-screen md:h-[80vh] mx-auto pt-[80px] lg:pt-[120px] flex flex-col justify-center gap-4">
        <div className="flex  gap-4">
          <div className="w-full flex flex-col md:flex-row gap-10 items-center ">
            <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/images/wee.png"
                alt="about"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col gap-4 items-start ">
              <p className="text-gray-500">About us</p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium">
                Who we are
              </h1>

              <p className="text-gray-500">
                Common Person Relief is a nonprofit organization committed to
                helping the underserved with food, shelter, clothing, and other
                basic needs. We believe in restoring dignity and building
                stronger communities, one life at a time
              </p>
              <Link
                href={"/mission-vision"}
                className=" sm:w-auto bg-primarycolor text-white p-3 rounded-md"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-5/6 h-screen mx-auto pt-10 lg:pt-32">
        <div className=" flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium">
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
                      className=" hidden md:block text-center w-fit  text-primarycolor underline p-2 rounded-md"
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

      <div className="w-5/6 h-[60vh] mx-auto py-10 lg:py-20 flex flex-col gap-4">
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
      </div>

      <div className="w-5/6 justify-center mx-auto py-10 lg:py-20 flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium">
          Read our latest events and news
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 lg:gap-20 pt-10">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
      <CtaPage />
    </>
  );
}
