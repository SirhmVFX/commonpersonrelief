import Image from "next/image";
import Link from "next/link";
interface Blog {
  title: string;
  image: string;
  description: string;
  link: string;
}
function BlogCard({ title, image, description, link }: Blog) {
  return (
    <div className="md:flex gap-14">
      <div className="md:w-1/2 h-[200px]">
        <Image
          src={image}
          alt="news"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-between items-start ">
        <div className="flex flex-col gap-2 items-start py-2">
          <h1 className="md:text-[20px] text-[13px] leading-tight font-medium">{title}</h1>
          <p className="text-gray-500 md:text-base text-[10px]">{description.split(" ").slice(0, 10).join(" ")}.....</p>
        </div>
        <Link href={link} className=" text-primarycolor  underline rounded-md">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
