import Image from "next/image";
import React from "react";

const CharityArticle = () => {
  return (
    <div className="min-h-screen py-10">
      <article className="md:w-5/6 p-4 mx-auto pt-14">
        <header className="h-[60vh] relative">
          <div className="w-full h-full">
            <Image
              src="/images/at2.jpg"
              alt="education"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white p-8">
            <h1 className="md:text-6xl">
              The Role of Education in Breaking the Cycle of Poverty
            </h1>
            <p className="mt-2 text-lg">Empowering communities through knowledge and opportunity.</p>
          </div>
        </header>

        <section className="p-6 lg:p-12">
          <p className="text-gray-700 text-lg leading-8 mb-4">
            Education is more than just learning—it’s a pathway to a brighter
            future. For millions of people around the world, access to education
            is the key to breaking free from the cycle of poverty. In this
            article, we explore how education transforms lives and uplifts entire
            communities.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            1. Education as a Gateway to Opportunities
          </h2>
          <p className="text-gray-700 leading-8">
            Education equips individuals with the skills and knowledge they need
            to pursue meaningful careers. For children born into poverty,
            education opens doors to opportunities that would otherwise remain
            closed, providing a foundation for better-paying jobs and financial
            independence.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            2. Reducing Inequality
          </h2>
          <p className="text-gray-700 leading-8">
            Access to quality education helps level the playing field for
            marginalized communities. By addressing gender, racial, and economic
            disparities, education promotes inclusivity and ensures everyone has a
            fair chance at success.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            3. The Ripple Effect on Families and Communities
          </h2>
          <p className="text-gray-700 leading-8">
            Educated individuals often pass their knowledge on to their families,
            creating a ripple effect that uplifts entire communities. Studies
            show that educated mothers are more likely to prioritize their
            children’s education, leading to a cycle of learning and empowerment.
          </p>

          <blockquote className="bg-gray-100 border-l-4 border-indigo-600 p-6 mt-8 text-gray-700 italic">
            “Education is the most powerful weapon which you can use to change
            the world.” — Nelson Mandela
          </blockquote>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            4. Breaking the Cycle of Poverty
          </h2>
          <p className="text-gray-700 leading-8">
            Poverty is often passed down from one generation to the next. By
            investing in education, we can disrupt this cycle and create pathways
            for individuals to rise above their circumstances, paving the way for
            long-term societal progress.
          </p>
        </section>

        <footer className="bg-gray-100 py-6 px-4 lg:px-8">
          <p className="text-gray-700 text-center leading-6">
            Education is the cornerstone of progress. <strong>Join us</strong> in
            our mission to provide access to education for all. Visit our{" "}
            <a href="/donate" className="text-indigo-600 underline">
              donation page
            </a>{" "}
            to support educational initiatives today!
          </p>
        </footer>
      </article>
    </div>
  );
};

export default CharityArticle;
