import Image from "next/image";
import React from "react";

const CharityArticle = () => {
  return (
    <div className="min-h-screen py-10">
      <article className="md:w-5/6 p-4 mx-auto pt-14">
        <header className="h-[90vh] relative">
          <div className="w-full h-full">
            <Image
              src="/images/rec.png"
              alt="charity outreach"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white p-8">
            <h1 className="md:text-6xl text-4xl">
              January 2025 Events: Empowering Communities Through Outreach in
              the state of Ibadan
            </h1>
            <p className="mt-2 text-lg">
              Together, we bring hope and relief to those in need.
            </p>
          </div>
        </header>

        <section className="p-6 lg:p-12">
          <p className="text-gray-700 text-lg leading-8 mb-4">
            At Common Person Relief, we believe in creating a better future for
            underserved communities by addressing their most pressing needs.
            Therefore this January, we are conducting a series of outreach
            events across various locations in the state of Ibadan, Oyo State
            Nigeria to provide support, hope, and resources to those who need
            them most.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Our Outreach Event Schedule
          </h2>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">
              1. Seriko Sabo
            </h3>
            <p className="text-gray-700 leading-8">
              <strong>Date:</strong> January 14, 2025
              <br />
              <strong>Time:</strong> 4:30 AM
              <br />
              <strong>Highlights:</strong> Food distribution, health awareness,
              and community empowerment activities aimed at improving the
              quality of life for local residents.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">
              2. Government College Apata, Ibadan
            </h3>
            <p className="text-gray-700 leading-8">
              <strong>Date:</strong> January 14, 2025
              <br />
              <strong>Time:</strong> 8:30 AM
              <br />
              <strong>Highlights:</strong> Distribution of basic necessities
              like food and clothing, along with health promotion initiatives to
              encourage preventive care.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">
              3. Oni & Son Memorial Hospital
            </h3>
            <p className="text-gray-700 leading-8">
              <strong>Date:</strong> January 14, 2025
              <br />
              <strong>Time:</strong> 11:00 AM
              <br />
              <strong>Highlights:</strong> Partnering with hospital staff to
              provide health resources and community engagement sessions,
              alongside basic support services for patients and families.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">
              4. Oyiza Foundation
            </h3>
            <p className="text-gray-700 leading-8">
              <strong>Date:</strong> January 14, 2025
              <br />
              <strong>Time:</strong> 2:00 PM
              <br />
              <strong>Highlights:</strong> Educational resource distribution,
              food supplies for families, and awareness campaigns to promote
              health and well-being.
            </p>
          </div>

          <blockquote className="bg-gray-100 border-l-4 border-indigo-600 p-6 mt-8 text-gray-700 italic">
            “Together, we can build a brighter future for those in need. Every
            small act of kindness contributes to a larger wave of change.”
          </blockquote>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-gray-700 leading-8">
            Each outreach event is an opportunity to bring smiles to faces and
            hope to hearts. By collaborating with local organizations, we ensure
            that the needs of each community are addressed effectively. We
            invite you to join us in this mission and help make a lasting
            impact.
          </p>
        </section>

        <footer className="bg-gray-100 py-6 px-4 lg:px-8">
          <p className="text-gray-700 text-center leading-6">
            Want to be a part of this journey?{" "}
            <strong>Support our mission</strong> by donating or volunteering.
            Visit our{" "}
            <a href="/donate" className="text-indigo-600 underline">
              donation page
            </a>{" "}
            or{" "}
            <a href="/volunteer" className="text-indigo-600 underline">
              volunteer with us
            </a>{" "}
            today!
          </p>
        </footer>
      </article>
    </div>
  );
};

export default CharityArticle;
