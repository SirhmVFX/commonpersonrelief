"use client";
import { useState } from "react";
import Image from "next/image";

import Link from "next/link";

export default function Donate() {
  const [activeTab, setActiveTab] = useState("onetime");
  return (
    <div>
      <div className="w-full h-[50vh] md:h-[90vh] pt-16">
        <div className="w-full h-full relative">
          <Image
            src="/images/kd.jpg"
            alt="donate"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
          <div className="absolute top-32 left-10 botton-10 right-10 md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 text-white text-center">
            <h1 className="md:text-7xl text-3xl font-bold ">
              Support a Life Today
            </h1>
            <p className="mb-4 text-xs md:text-base">
              Your donation to Common Person Relief has the power to transform
              lives. Together, we can provide food for the hungry, education for
              underprivileged children, and economic opportunities for
              struggling families. Every contribution, no matter the size, helps
              us create lasting change in the lives of those who need it most.
            </p>
            <button className="bg-primarycolor text-white px-6 py-2 rounded-md  transition">
              Donate Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-5/6 mx-auto md:py-32 flex flex-col gap-4 mt-8">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-medium text-center">Where Your Donation Goes</h1>
        <div className="grid md:grid-cols-2 gap-8 ">
          <div className="flex flex-col gap-4 p-4 bg-gray-50">
            <h1 className="text-2xl md:text-3xl text-primarycolor font-medium">
              01
            </h1>
            <h1 className="text-2xl md:text-3xl font-medium">
              Feeding programs for underprivileged communities.
            </h1>
            <p className="text-sm md:text-lg text-gray-500">
              Providing nutritious meals to combat hunger and improve the
              well-being of vulnerable individuals and families.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-4 bg-gray-50">
            <h1 className="text-2xl md:text-3xl text-primarycolor font-medium">
              02
            </h1>
            <h1 className="text-2xl md:text-3xl font-medium">
              Free education for children in need.
            </h1>
            <p className="text-sm md:text-lg text-gray-500">
              Offering access to quality education at no cost, ensuring every
              child has the opportunity to learn and thrive.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-4 bg-gray-50">
            <h1 className="text-2xl md:text-3xl text-primarycolor font-medium">
              03
            </h1>
            <h1 className="text-2xl md:text-3xl font-medium">
              Vocational training and economic empowerment initiatives.
            </h1>
            <p className="text-sm md:text-lg text-gray-500">
              Equipping individuals with skills and resources to achieve
              financial independence and create sustainable livelihoods.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-4 bg-gray-50">
            <h1 className="text-2xl md:text-3xl text-primarycolor font-medium">
              04
            </h1>
            <h1 className="text-2xl md:text-3xl font-medium">
              Emergency relief initiatives.
            </h1>
            <p className="text-sm md:text-lg text-gray-500">
              Delivering essential medical care and timely support during crises
              to save lives and build healthier communities.
            </p>
          </div>
        </div>
      </div>

      <div className="w-5/6 mx-auto flex flex-col gap-4">
        <div className=" py-16 md:py-20 flex flex-col gap-4">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-medium">
              Donate now
            </h1>
            <p className="text-gray-500 text-center text-base md:text-lg">
              Donate now to support our causes and make a difference in the
              lives of those in need.
            </p>
          </div>

          <div className="">
            <div className="border-b border-gray-200">
              <nav
                className="flex gap-4 justify-center"
                aria-label="Tabs"
              >
                <button
                  onClick={() => setActiveTab("onetime")}
                  className={`${
                    activeTab === "onetime"
                      ? "border-primarycolor text-primarycolor"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  } whitespace-nowrap border-b-2 text-xs py-4 px-1 md:text-xl font-medium `}
                >
                  One-time Donation
                </button>
                <button
                  onClick={() => setActiveTab("monthly")}
                  className={`${
                    activeTab === "monthly"
                      ? "border-primarycolor text-primarycolor"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  } whitespace-nowrap border-b-2 text-xs py-4 px-1 md:text-xl font-medium`}
                >
                  Monthly Support / Partners
                </button>
                
              </nav>
            </div>

            <div className="mt-8">
              {activeTab === "onetime" && (
                <div>
                  <div className="text-center">
                    <h2 className="text-2xl font-medium">
                      Make a One-time Donation
                    </h2>
                    <p className="text-gray-600">
                      Your one-time gift can make an immediate impact.
                    </p>
                  </div>

                  <form
                    action=""
                    className="flex items-start flex-col gap-4 max-w-2xl mx-auto"
                  >
                    <div className="flex flex-col gap-4 w-full">
                      <label htmlFor="">
                        How much would you like to donate?
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent p-4 rounded-md border border-gray-300"
                        placeholder="Amount"
                      />
                    </div>
                    <div className="p-6 border w-full border-gray-300 rounded-lg flex flex-col gap-4">
                      <div className="flex flex-col gap-4">
                        <label htmlFor="">Card Number</label>
                        <input
                          type="text"
                          className="w-full bg-transparent p-4 rounded-md border border-gray-300"
                          placeholder="0123 4567 8901 2345"
                        />
                        <div></div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex flex-col gap-4 w-1/2">
                          <label htmlFor="">Date</label>
                          <input
                            type="text"
                            className="w-full bg-transparent p-4 rounded-md border border-gray-300"
                            placeholder="01/23"
                          />
                        </div>
                        <div className="flex flex-col gap-4 w-1/2">
                          <label htmlFor="">Cvv</label>
                          <input
                            type="text"
                            className="w-full bg-transparent p-4 rounded-md border border-gray-300"
                            placeholder="123"
                          />
                        </div>
                      </div>

                      <p className="text-gray-600">
                        By providing your card information, you allow
                        Common Person Relief. to charge your card for future payments in
                        accordance with their terms.
                      </p>
                    </div>

                    <div className="w-full flex flex-col gap-4">
                      <label htmlFor="">Name</label>
                      <input
                        type="text"
                        className="w-full bg-transparent p-4 rounded-md border border-gray-300"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="flex gap-4 w-full">
                      <div className="flex flex-col gap-4 w-1/2">
                        <label htmlFor="">Phone number</label>
                        <input
                          type="text"
                          className="w-full bg-transparent p-4 rounded-md border border-gray-300"
                        />
                      </div>
                      <div className="flex flex-col gap-4 w-1/2">
                        <label htmlFor="">Email Address</label>
                        <input
                          type="email"
                          name=""
                          id=""
                          className="w-full bg-transparent p-4 rounded-md border border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                      <label htmlFor="">Country</label>
                      <input
                        type="text"
                        className="w-full bg-transparent p-4 rounded-md border border-gray-300"
                      />
                    </div>

                    <p className="text-gray-600">
                      I agree to the Terms of Use, Refund Policy, and Privacy
                      Policy.
                    </p>
                    <button className="bg-primarycolor text-white p-2 rounded-md flex items-center gap-2">
                      Donate
                    </button>
                  </form>
                </div>
              )}
              {activeTab === "monthly" && (
                <div className="">
                  <div className="text-center flex flex-col gap-4 items-center">
                    <h2 className="text-2xl font-medium mb-4">
                      Monthly Support or Partner with us
                    </h2>
                    <p className="text-gray-600">
                      Join our community of consistent givers who create
                      sustainable change.
                    </p>
                    <Link href="/contact">
                    <button className="bg-primarycolor text-white p-2 rounded-md flex items-center gap-2">
                     Send us a Message
                    </button>
                  </Link>
                  </div>

                  
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
