import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

interface Blog {
  id: number;
  title: string;
  image: string;
  description: string;
}

export default function Stories() {
  const blogs: Blog[] = [
    {
      id: 1,
      title: "Clothing the Needy",
      image: "/images/blog1.png",
      description:
        "our plan is to create our Winter Warmth Campaign and distribute over 2,000 clothing items to those in need. Thank you to our donors and volunteers for making this possible!",
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
  return (
    <div>
      <div className="w-5/6 mx-auto py-16 md:py-32 flex items-center gap-16">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium w-1/2">
          Our great events
        </h1>
        <p className="w-1/2 text-gray-500 text-base md:text-lg">
          Our past events have united communities to drive change, from
          education to health initiatives, making a lasting impact on those in
          need.
        </p>
      </div>
      <div className="w-5/6 mx-auto p-4 flex justify-center items-center gap-4 border-y border-gray-200">
        <Link href="/who-we-are" className="flex items-center gap-2">
          <div className="text-primarycolor text-3xl mt-1">
            <BiArrowBack />
          </div>
          Back to Home
        </Link>
        <div className="w-[1px] h-[10px] bg-gray-200"></div>
        <p>Blog</p>
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
    </div>
  );
}
