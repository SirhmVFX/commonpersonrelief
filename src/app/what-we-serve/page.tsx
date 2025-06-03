import Image from "next/image";
import Link from "next/link";

export default function WhoWeServe() {
  return (
    <div>
      <div className="md:w-5/6 py-20 mx-auto pt-24 md:pt-32 flex gap-8">
        <div className="w-[40%]">
          <Image
            src="https://res.cloudinary.com/dkeh0cumc/image/upload/v1748891730/workp_zr2ybk.jpg"
            alt="wort"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[60%] space-y-8">
          <h1 className="text-xl md:text-2xl lg:text-6xl font-medium border-b-2 border-gray-200">
            Work Ready Transition Program (WORT)
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            The Work Ready Transition Program (WORT) is a comprehensive
            initiative designed to empower individuals and communities by
            providing essential resources, skills training, and support to help
            them transition into stable employment or entrepreneurship. Our
            program is tailored to address the unique needs of vulnerable
            populations, ensuring they have the tools and knowledge to succeed
            in the workforce.
          </p>

          <Link href="/what-we-serve/wort" className="text-primarycolor">
            Read More
          </Link>
        </div>
      </div>
      
    </div>
  );
}
