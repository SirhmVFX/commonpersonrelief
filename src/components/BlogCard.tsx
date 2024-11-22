import Image from "next/image";
interface Blog {
  title: string;
  image: string;
  description: string;
}
function BlogCard({ title, image, description }: Blog) {
  return (
    <div className="flex gap-14">
      <div className="w-1/2 h-[350px]">
        <Image
          src={image}
          alt="news"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-between items-start">
        <div className="flex flex-col gap-4 items-start">
          <h1 className="text-[38px] leading-none font-medium">{title}</h1>
          <p className="text-gray-500">{description}</p>
        </div>
        <button className="border-b border-primarycolor text-primarycolor p-3 rounded-md">
          Read
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
