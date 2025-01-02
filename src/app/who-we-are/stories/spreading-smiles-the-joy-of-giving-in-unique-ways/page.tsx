import Image from "next/image";
import React from "react";

const CharityArticle = () => {
  return (
    <div className="min-h-screen py-10">
      <article className="w-5/6 mx-auto pt-20">
        <header className="h-[60vh] relative">
          <div className="w-full h-full">
            <Image
              src="/images/at4.jpg"
              alt="spreading smiles"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 right-0 text-white p-8">
            <h1 className="md:text-6xl">Spreading Smiles: The Joy of Giving in Unique Ways</h1>
            <p className="mt-2 text-lg">Making the world brighter, one smile at a time!</p>
          </div>
        </header>

        <section className="p-6 lg:p-12">
          <p className="text-gray-700 text-lg leading-8 mb-4">
            Charity doesn&apos;t have to be boring or predictable. In fact, some of the most impactful giving comes from the most creative ideas. From surprise parties to anonymous acts of kindness, spreading smiles can be fun and fulfilling. Let’s explore how you can join the movement in delightful ways!
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            1. Organizing Surprise &apos;Kindness Bombs&apos;
          </h2>
          <p className="text-gray-700 leading-8">
            Picture this: you secretly pay for someone&apos;s coffee, leave cheerful notes around your city, or hand out balloons to kids at the park. These little surprises create ripples of joy that can brighten someone’s entire day.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            2. Hosting Themed Fundraisers
          </h2>
          <p className="text-gray-700 leading-8">
            Think costume parties, trivia nights, or even virtual escape rooms! Themed fundraisers not only raise money for good causes but also bring people together for fun and laughter.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            3. Turning Hobbies Into Help
          </h2>
          <p className="text-gray-700 leading-8">
            Love to bake, paint, or craft? Sell your creations and donate the proceeds to charity. Sharing your passion while helping others is a win-win!
          </p>

          <blockquote className="bg-gray-100 border-l-4 border-indigo-600 p-6 mt-8 text-gray-700 italic">
            “Happiness doesn’t result from what we get, but from what we give.”
          </blockquote>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            4. Participating in Random Acts of Kindness Challenges
          </h2>
          <p className="text-gray-700 leading-8">
            Join or create a kindness challenge with your friends or community. From complimenting strangers to donating food, these challenges inspire creative giving and spread positivity everywhere.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            5. Supporting Animal Charities with a Twist
          </h2>
          <p className="text-gray-700 leading-8">
            Organize a dog-walking fundraiser or a &apos;cat yoga&apos; event. Combine fun activities with meaningful causes to make an impact while having a great time.
          </p>
        </section>

        <footer className="bg-gray-100 py-6 px-4 lg:px-8">
          <p className="text-gray-700 text-center leading-6">
            Ready to make giving exciting? <strong>Join us</strong> in spreading smiles around the world. Explore more creative ways to give back on our <a href="/get-involved" className="text-indigo-600 underline">Get Involved</a> page. Let’s make kindness contagious!
          </p>
        </footer>
      </article>
    </div>
  );
};

export default CharityArticle;
