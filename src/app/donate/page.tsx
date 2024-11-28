"use client"
import { useState } from "react";
import Image from "next/image";

export default function Donate() {
  const [activeTab, setActiveTab] = useState("onetime");
  return (
    <div>
      <div className="w-full h-screen">
        <div className="w-full h-full relative">
          <Image
            src="/images/hero2.png"
            alt="donate"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="md:text-7xl text-xl font-bold mb-4">
              Support a Life Today
            </h1>
            <p className="mb-4">
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
      <div className="w-5/6 mx-auto py-16 md:py-32 flex flex-col gap-4">
        <h1>Where Your Donation Goes:</h1>
        <div className="grid md:grid-cols-2 gap-8 pt-10">
          <div className="flex flex-col gap-4 p-4 bg-gray-50">
            <h1 className="text-2xl md:text-3xl text-primarycolor font-medium">01</h1>
            <h1 className="text-2xl md:text-3xl font-medium">Feeding programs for underprivileged communities.</h1>
            <p className="text-sm md:text-lg text-gray-500">
              Providing nutritious meals to combat hunger and improve the
              well-being of vulnerable individuals and families.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-4 bg-gray-50">
            <h1 className="text-2xl md:text-3xl text-primarycolor font-medium">02</h1>
            <h1 className="text-2xl md:text-3xl font-medium">Free education for children in need.</h1>
            <p className="text-sm md:text-lg text-gray-500">
            Offering access to quality education at no cost, ensuring every child has the opportunity to learn and thrive.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-4 bg-gray-50">
            <h1 className="text-2xl md:text-3xl text-primarycolor font-medium">03</h1>
            <h1 className="text-2xl md:text-3xl font-medium">Vocational training and economic empowerment initiatives.</h1>
            <p className="text-sm md:text-lg text-gray-500">
            Equipping individuals with skills and resources to achieve financial independence and create sustainable livelihoods.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-4 bg-gray-50">
            <h1 className="text-2xl md:text-3xl text-primarycolor font-medium">04</h1>
            <h1 className="text-2xl md:text-3xl font-medium">Emergency relief initiatives.</h1>
            <p className="text-sm md:text-lg text-gray-500">
            Delivering essential medical care and timely support during crises to save lives and build healthier communities.
            </p>
          </div>
        </div>
      </div>

      <div className="w-5/6 mx-auto py-16 md:py-32 flex flex-col gap-4">
     <div className="flex flex-col items-center gap-4 ">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium">Donate one</h1>
      <p className="text-gray-500 text-base md:text-lg">Donate now to support our causes and make a difference in the lives of those in need.</p>
     </div>




<div className="w-5/6 mx-auto py-16 md:py-32 flex flex-col gap-4">
  <div className="flex flex-col items-center gap-4">
    <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium">Donate now</h1>
    <p className="text-gray-500 text-base md:text-lg">Donate now to support our causes and make a difference in the lives of those in need.</p>
  </div>
  
  <div className="mt-8">
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex justify-center space-x-8" aria-label="Tabs">
        <button
          onClick={() => setActiveTab("onetime")}
          className={`${
            activeTab === "onetime"
              ? "border-primarycolor text-primarycolor"
              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
          } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
        >
          One-time Donation
        </button>
        <button
          onClick={() => setActiveTab("monthly")}
          className={`${
            activeTab === "monthly"
              ? "border-primarycolor text-primarycolor"
              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
          } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
        >
          Monthly Donation
        </button>
        <button
          onClick={() => setActiveTab("corporate")}
          className={`${
            activeTab === "corporate"
              ? "border-primarycolor text-primarycolor"
              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
          } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
        >
          Corporate Donation
        </button>
      </nav>
    </div>
    
    <div className="mt-8">
      {activeTab === "onetime" && (
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-4">Make a One-time Donation</h2>
          <p className="text-gray-600">Your one-time gift can make an immediate impact.</p>
        </div>
      )}
      {activeTab === "monthly" && (
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-4">Become a Monthly Donor</h2>
          <p className="text-gray-600">Join our community of monthly donors and create lasting change.</p>
        </div>
      )}
      {activeTab === "corporate" && (
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-4">Corporate Partnerships</h2>
          <p className="text-gray-600">Partner with us to make a significant impact in communities.</p>
        </div>
      )}
    </div>
  </div>
</div>
      </div>
    </div>
  );
}
