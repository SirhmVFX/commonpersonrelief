import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

interface Blog {
  id: number;
  title: string;
  image: string;
  link: string;
  description: string;
}

export default function Stories() {
  const blogs: Blog[] = [
    {
      id: 1,
      title:
        " January 2025 Events: Empowering Communities Through Outreach in the state of Ibadan",
      image: "/images/rec.png",
      link: "/who-we-are/stories/january-2025-outreach",
      description: "Together, we bring hope and relief to those in need.",
    },
    {
      id: 2,
      title: " How Your Small Donations Make a Big Impact",
      image: "/images/at1.jpg",
      link: "/who-we-are/stories/how-your-small-donations-make-a-big-impact",
      description:
        "When it comes to charity, many people think that only large donations make a difference. However, the truth is that small contributions collectively have the power to transform lives and uplift communities",
    },
    {
      id: 3,
      title: "The Role of Education in Breaking the Cycle of Poverty",
      image: "/images/at2.jpg",
      link: "/who-we-are/stories/the-role-of-education-in-breaking-the-cycle-of-poverty",
      description:
        "Education is more than just learning—it’s a pathway to a brighter future.",
    },
    {
      id: 4,
      title:
        " How Clean Water Access Transforms Lives in Underserved Communities",
      image: "/images/at3.jpg",
      link: "/who-we-are/stories/how-clean-water-access-transforms-lives-in-underserved-communities",
      description:
        "Our recent food drive provided over 5,000 meals to underserved communities, ensuring families have the nourishment they need. Join us for next month's drive!",
    },
    {
      id: 5,
      title: "Spreading Smiles: The Joy of Giving in Unique Ways",
      image: "/images/at4.jpg",
      link: "/who-we-are/stories/spreading-smiles-the-joy-of-giving-in-unique-ways",
      description:
        "We've plan to launched a new shelter initiative to provide safe, temporary housing for displaced individuals. Together, we're creating spaces of hope and recovery.",
    },
  ];
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
