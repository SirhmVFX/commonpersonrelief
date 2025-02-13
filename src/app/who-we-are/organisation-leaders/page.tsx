"use client";
import CtaPage from "@/components/Cta.page";
import Image from "next/image";
import { useState } from "react";
import { BiCheck, BiMinus, BiPlus } from "react-icons/bi";

export default function OrganisationLeaders() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How can I support Common Person Relief?",
      answer:
        "You can support Common Person Relief by donating, volunteering, or partnering with us. Donations help fund our educational programs, food distribution, and health initiatives. Volunteers play a crucial role in our projects, assisting in food drives, community outreach, and educational efforts. Businesses and organizations can partner with us to extend our reach and make a bigger impact.",
    },
    {
      question: "What areas does Common Person Relief serve?",
      answer:
        "Common Person Relief operates in multiple regions, focusing on underserved communities and areas affected by poverty or natural disasters. Our programs reach urban and rural areas, providing essential services like food distribution, educational support, and healthcare assistance to those in need.",
    },
    {
      question: "How is my donation used?",
      answer:
        "Your donations are carefully allocated to maximize impact. Approximately 85% of donations directly fund our programs, including food distribution, educational initiatives, and emergency relief efforts. The remaining funds support essential administrative costs and program development to ensure sustainable, long-term impact in the communities we serve.",
    },
  ];
  return (
    <>
     <div className="w-5/6 mx-auto py-[80px] lg:py-[120px] md:flex gap-4">
        <div className="flex flex-col items-start gap-4 md:w-1/2">
          <p className="text-primarycolor text-sm md:text-lg py-2 px-4 rounded-full border border-primarycolor">
            About us
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium">
            Empowering Lives, One Step at a Time
          </h1>
        </div>

        <div className="flex flex-col gap-4 md:w-1/2">
          <p className="text-sm md:text-lg text-gray-500">
            At Common Person Relief, we are driven by a shared commitment to
            uplift the lives of underprivileged individuals across Africa. Since
            our inception, we have worked tirelessly to bridge the gap in access
            to essential resources such as food, education, healthcare, and
            economic opportunities.
          </p>
          <p className="text-sm md:text-lg text-gray-500">
            Our mission is to empower children, youth, and women by addressing
            the root causes of poverty and inequality. Through strategic
            programs and partnerships, we aim to create sustainable solutions
            that bring hope, dignity, and opportunity to those who need it most.
          </p>
        </div>
      </div>

      
      <div className="w-5/6 mx-auto">
        <div className="w-full h-[200px] sm:h-[300px] md:h-[400px]">
          <Image
            src={"/images/corp.jpeg"}
            alt="Organisation Leaders"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="py-6 sm:py-8 md:py-10 flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
            <h1 className="text-xl sm:text-2xl font-medium">
              What lead to the establishment of Common Person Relief
            </h1>
          </div>
          <p className="text-gray-500 text-base sm:text-lg">
            Common Person Relief was founded with the mission to support
            underprivileged individuals across Africa, providing access to
            essential resources such as education, healthcare, and economic
            empowerment. We are dedicated to helping children, youth, and women
            overcome challenges related to poverty, lack of education, and
            limited opportunities. Our focus is on creating sustainable
            solutions that improve lives and uplift communities, ensuring that
            everyone has the chance to thrive and achieve their full potential.
          </p>
        </div>
        <div className="py-6 sm:py-8 md:py-10 flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
            <h1 className="text-xl sm:text-2xl font-medium">
              How Common Person Relief plans to transform others
            </h1>
          </div>
          <p className="text-gray-500 text-base sm:text-lg">
            Common Person Relief plans to transform lives by focusing on three
            key areas: education, economic empowerment, and health awareness. We
            aim to provide free education to underserved children, ensuring they
            have the tools to build brighter futures. Through vocational
            training and support programs, we will empower individuals with
            skills that enhance their economic opportunities. Additionally, we
            will raise health awareness, addressing key issues like nutrition
            and sanitation, to improve overall well-being. By providing these
            essential services, we strive to create lasting change, helping
            individuals and communities rise above poverty and reach their full
            potential.
          </p>
        </div>
      </div>
      
      <div className="w-5/6 mx-auto py-16 md:py-32">
        <div className=" md:flex items-center gap-4 p-4 border-b border-gray-200">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium md:w-1/2">
            Our Impact Areas
          </h1>
          <p className="text-sm md:text-lg text-gray-500 md:w-1/2">
            With the support of dedicated volunteers, partners, and donors,
            we&apos;re creating lasting change one life at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-10">
          <div className="flex flex-col gap-4 p-4 bg-gray-50">
            <h1 className="text-2xl md:text-3xl text-primarycolor font-medium">01</h1>
            <h1 className="text-2xl md:text-3xl font-medium">Feeding programs to combat hunger.</h1>
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
            <h1 className="text-2xl md:text-3xl font-medium">Vocational training and economic empowerment.</h1>
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




      <div className="w-5/6 mx-auto py-10 sm:py-16 md:py-20 flex flex-col gap-6 sm:gap-8 md:gap-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            If you have any questions about Common Person Relief, please feel
            free to contact us.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg transition-all duration-300"
            >
              <button
                className="w-full p-4 sm:p-6 flex justify-between items-center rounded-lg"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <h3 className="text-left text-base sm:text-lg font-medium pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <BiMinus className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                ) : (
                  <BiPlus className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === index
                    ? "max-h-[500px] p-4 sm:p-6 pt-0"
                    : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-base sm:text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CtaPage />
    </>
  );
}
