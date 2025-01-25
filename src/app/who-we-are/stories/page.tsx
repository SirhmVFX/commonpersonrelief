import { blogs } from "@/app/data";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";



export default function Stories() {
 
  return (
    <div>
      <div className="w-5/6 mx-auto py-20 md:pt-32 md:flex items-center gap-16">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium md:w-1/2">
          Our Great Events
        </h1>
        <p className="md:w-1/2 text-gray-500 text-base md:text-lg">
          Our past events have united communities to drive change, from
          education to health initiatives, making a lasting impact on those in
          need.
        </p>
      </div>
      <div className="w-5/6 mx-auto p-4 flex justify-center items-center gap-4 border-y border-gray-200">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-primarycolor text-2xl mt-1">
            <BiArrowBack />
          </div>
          Back to Home
        </Link>
        <div className="w-[1px] h-[10px] bg-gray-200"></div>
        <p>Blog</p>
      </div>

      <div className="w-5/6 mx-auto py-10 lg:py-20 flex flex-col gap-4">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium">
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
