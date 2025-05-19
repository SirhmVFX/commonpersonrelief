import Image from "next/image";
import Link from "next/link";
import { BiCheck } from "react-icons/bi";

export default function WhoWeServe() {
  return (
    <div>
      <div className="md:w-5/6 p-4 mx-auto pt-24 md:pt-32 flex gap-4">
        <div className="w-[40%]">
          <Image
            src="/images/workp.jpg"
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
      <div
        className="md:w-5/6 mx-auto md:h-screen p-4 justify-center py-20 md:pt-32 md:pb-0 md:pl-0 md:pr-0  flex flex-col gap-4"
        id="food-programs"
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium border-b-2 border-gray-200">
          How we plan to feed the hungry
        </h1>
        <p className="text-gray-500 text-base md:text-lg">
          Common person relief is committed to tackling hunger and food
          insecurity in underserved communities. Our initiatives focus on
          providing immediate relief and fostering long-term solutions
        </p>

        <div className=" pt-8 flex flex-col md:flex-row gap-4 md:gap-10 ">
          <div className="flex flex-col justify-between w-full md:w-1/3">
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                  Providing Food Distribution Programs
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We plan to conduct regular food drives to deliver essential
                groceries and nutritious meals to families in need, ensuring no
                one goes hungry.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200 md:block hidden"></div>
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                  Creating Small community kitchens
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Strategically locating community kitchens to provide hot,
                balanced meals to vulnerable groups, including children, the
                elderly, and low-income households.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between  w-full md:w-1/3">
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                  Enhancing Local Partnerships
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                By collaborating with local retailers, farmers and suppliers, we
                source fresh, healthy produce, supporting both local economies
                and food security.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200 md:block hidden"></div>
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                  Creating Food Emergency Response
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                During crises, we deploy rapid-response food relief programs to
                ensure immediate support for affected populations.
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
        className="md:w-5/6 md:h-screen justify-center mx-auto p-4 md:py-16 md:pt-32 md:pb-0 md:pl-0 md:pr-0 flex flex-col gap-4"
        id="economic-empowerment"
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium border-b-2 border-gray-200">
          What we plan for Economic Empowerment
        </h1>

        <p className="text-gray-500 text-base md:text-lg">
          Economic growth starts with empowered individuals. Our programs aim to
          uplift communities by providing the tools they need for sustainable
          success:
        </p>

        <div className=" pt-8  flex flex-col md:flex-row gap-4 md:gap-10 ">
          <div className="flex flex-col justify-between w-full md:w-1/3">
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                  {" "}
                  Providing Skills Development
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Vocational training and workshops equip individuals with
                practical skills for stable employment or entrepreneurship.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200 md:block hidden"></div>
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                  Accessible Microloan Programs
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Access to small loans helps aspiring entrepreneurs, especially
                women and youth, start or expand businesses, driving local
                growth.
              </p>
            </div>
          </div>
          <div className="flex flex-col  gap-8  w-full md:w-1/3">
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                  Job Placement Assistance
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We connect skilled individuals with employment opportunities,
                fostering financial independence and stability.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200 md:block hidden"></div>
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                  Empowering Community Support
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                We&apos;ll provide Mentorship programs and resource networks
                guide participants toward long-term success and resilience.
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
        className="md:w-5/6 md:h-screen justify-center mx-auto p-4 md:py-16 md:pt-32 md:pb-0 md:pl-0 md:pr-0 flex flex-col gap-4"
        id="clothing-drive"
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium border-b-2 border-gray-200">
          Our Clothing Drive Plan
        </h1>
        <p className="text-gray-500 text-base md:text-lg">
          We believe that access to essential clothing is a basic right. Our
          clothing drive initiatives aim to restore dignity and warmth to those
          in need:
        </p>

        <div className=" pt-8 flex flex-col md:flex-row gap-6 md:gap-10 ">
          <div className="flex flex-col justify-between w-full md:w-1/3">
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                  Clothing Donation Drive
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Partnering with individuals and organizations, we collect new
                and gently used clothing to provide for underserved communities.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200 md:block hidden"></div>
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Efficient Distribution</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Our streamlined distribution channels ensure clothing reaches
                the right people efficiently, addressing their immediate needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between  w-full md:w-1/3">
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Sustainability Focus</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                By promoting reuse and reducing waste, we contribute to a more
                sustainable future while addressing pressing needs.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200 md:block hidden"></div>
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                  Creating Community Engagement
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Our outreach programs foster a sense of belonging, encouraging
                communities to come together and support one another.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-[400px] mt-6 md:mt-0">
            <Image
              src="/images/cloth.jpg"
              alt="mission-vision"
              width={1000}
              height={1000}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div
        className="md:w-5/6 md:h-screen justify-center mx-auto p-4 md:py-16 md:pt-32 md:pb-0 md:pl-0 md:pr-0 flex flex-col gap-4"
        id="education-support"
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium border-b-2 border-gray-200">
          Our Education and Skills Training Plan
        </h1>
        <p className="text-gray-500 text-base md:text-lg">
          Education is the foundation for a brighter future. We focus on
          providing quality education and skills training to empower individuals
          and communities:
        </p>

        <div className=" pt-8 flex flex-col md:flex-row gap-6 md:gap-10 ">
          <div className="flex flex-col justify-between gap-8 w-full md:w-1/3">
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Access to Education</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Scholarships and school supplies for children in underserved
                communities ensure no one is left behind.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200 md:block hidden"></div>
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                  Adult Literacy Programs
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Our adult education initiatives help individuals gain essential
                reading and writing skills to improve their opportunities.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8  w-full md:w-1/3">
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                  Technical and Vocational Training
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Hands-on training in high-demand trades equips individuals with
                the skills needed to secure stable employment or start
                businesses.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200 md:block hidden"></div>
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                  Digital Literacy Programs
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Bridging the digital divide, we teach essential tech skills to
                prepare participants for the modern workforce.
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
        className="md:w-5/6 md:h-screen justify-center mx-auto p-4 md:py-16 md:pt-32 md:pb-0 md:pl-0 md:pr-0 flex flex-col gap-4"
        id="emergency-response"
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium border-b-2 border-gray-200">
          Our Emergency Response Plan
        </h1>

        <p className="text-gray-500 text-base md:text-lg">
          When disasters strike, timely action saves lives. Our emergency
          response plan ensures swift and effective support for affected
          communities:
        </p>

        <div className=" py-8 md:pt-16 flex flex-col md:flex-row gap-6 md:gap-10 ">
          <div className="flex flex-col justify-between gap-8 w-full md:w-1/3">
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                  Providing Disaster Relief
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Rapid deployment of food, water, and medical supplies to areas
                impacted by natural disasters or crises.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200 md:block hidden"></div>
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                  Creating Shelter Support
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Temporary housing solutions for displaced families provide
                safety and dignity during emergencies.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8  w-full md:w-1/3">
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">First Aid Assistance</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Mobile medical units and essential care for those in urgent
                need, ensuring emergency crises don&apos;t escalate.
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200 md:block hidden"></div>
            <div className="md:h-[190px] py-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">
                  Providing Preparedness Programs
                </h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Training and resources empower communities to prepare for and
                respond to future emergencies.
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

      {/* <div
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
      </div> */}
    </div>
  );
}
