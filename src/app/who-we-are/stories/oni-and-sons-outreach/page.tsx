import Image from "next/image";
import React from "react";

const HospitalOutreach = () => {
    const images = [
        "/images/outreach/11.jpg",
        "/images/outreach/12.jpg",
        "/images/outreach/13.jpg",
        "/images/outreach/14.jpg",
        "/images/outreach/15.jpg",
        "/images/outreach/16.jpg",
        "/images/outreach/17.jpg",
        "/images/outreach/18.jpg",
        "/images/outreach/19.jpg",
        "/images/outreach/20.jpg",
      
      ];
  return (
    <div className="min-h-screen py-10">
      <article className="md:w-5/6 p-4 mx-auto pt-14">
        <header className="h-[60vh] relative">
          <div className="w-full h-full">
            <Image
              src="/images/outreach/11.jpg"
              alt="hospital outreach"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white p-8">
            <h1 className="md:text-6xl text-4xl">
              Restoring Hope at Oni and Sons Memorial Hospital: A Day of Care and Compassion
            </h1>
          </div>
        </header>

        <section className="p-6 lg:p-12">
          <p className="text-gray-700 text-lg leading-8 mb-4">
            Our next stop was at the Oni and Sons Memorial Hospital. Healthcare is a fundamental human right, yet many people struggle to access even the most basic medical support. At Common Person Relief, we believe that no one should feel alone in their time of need. That’s why, on January 14, 2025, we extended our hands to the patients of Oni and Sons Memorial Hospital, Ibadan, providing support, encouragement, and essential items.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            A Mission of Care and Comfort
          </h2>
          <p className="text-gray-700 leading-8">
            Hospitals are places of healing, but they can also be places of uncertainty and distress. Our goal was to remind patients and caregivers alike that they are not alone—that there is a community that cares about them.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Key Activities
          </h2>
          <ul className="list-disc pl-6 text-gray-700 leading-8">
            <li>✔️ <strong>Medical Supply Support</strong> – Helping over 50 patients with their hospital bills.</li>
            <li>✔️ <strong>Words of Encouragement</strong> – Spending time with patients, listening to their stories, and offering them support.</li>
          </ul>

          <blockquote className="bg-gray-100 border-l-4 border-indigo-600 p-6 mt-8 text-gray-700 italic">
            “It’s not just about the food or supplies—it’s about knowing that people still care. This visit has given me strength.”
          </blockquote>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            A Special Thanks
          </h2>
          <p className="text-gray-700 leading-8">
            To all our volunteers, donors, and supporters—thank you for making this possible. Your generosity is not just providing relief; it’s restoring dignity and hope.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Looking Ahead
          </h2>
          <ul className="list-disc pl-6 text-gray-700 leading-8">
            <li>✔️ Organizing more medical aid support programs for hospitals in underserved areas.</li>
            <li>✔️ Establishing a patient assistance fund to help with medical expenses.</li>
            <li>✔️ Developing hospital volunteer programs to provide emotional support to patients.</li>
          </ul>
        </section>

        <div className="bg-gray-100 py-6 px-4 lg:px-8">
          <p className="text-gray-700 text-center leading-6">
            📸 Swipe through the pictures to see the love, care, and impact we shared at Oni and Sons Memorial Hospital!<br />
            <span className="font-semibold">#HealthcareForAll #CommunitySupport #OutreachProgram #CompassionInAction #CommonPersonRelief</span>
          </p>
        </div>

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
      </article>
    </div>
  );
};

export default HospitalOutreach;
