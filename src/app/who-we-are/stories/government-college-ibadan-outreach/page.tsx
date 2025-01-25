import Image from "next/image";
import React from "react";

const images = [
  "/images/outreach/1.jpg",
  "/images/outreach/2.jpg",
  "/images/outreach/3.jpg",
  "/images/outreach/4.jpg",
  "/images/outreach/5.jpg",
  "/images/outreach/6.jpg",
  "/images/outreach/7.jpg",
  "/images/outreach/8.jpg",
  "/images/outreach/9.jpg",
  "/images/outreach/10.jpg",

];

const CommunityOutreach = () => {
  return (
    <div className="min-h-screen py-10">
      <article className="md:w-5/6 p-4 mx-auto pt-14">
        <header className="h-[60vh] relative">
          <div className="w-full h-full">
            <Image
              src="/images/outreach/1.jpg"
              alt="Community Outreach"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white p-8">
            <h1 className="md:text-6xl text-4xl">
              Empowering Students at Government College Ibadan: A Community Outreach Recap
            </h1>
            <p className="mt-2 text-lg">A mission of support and empowerment.</p>
          </div>
        </header>

        <section className="p-6 lg:p-12">
          <p className="text-gray-700 text-lg leading-8 mb-4">
            While over 1,000 people in Ibadan, Oyo State benefited from our just concluded visit, Government College Ibadan was our first stop.
            Sometimes, all it takes is a helping hand to encourage and change someone’s life. On January 14, 2025, our team at Common Person Relief had the privilege of visiting Government College Ibadan, a government school built to impact students and the people of the community.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">A Mission of Support and Empowerment</h2>
          <p className="text-gray-700 leading-8">
            Studying in school can be challenging for students, but one thing we aimed to do was remind them that they are not alone. Our outreach focused on encouraging the students.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Key Activities</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-8">
            <li>✔️ Distribution of Food Items – Providing essentials to ensure comfort and nourishment.</li>
            <li>✔️ Provided Sports Team Jersey – Supporting the school sport team with an official jersey.</li>
            <li>✔️ Encouragement and Support – Taking time to listen, talk to them, and encourage them.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">A Heartwarming Moment</h2>
          <blockquote className="bg-gray-100 border-l-4 border-indigo-600 p-6 mt-8 text-gray-700 italic">
            “This outreach has given us hope. We often feel forgotten, but today, we feel seen and valued.”
          </blockquote>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">A Special Thanks</h2>
          <p className="text-gray-700 leading-8">
            We want to express our deepest gratitude to our volunteers, donors, and everyone who contributed to making this day special. Your kindness is making a tangible difference in people’s lives.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Looking Forward</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-8">
            <li>✔️ Creating skills development programs for the students.</li>
            <li>✔️ Organizing regular food assistance drives.</li>
            <li>✔️ Establishing long-term mentorship programs.</li>
          </ul>
        </section>

        <section className="p-6 lg:p-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">📸 Swipe through the pictures to witness the love, support, and impact shared on this day!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div key={index} className="w-full h-64 relative">
                <Image src={src} alt={`Outreach ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
            ))}
          </div>
        </section>

        <footer className="bg-gray-100 py-6 px-4 lg:px-8 mt-10">
          <p className="text-gray-700 text-center leading-6">
            Be part of the change. <strong>Join us</strong> in making a difference. Visit our
            <a href="/donate" className="text-indigo-600 underline"> donation page </a>
            to support our outreach programs today.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default CommunityOutreach;
