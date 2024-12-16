import Image from "next/image";
import Link from "next/link";
import { BiBrush, BiBulb} from "react-icons/bi";
import { FaRibbon } from "react-icons/fa";

export default function Partners() {
  return (
    <>
    <div className="w-5/6 mx-auto py-8 md:py-16 lg:py-32 flex flex-col items-center gap-8">
      <div className="w-full h-[300px] md:h-[400px] mb-8 md:mb-0 relative rounded-lg">
        <Image
          src="/images/pa.jpg"
          alt="partner"
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 rounded-lg bg-black opacity-50"></div>
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:text-xl lg:text-3xl w-3/4 text-center font-medium">We are excited to collaborate with dedicated partners who share our vision and mission. Join us in making a lasting impact in communities across the globe.</h1>

      </div>

      <h1 className=" border rounded-full p-2 md:text-xl lg:text-xl text-primarycolor text-center">A few reasons why you should collaborate with us</h1>

      <div className="w-full flex md:flex-row flex-col gap-4">
        <div className="flex items-start gap-4 p-3 md:p-4 border border-gray-200">
          <div className="bg-primarycolor/10 rounded-full p-3 md:p-4 flex-shrink-0">
            <BiBrush className="text-primarycolor text-xl md:text-2xl" />
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <h1 className="text-xl md:text-2xl font-medium">Amplify Impact</h1>
            <p className="text-gray-500 text-xs md:text-sm">
              By partnering with us, you can help extend the reach of vital
              programs, creating a larger and more meaningful impact in
              underserved communities across Africa.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-3 md:p-4 border border-gray-200">
          <div className="bg-primarycolor/10 rounded-full p-3 md:p-4 flex-shrink-0">
            <FaRibbon className="text-primarycolor text-xl md:text-2xl" />
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <h1 className="text-xl md:text-2xl font-medium">
              Shared Vision for Change
            </h1>
            <p className="text-gray-500 text-xs md:text-sm">
              Our mission to empower children, youth, and women aligns with
              organizations and individuals committed to creating a better, more
              inclusive world. Together, we can achieve more.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-3 md:p-4 border border-gray-200">
          <div className="bg-primarycolor/10 rounded-full p-3 md:p-4 flex-shrink-0">
            <BiBulb className="text-primarycolor text-xl md:text-2xl" />
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <h1 className="text-xl md:text-2xl font-medium">
              Sustainable Solutions
            </h1>
            <p className="text-gray-500 text-xs md:text-sm">
              We focus on long-term, sustainable initiatives in education,
              healthcare, and economic empowerment, ensuring that the support
              provided today will continue to benefit communities for years to
              come.
            </p>
          </div>
        </div>
        {/* <button className="bg-primarycolor text-white rounded-md flex items-center gap-2 justify-center p-3 md:p-4 mt-2">
          <span className="text-sm md:text-base">Book a free call</span>
          <IoCall className="text-white text-xl md:text-2xl" />
        </button> */}
      </div>

      
    </div>

    <div className=" w-5/6 mx-auto  md:h-[50vh] justify-center md:w-2/4 flex flex-col items-center mb-8 md:mb-0 pt-12 md:pt-0">
        <h1 className="text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl font-medium">
          Are you ready to join Us in Creating Lasting Impact
        </h1>
        <p className="text-gray-500 text-xs text-center md:text-sm py-4 md:py-6">
          Partner with us to provide essential services, foster community
          growth, and help build a brighter future for those who need it most.
          Let&apos;s make a difference, together.
        </p>
        <Link href="/contact">
          <button className="bg-primarycolor text-white rounded-md flex items-center gap-2 justify-center p-3 md:p-4 mt-2">
            <span className="text-sm md:text-base">Contact us</span>
           
          </button>
        </Link>
      </div>

    </>
  );
}
