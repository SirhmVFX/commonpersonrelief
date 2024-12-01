"use client";
import { useState } from "react";
import Image from "next/image";
import { BiBrush, BiBulb } from "react-icons/bi";
import { FaRibbon } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

export default function Donate() {
  const [activeTab, setActiveTab] = useState("onetime");
  return (
    <div>
      <div className="w-full h-[50vh]">
        <div className="w-full h-full relative">
          <Image
            src="/images/hero2.png"
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

      <div className="w-5/6 mx-auto md:py-32 flex flex-col gap-4">
        <div className=" py-16 md:py-32 flex flex-col gap-4">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium">
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
                className="flex gap-2 justify-center"
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
                  Monthly Support
                </button>
                <button
                  onClick={() => setActiveTab("corporate")}
                  className={`${
                    activeTab === "corporate"
                      ? "border-primarycolor text-primarycolor"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  } whitespace-nowrap border-b-2 text-xs py-4 px-1 md:text-xl font-medium`}
                >
                  Partner with us
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
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="p-6 border w-full border-gray-300 rounded-lg flex flex-col gap-4">
                      <div className="flex flex-col gap-4">
                        <label htmlFor="">Card Number</label>
                        <input
                          type="text"
                          className="w-full bg-transparent p-4 rounded-md border border-gray-300"
                          placeholder="Your Name"
                        />
                        <div></div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex flex-col gap-4 w-1/2">
                          <label htmlFor="">Date</label>
                          <input
                            type="text"
                            className="w-full bg-transparent p-4 rounded-md border border-gray-300"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="flex flex-col gap-4 w-1/2">
                          <label htmlFor="">Cvv</label>
                          <input
                            type="text"
                            className="w-full bg-transparent p-4 rounded-md border border-gray-300"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>

                      <p className="text-gray-600">
                        By providing your card information, you allow
                        ReaveSuite. to charge your card for future payments in
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
                <div>
                  <div className="text-center">
                    <h2 className="text-2xl font-medium mb-4">
                      Monthly Support
                    </h2>
                    <p className="text-gray-600">
                      Join our community of consistent givers who create
                      sustainable change.
                    </p>
                  </div>

                  <form className="mt-8 flex flex-col gap-6 max-w-2xl mx-auto">
                    <div className="flex flex-col gap-4">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-transparent p-4 rounded-md border border-gray-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="flex gap-4">
                      <div className="flex flex-col gap-4 w-1/2">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full bg-transparent p-4 rounded-md border border-gray-300"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="flex flex-col gap-4 w-1/2">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full bg-transparent p-4 rounded-md border border-gray-300"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <label htmlFor="message">Message (Optional)</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full bg-transparent p-4 rounded-md border border-gray-300"
                        placeholder="Share why you'd like to join our monthly giving community..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="bg-primarycolor text-white p-4 rounded-md hover:bg-opacity-90 transition"
                    >
                      Join Monthly Giving Community
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you&apos;ll be invited to join
                      our community of monthly donors. We&apos;ll contact you
                      with more information about our monthly giving programs.
                    </p>
                  </form>
                </div>
              )}
              {activeTab === "corporate" && (
                <div>
                  <div className="text-center">
                    <h2 className="text-2xl font-medium mb-4">
                      Partner with Us
                    </h2>
                    <p className="text-gray-600">
                      Become a corporate or community partner
                    </p>
                  </div>

                  <div className="md:flex gap-4 py-10">
                    <div className="md:w-2/3 mt-8">
                      <form className="max-w-2xl mx-auto flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                          <label htmlFor="corp-name">Full Name</label>
                          <input
                            type="text"
                            id="corp-name"
                            className="w-full bg-transparent p-4 rounded-md border border-gray-300"
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div className="flex gap-4">
                          <div className="flex flex-col gap-4 w-1/2">
                            <label htmlFor="corp-phone">Phone Number</label>
                            <input
                              type="tel"
                              id="corp-phone"
                              className="w-full bg-transparent p-4 rounded-md border border-gray-300"
                              placeholder="Enter your phone number"
                            />
                          </div>
                          <div className="flex flex-col gap-4 w-1/2">
                            <label htmlFor="corp-email">Email Address</label>
                            <input
                              type="email"
                              id="corp-email"
                              className="w-full bg-transparent p-4 rounded-md border border-gray-300"
                              placeholder="Enter your email address"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-4">
                          <label htmlFor="corp-message">
                            Message (Optional)
                          </label>
                          <textarea
                            id="corp-message"
                            rows={4}
                            className="w-full bg-transparent p-4 rounded-md border border-gray-300"
                            placeholder="Tell us about your organization and how you'd like to partner with us..."
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          className="bg-primarycolor text-white p-4 rounded-md hover:bg-opacity-90 transition flex items-center justify-center gap-2"
                        >
                          <IoCall className="text-xl" />
                          Request Partnership Call
                        </button>

                        <p className="text-sm text-gray-500 text-center">
                          Our team will reach out to schedule a call to discuss
                          partnership opportunities that align with your
                          organization&apos;s goals.
                        </p>
                      </form>
                    </div>
                    <div className=" flex flex-col gap-4 md:w-1/3 pt-4">
                      <div className="flex items-start gap-4 p-3 md:p-4 border border-gray-200">
                        <div className="bg-primarycolor/10 rounded-full p-3 md:p-4 flex-shrink-0">
                          <BiBrush className="text-primarycolor text-xl md:text-2xl" />
                        </div>
                        <div className="flex flex-col gap-1 md:gap-2">
                          <h1 className="text-md md:text-xl font-medium">
                            Amplify Impact
                          </h1>
                          <p className="text-gray-500 text-xs md:text-sm">
                            By partnering with us, you can help extend the reach
                            of vital programs, creating a larger and more
                            meaningful impact in underserved communities across
                            Africa.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-3 md:p-4 border border-gray-200">
                        <div className="bg-primarycolor/10 rounded-full p-3 md:p-4 flex-shrink-0">
                          <FaRibbon className="text-primarycolor text-xl md:text-2xl" />
                        </div>
                        <div className="flex flex-col gap-1 md:gap-2">
                          <h1 className="text-md md:text-xl font-medium">
                            Shared Vision for Change
                          </h1>
                          <p className="text-gray-500 text-xs md:text-sm">
                            Our mission to empower children, youth, and women
                            aligns with organizations and individuals committed
                            to creating a better, more inclusive world.
                            Together, we can achieve more.
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
                            We focus on long-term, sustainable initiatives in
                            education, healthcare, and economic empowerment,
                            ensuring that the support provided today will
                            continue to benefit communities for years to come.
                          </p>
                        </div>
                      </div>
                    </div>
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
