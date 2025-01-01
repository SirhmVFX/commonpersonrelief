import Image from "next/image";
import { BiCheck } from "react-icons/bi";

export default function WhoWeServe() {
  return (
    <div>
      <div
        className="w-5/6 mx-auto md:h-screen justify-center py-20 md:pt-32 flex flex-col gap-4"
        id="food-programs"
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium border-b-2 border-gray-200">
         How we plan to feed the hungry 
        </h1>
        <p className="text-gray-500 text-base md:text-lg">Common person relief is committed to tackling hunger and food insecurity in underserved communities. Our initiatives focus on providing immediate relief and fostering long-term solutions</p>

        <div className=" pt-8 flex flex-col md:flex-row gap-6 md:gap-10 ">
          <div className="flex flex-col justify-between w-full md:w-1/3">
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                Providing  Food Distribution Programs
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
              We plan to conduct regular food drives to deliver essential groceries and nutritious meals to families in need, ensuring no one goes hungry.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Creating Small community kitchens</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
              Strategically locating community kitchens to provide hot, balanced meals to vulnerable groups, including children, the elderly, and low-income households.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between  w-full md:w-1/3">
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Enhancing Local Partnerships</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
              By collaborating with local retailers, farmers and suppliers, we source fresh, healthy produce, supporting both local economies and food security.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Creating Food Emergency Response</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
              During crises, we deploy rapid-response food relief programs to ensure immediate support for affected populations.
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
        className="w-5/6 md:h-screen justify-center mx-auto py-16 md:pt-32 flex flex-col gap-4"
        id="economic-empowerment"
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium border-b-2 border-gray-200">
          What we plan for Economic Empowerment
        </h1>

        <p className="text-gray-500 text-base md:text-lg">Economic growth starts with empowered individuals. Our programs aim to uplift communities by providing the tools they need for sustainable success:</p>

        <div className=" pt-8  flex flex-col md:flex-row gap-6 md:gap-10 ">
          <div className="flex flex-col justify-between w-full md:w-1/3">
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium"> Providing Skills Development</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
              Vocational training and workshops equip individuals with practical skills for stable employment or entrepreneurship.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Accessible Microloan Programs</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
              Access to small loans helps aspiring entrepreneurs, especially women and youth, start or expand businesses, driving local growth.
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
              We connect skilled individuals with employment opportunities, fostering financial independence and stability.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Empowering Community Support</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We&apos;ll provide Mentorship programs and resource networks guide participants toward long-term success and resilience.
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
        className="w-5/6 md:h-screen justify-center mx-auto py-16 md:pt-32 flex flex-col gap-4"
        id="clothing-drive"
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium border-b-2 border-gray-200">
          Our Clothing Drive Plan
        </h1>
        <p className="text-gray-500 text-base md:text-lg">We believe that access to essential clothing is a basic right. Our clothing drive initiatives aim to restore dignity and warmth to those in need:</p>

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
        className="w-5/6 md:h-screen justify-center mx-auto py-16 md:pt-32 flex flex-col gap-4"
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
        className="w-5/6 md:h-screen justify-center mx-auto py-8 md:pt-32 flex flex-col gap-4"
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
        className="w-5/6 mx-auto md:h-screen justify-center py-8 md:pt-32 flex flex-col gap-4"
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
