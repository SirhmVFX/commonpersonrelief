import Image from "next/image";
interface Blog {
  title: string;
  image: string;
  description: string;
}
function BlogCard({ title, image, description }: Blog) {
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
        <div className="flex flex-col gap-4 items-start py-2">
          <h1 className="md:text-[38px] text-2xl leading-none font-medium">{title}</h1>
          <p className="text-gray-500 text-sm md:text-base">{description}</p>
        </div>
        <button className="border-b border-primarycolor text-primarycolor p-3 rounded-md">
          Read
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
