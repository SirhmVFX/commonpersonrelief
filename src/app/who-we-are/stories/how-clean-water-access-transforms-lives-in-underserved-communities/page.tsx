import Image from "next/image";
import React from "react";

const CharityArticle = () => {
  return (
    <div className="min-h-screen py-10">
      <article className="md:w-5/6 p-4 mx-auto pt-14">
        <header className="h-[60vh] relative">
          <div className="w-full h-full">
            <Image
              src="/images/at3.jpg"
              alt="clean water"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white p-8">
            <h1 className="md:text-6xl text-4xl">
              How Clean Water Access Transforms Lives in Underserved Communities
            </h1>
            <p className="mt-2 text-lg">A ripple effect of health, education, and hope.</p>
          </div>
        </header>

        <section className="p-6 lg:p-12">
          <p className="text-gray-700 text-lg leading-8 mb-4">
            Access to clean water is a basic human right, yet millions of people
            around the world lack it. In underserved communities, clean water
            initiatives are not just about quenching thirst—they’re about
            transforming lives. This article explores how providing clean water
            uplifts health, education, and economic opportunities for those in need.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            1. Reducing Waterborne Diseases
          </h2>
          <p className="text-gray-700 leading-8">
            Contaminated water is a leading cause of illnesses such as cholera,
            dysentery, and typhoid. Clean water reduces the prevalence of these
            diseases, improving the overall health of communities and saving
            countless lives every year.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            2. Boosting Educational Opportunities
          </h2>
          <p className="text-gray-700 leading-8">
            Children, especially girls, often miss school because they spend
            hours fetching water from distant sources. Clean water access near
            their homes allows them to focus on their education, paving the way
            for a brighter future.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            3. Empowering Women and Girls
          </h2>
          <p className="text-gray-700 leading-8">
            In many parts of the world, collecting water is a task assigned to
            women and girls. By providing accessible clean water, these women
            gain time to pursue income-generating activities, education, or
            other personal goals, fostering gender equality.
          </p>

          <blockquote className="bg-gray-100 border-l-4 border-indigo-600 p-6 mt-8 text-gray-700 italic">
            “When a community gains access to clean water, everything changes. It’s
            the foundation for health, dignity, and development.”
          </blockquote>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            4. Fueling Economic Growth
          </h2>
          <p className="text-gray-700 leading-8">
            Healthy communities are more productive. Clean water reduces
            healthcare costs, increases attendance at work and school, and
            creates opportunities for agriculture and small businesses, driving
            economic growth.
          </p>
        </section>

        <footer className="bg-gray-100 py-6 px-4 lg:px-8">
          <p className="text-gray-700 text-center leading-6">
            Be part of the change. <strong>Join us</strong> in bringing clean
            water to communities in need. Visit our{" "}
            <a href="/donate" className="text-indigo-600 underline">
              donation page
            </a>{" "}
            to support our clean water initiatives today.
          </p>
        </footer>
      </article>
    </div>
  );
};

export default CharityArticle;
