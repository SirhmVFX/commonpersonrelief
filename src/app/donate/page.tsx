"use client";
import { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { BiArrowToTop, BiSend, BiWallet } from "react-icons/bi";

export default function Donate() {
  const [activeTab, setActiveTab] = useState("onetime");
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   amount: "",
  //   phone: "",
  //   country: "",
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const mailtoLink = `mailto:donations@commonpersonrelief.org?subject=Donation%20Submission&body=Name:%20${encodeURIComponent(
  //     formData.name
  //   )}%0AEmail:%20${encodeURIComponent(
  //     formData.email
  //   )}%0AAmount:%20$${encodeURIComponent(formData.amount)}`;

  //   window.location.href = mailtoLink;
  // };

  return (
    <div>
      <div className="w-full h-[70vh] md:h-[70vh] flex flex-col items-center justify-center pt-[80px] p-4">
        <div className="w-full h-full relative ">
          <Image
            src="https://res.cloudinary.com/dkeh0cumc/image/upload/v1748891900/2_pkacld.jpg"
            alt="donate"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
          <div className="absolute  left-10 bottom-10 right-10 md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 text-white md:text-center text-left ">
            <h1 className="md:text-7xl text-4xl my-2 font-bold ">
              Support a Life Today
            </h1>
            <p className="mb-4 text-xs md:text-base">
              Your donation to Common Person Relief has the power to transform
              lives. Together, we can provide food for the hungry, education for
              underprivileged children, and economic opportunities for
              struggling families. Every contribution, no matter the size, helps
              us create lasting change in the lives of those who need it most.
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-5/6 mx-auto p-4 md:py-32 flex flex-col gap-4 mt-8">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-medium text-center">
          Where Your Donation Goes
        </h1>
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

      <div className="md:w-5/6 mx-auto flex p-4 flex-col gap-4">
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
              <nav className="flex gap-4 justify-center" aria-label="Tabs">
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
                <div className="md:w-3/5 mx-auto md:p-[50px] p-5 border-8 border-gray-50/50 rounded-3xl flex flex-col justify-center md:items-center">
                  <div className="flex md:justify-center">
                    <div className="bg-primarycolor  flex justify-center items-center w-[50px] h-[50px] rounded-full">
                      <BiArrowToTop className="text-white w-6 h-6" />
                    </div>
                    <div className="bg-white  flex justify-center items-center w-[50px] h-[50px] rounded-full">
                      <BiWallet className="text-black w-6 h-6" />
                    </div>

                    <div className="bg-gray-700  flex justify-center items-center w-[50px] h-[50px] rounded-full">
                      <BiSend className="text-white w-6 h-6 -rotate-45" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 md:text-center my-4">
                    <h1 className="text-3xl font-bold">
                      🌟 Make a Difference Today!
                    </h1>
                    <p className="text-gray-500">
                      Your generosity has the power to change lives. By donating
                      to Common Person Relief, you help provide food, clothing,
                      education, and healthcare to underprivileged communities.
                    </p>
                    <p className="text-gray-500">
                      Together, we can create a brighter future for those in
                      need. Every contribution, big or small, brings hope and a
                      chance for a better tomorrow.
                    </p>
                  </div>

                  <Link href={"https://buy.stripe.com/4gw5mS6wTa7RaM8fYY"} className="px-6 py-4 w-fit bg-primarycolor border-2 border-primarycolor/60 text-white rounded-full">Donate</Link>
                </div>
              )}
              {activeTab === "monthly" && (
                <div className="">
                  <div className="md:text-center flex flex-col gap-4 md:items-center">
                    <h2 className="text-2xl font-medium mb-4">
                    🤝 Join as a Monthly Sponsor
                    </h2>
                    <p className="text-gray-600">
                    Are you a business or organization looking to make a difference? Partner with Common Person Relief to amplify your impact and support underprivileged communities. Let’s work together to build a world where no one is left behind.


                    </p>
                    <Link href="/contact">
                      <button className="bg-primarycolor text-white p-4 rounded-md flex items-center gap-2">
                      Partner With Us
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
