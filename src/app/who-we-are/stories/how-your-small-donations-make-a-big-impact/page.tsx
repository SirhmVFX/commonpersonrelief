import Image from "next/image";
import React from "react";

const CharityArticle = () => {
  return (
    <div className=" min-h-screen py-10 ">
      <article className="w-5/6 mx-auto pt-20 ">
        <header className=" h-[60vh] relative ">
          <div className="w-full h-full">
            <Image
              src="/images/at1.jpg"
              alt="news"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white p-8">
          <h1 className="md:text-6xl">
            How Your Small Donations Make a Big Impact
          </h1>
          <p className="mt-2 text-lg">Transforming lives, one small step at a time.</p>
          </div>
        </header>

        <section className="p-6 lg:p-12">
          <p className="text-gray-700 text-lg leading-8 mb-4">
            When it comes to charity, many people think that only large donations
            make a difference. However, the truth is that small contributions
            collectively have the power to transform lives and uplift communities.
            In this article, we’ll explore how even the smallest donations can
            create meaningful change.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            1. The Power of Numbers
          </h2>
          <p className="text-gray-700 leading-8">
            Imagine 1,000 people each donating $10. That’s $10,000—enough to build
            a classroom, provide clean drinking water, or feed an entire community
            for a month. Small donations add up quickly, proving that every
            contribution matters.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            2. Flexibility for Charitable Organizations
          </h2>
          <p className="text-gray-700 leading-8">
            Small, regular donations allow nonprofits to allocate resources more
            effectively. With consistent funding, charities can plan ahead and
            implement long-term solutions rather than just addressing immediate
            needs.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            3. Empowering Communities
          </h2>
          <p className="text-gray-700 leading-8">
            Your donations, no matter the size, help empower communities by
            funding education, healthcare, and essential resources. Small
            contributions fund projects that create lasting impacts for families
            and individuals in need.
          </p>

          <blockquote className="bg-gray-100 border-l-4 border-indigo-600 p-6 mt-8 text-gray-700 italic">
            “We rise by lifting others. Even the smallest act of kindness can
            ripple through an entire community, creating waves of positive
            change.”  
          </blockquote>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            4. Personal Fulfillment
          </h2>
          <p className="text-gray-700 leading-8">
            Contributing to a cause you believe in, even with a small amount,
            brings immense personal satisfaction. Knowing that you’ve helped
            someone in need is one of the most fulfilling experiences in life.
          </p>
        </section>

        <footer className="bg-gray-100 py-6 px-4 lg:px-8">
          <p className="text-gray-700 text-center leading-6">
            Ready to make a difference? <strong>Join us</strong> in our mission to
            create lasting change. Every dollar counts, and every heart matters.
            Visit our <a href="/donate" className="text-indigo-600 underline">
              donation page
            </a> to get started today!
          </p>
        </footer>
      </article>
    </div>
  );
};

export default CharityArticle;
