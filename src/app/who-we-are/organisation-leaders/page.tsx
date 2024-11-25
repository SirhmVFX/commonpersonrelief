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
      <div className="w-5/6 mx-auto py-[80px] lg:py-[120px] flex flex-col md:flex-row gap-6 md:gap-4">
        <div className="w-full md:w-1/3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
            Corporate Brief
          </h1>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-gray-500 text-base sm:text-lg">
            Common Person Relief is a nonprofit and nonpolitical organization
            committed to making a difference in the lives of underprivileged
            children, youth, and women across Africa. With plans to officially
            register under the appropriate legal frameworks, we aim to focus on
            education as our primary mission. In the future, we envision
            establishing schools to offer free education to underserved
            children, fostering their healthy development. Alongside education,
            we are dedicated to running programs for economic empowerment and
            health awareness, creating sustainable opportunities and promoting
            well-being across communities.
          </p>
        </div>
      </div>
      <div className="w-5/6 mx-auto">
        <div className="w-full h-[200px] sm:h-[300px] md:h-[400px]">
          <Image
            src={"/images/hero2.png"}
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
              How common person relief plans to transform others
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
