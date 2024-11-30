"use client";
import Image from "next/image";
import { BiCheck, BiPlus, BiMinus } from "react-icons/bi";
import { useState } from "react";
import CtaPage from "@/components/Cta.page";

export default function MissionVision() {
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
    <div>
      <div className="w-5/6 mx-auto py-10 md:py-20 flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium py-6 md:py-10 border-b border-gray-200">
            Our Vision
          </h1>
          <p className="text-gray-500 text-base md:text-lg py-6">
            Our vision is to create a society where children, youth, and women
            have equal access to essential services, including quality
            healthcare, economic empowerment, education, clean water, and
            climate resilience, regardless of their gender or religion.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium py-6 md:py-10 border-b border-gray-200">
            Our Mission
          </h1>
          <p className="text-gray-500 text-base md:text-lg py-6">
            We are committed to creating opportunities for children, youth, and
            women to benefit from initiatives focused on education, quality
            healthcare, climate change, water access, and economic empowerment.
          </p>
        </div>
      </div>

      <div className="w-5/6 mx-auto py-8 md:py-16 flex flex-col md:flex-row gap-6 md:gap-10 items-center">
        <div className="flex flex-col justify-between gap-4 w-full md:w-1/3">
          <div>
            <div className="flex gap-2 items-center">
              <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
              <h1 className="text-xl  font-medium">Integrity</h1>
            </div>
            <p className="text-gray-500 text-base sm:text-lg">
              Honesty and strong moral principles guide us
            </p>
          </div>
          <div className="h-[1px] w-full bg-gray-200"></div>
          <div>
            <div className="flex gap-2 items-center">
              <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
              <h1 className="text-xl  font-medium">Teamwork</h1>
            </div>
            <p className="text-gray-500 text-base sm:text-lg">
              Together we can achieve anything
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <div>
            <div className="flex gap-2 items-center">
              <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
              <h1 className="text-xl  font-medium">Passion</h1>
            </div>
            <p className="text-gray-500 text-base sm:text-lg">
              A consistent desire to transform bad to good
            </p>
          </div>
          <div className="h-[1px] w-full bg-gray-200"></div>
          <div>
            <div className="flex gap-2 items-center">
              <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
              <h1 className="text-xl  font-medium">Goodwill</h1>
            </div>
            <p className="text-gray-500 text-base sm:text-lg">
              To build good long-lasting legacy
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 h-[200px] mt-6 md:mt-0">
          <Image
            src="/images/mis.jpeg"
            alt="mission-vision"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-5/6 mx-auto py-8 sm:py-16 md:py-20 flex flex-col gap-6 sm:gap-8 md:gap-10">
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
    </div>
  );
}
