import Image from "next/image";
import { BiCheck } from "react-icons/bi";

export default function WhoWeServe() {
  return (
    <div>
      <div
        className="w-5/6 mx-auto py-20 md:pt-32 flex flex-col gap-4"
        id="food-programs"
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium border-b-2 border-gray-200">
          Our Plan to Feed the Hungry
        </h1>

        <div className=" pt-8 flex flex-col md:flex-row gap-6 md:gap-10 ">
          <div className="flex flex-col justify-between w-full md:w-1/3">
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                  Food Distribution Programs
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We’ll provide essential food supplies to underserved communities
                through regular distribution drives, ensuring that families have
                access to nutritious meals.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Community Kitchens</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We plan to set up community kitchens in strategic locations to
                offer hot, balanced meals to the most vulnerable, including
                children, the elderly, and low-income families.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between  w-full md:w-1/3">
            <div>
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Local Partnerships</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                By partnering with local farmers and suppliers, we aim to source
                fresh produce and reduce food insecurity, supporting local
                economies and communities.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div>
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Emergency Response</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                In times of crisis, our rapid-response food relief programs will
                ensure that the most affected populations receive immediate
                support.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-[400px] mt-6 md:mt-0">
            <Image
              src="/images/food.jpeg"
              alt="mission-vision"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div
        className="w-5/6 mx-auto py-16 md:pt-32 flex flex-col gap-4"
        id="economic-empowerment"
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium border-b-2 border-gray-200">
          Our Plan for Economic Empowerment
        </h1>

        <div className=" pt-8  flex flex-col md:flex-row gap-6 md:gap-10 ">
          <div className="flex flex-col justify-between w-full md:w-1/3">
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Skills Development</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We will offer vocational training and workshops, equipping
                individuals with valuable skills for sustainable employment or
                entrepreneurship.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Microloan Programs</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Through small loans and financial support, we will help
                individuals, particularly women and youth, start or expand their
                own businesses.
              </p>
            </div>
          </div>
          <div className="flex flex-col  gap-8  w-full md:w-1/3">
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                  Job Placement Assistance
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We will connect trained individuals with job opportunities,
                ensuring they have a pathway to stable employment and financial
                independence.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Community Support</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Our community networks will provide ongoing mentorship,
                resources, and guidance to ensure long-term success in economic
                empowerment efforts.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-[400px] mt-6 md:mt-0">
            <Image
              src="/images/im.jpg"
              alt="mission-vision"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div
        className="w-5/6 mx-auto py-16 md:pt-32 flex flex-col gap-4"
        id="clothing-drive"
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium border-b-2 border-gray-200">
          Our Plan for Clothing Drive
        </h1>

        <div className=" pt-8 flex flex-col md:flex-row gap-6 md:gap-10 ">
          <div className="flex flex-col justify-between w-full md:w-1/3">
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Clothing Drive</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We will provide clothing to the needy, ensuring they have access
                to essential clothing items.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Donation Collection</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We will collect donations from individuals and organizations to
                ensure a steady supply of clothing for distribution.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between  w-full md:w-1/3">
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Distribution</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We will distribute the collected clothing to the needy, ensuring
                they have access to essential clothing items.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Community Support</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Our community networks will provide ongoing mentorship,
                resources, and guidance to ensure long-term success in economic
                empowerment efforts.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-[400px] mt-6 md:mt-0">
            <Image
              src="/images/cloth.jpg"
              alt="mission-vision"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div
        className="w-5/6 mx-auto py-16 md:pt-32 flex flex-col gap-4"
        id="education-support"
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium border-b-2 border-gray-200">
          Our Plan for Education and Skills Training
        </h1>

        <div className=" pt-8 flex flex-col md:flex-row gap-6 md:gap-10 ">
          <div className="flex flex-col justify-between gap-8 w-full md:w-1/3">
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Education</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We will provide education to the needy, ensuring they have
                access to essential education items.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Skills Training</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We will provide skills training to the needy, ensuring they have
                access to essential skills for sustainable employment or
                entrepreneurship.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8  w-full md:w-1/3">
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                  Job Placement Assistance
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We will connect trained individuals with job opportunities,
                ensuring they have a pathway to stable employment and financial
                independence.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Tech Training</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We will provide tech training to the needy, ensuring they have
                access to essential tech skills for sustainable employment or
                entrepreneurship.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-[400px] mt-6 md:mt-0">
            <Image
              src="/images/wee2.png"
              alt="mission-vision"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div
        className="w-5/6 mx-auto py-8 md:pt-32 flex flex-col gap-4"
        id="emergency-response"
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium border-b-2 border-gray-200">
          Our Plan for Emergency Response
        </h1>

        <div className=" py-8 md:pt-16 flex flex-col md:flex-row gap-6 md:gap-10 ">
          <div className="flex flex-col justify-between gap-8 w-full md:w-1/3">
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Emergency Response</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We will provide emergency response to the needy, ensuring they
                have access to essential emergency response items.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Disaster Preparedness</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We will provide disaster preparedness to the needy, ensuring
                they have access to essential disaster preparedness items.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8  w-full md:w-1/3">
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Community Support</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Our community networks will provide ongoing mentorship,
                resources, and guidance to ensure long-term success in emergency
                response efforts.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Tech Training</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We will provide tech training to the needy, ensuring they have
                access to essential tech skills for sustainable employment or
                entrepreneurship.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-[400px] mt-6 md:mt-0">
            <Image
              src="/images/emerg.jpg"
              alt="mission-vision"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div
        className="w-5/6 mx-auto py-8 md:pt-32 flex flex-col gap-4"
        id="emergency-response"
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium border-b-2 border-gray-200">
          Our Plan for Counselling Support
        </h1>

        <div className=" pt-8  flex flex-col md:flex-row gap-6 md:gap-10 ">
          <div className="flex flex-col justify-between gap-4 w-full md:w-1/3">
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Counselling</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We will provide counselling to the needy, ensuring they have
                access to essential counselling items.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Mental Health Support</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We will provide mental health support to the needy, ensuring
                they have access to essential mental health support items.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4  w-full md:w-1/3">
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Community Support</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Our community networks will provide ongoing mentorship,
                resources, and guidance to ensure long-term success in emergency
                response efforts.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">24/7 Call Support</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We will provide tech training to the needy, ensuring they have
                access to essential tech skills for sustainable employment or
                entrepreneurship.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-[400px] mt-6 md:mt-0">
            <Image
              src="/images/we.jpg"
              alt="mission-vision"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
