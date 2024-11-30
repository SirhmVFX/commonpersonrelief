import CtaPage from "@/components/Cta.page";
import Image from "next/image";
import { CgExpand } from "react-icons/cg";
import { FaHand } from "react-icons/fa6";
import { GiArm, GiHumanTarget } from "react-icons/gi";

export default function Initiatives() {
  return (
    <div>
      <div className="w-5/6 mx-auto py-16 md:py-32">
        <div className="w-full h-[250px] md:h-[400px]">
          <Image
            src="/images/init.jpeg"
            alt="initiatives"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium py-6 md:py-10">
              Hope for a peaceful world
            </h1>
          </div>
          <p className="text-gray-500 text-base md:text-lg py-6 w-full md:w-1/2">
            We believe that challenges like those faced in Nigeria should not
            exist anywhere in the world. Lasting change occurs in every
            community when people have access to essential services, such as
            quality healthcare, education, economic empowerment, and the support
            needed to break free from poverty. When these foundations are
            well-structured and effectively implemented, they not only
            strengthen communities but also inspire individuals to support and
            care for one another. At Common Person Relief, our founding members,
            along with the support of our dedicated volunteers, partners, and
            compassionate individuals, are working tirelessly to make this
            vision a reality—investing in lives and creating lasting impact,
            year after year.
          </p>
        </div>
      </div>

      <div className="w-5/6 mx-auto py-8 md:py-10">
        <div className="flex flex-col gap-4 py-4 border-b border-gray-200">
          <p className="text-primarycolor text-sm">why choose us</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium">
            Creative and unique solutions
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            We adhere to the highest standards of quality in all our products
            and services. From design and development to manufacturing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-6 md:py-10">
          <div className="bg-gray-50 p-4 md:p-8 flex gap-4">
            <div className="w-6 h-6 p-1 bg-primarycolor rounded-full flex-shrink-0">
              <CgExpand className="text-white rounded-full" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-medium">
                School Supplies
              </h1>
              <p className="text-gray-500 text-sm md:text-base">
                We distribute free school supplies to under privileged children
                in public schools
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 md:p-8 flex gap-4">
            <div className="w-6 h-6 p-1 bg-primarycolor rounded-full flex-shrink-0">
              <FaHand className="text-white rounded-full" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-medium">Free School</h1>
              <p className="text-gray-500 text-sm md:text-base">
                We established free nursery & primary with the aim to offer free
                education to poor children. 18.5 million children age 5-14 year
                are not in school. Support us to enroll them in school & build
                classroom blocks.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 md:p-8 flex gap-4">
            <div className="w-6 h-6 p-1 bg-primarycolor rounded-full flex-shrink-0">
              <GiArm className="text-white rounded-full" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-medium">
                Economic Empowerment
              </h1>
              <p className="text-gray-500 text-sm md:text-base">
                Nigeria unemployment rate jump to 35 percent in 2021. Support us
                to empower unemployed youth and women to learn any skill of
                their choice.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 md:p-8 flex gap-4">
            <div className="w-6 h-6 p-1 bg-primarycolor rounded-full flex-shrink-0">
              <GiHumanTarget className="text-white rounded-full" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-medium">
                Feeding the Hungry
              </h1>
              <p className="text-gray-500 text-sm md:text-base">
                With the number of poor Nigerians rising daily, we need your
                support to start feeding the hungry. Acts of generosity can
                alleviate people suffering from hunger. ​
              </p>
            </div>
          </div>
        </div>
      </div>

      <CtaPage />
    </div>
  );
}
