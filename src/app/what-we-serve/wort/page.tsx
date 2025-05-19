"use client"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import WortApplicationForm from "@/components/WortApplicationForm";

const HeroSection = () => {

    

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const slides = [
    "/images/wort1.jpg",
    "/images/wort2.webp",
    "/images/wort3.webp"
  ];

  return (
    <section className="w-full h-[600px] overflow-hidden">
      <Slider {...settings}>
        {slides.map((src, idx) => (
          <div key={idx}>
            <Image width={1000} height={1000} src={src} alt={`WORT Slide ${idx + 1}`} className="w-full h-[600px] object-cover"  />
          </div>
        ))}
      </Slider>
      <div className="absolute top-0 left-0 w-full h-[600px] flex items-center justify-center bg-black bg-opacity-40">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Work Ready Transition Program (WORT)</h1>
          <p className="mt-4 text-lg md:text-xl">Empowering Youth for the Future of Work</p>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section className="py-12 px-4 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">About WORT</h2>
    <p className="mb-4">
      The Work Ready Transition Program (WORT) is a free, 5-week virtual program designed by Common Person Relief (CPR)
      to prepare final-year students, fresh graduates, and unemployed youths (ages 18–35) for a seamless transition from
      academic life to the workforce.
    </p>
    <p>
      We know that leaving school can feel overwhelming. That’s why WORT combines expert-led sessions, real-world tools,
      and personalized mentorship to help participants develop the confidence, skills, and strategies needed to thrive in
      today’s competitive job market.
    </p>
  </section>
);

const ProgramSection = () => (
  <section className="bg-gray-100 py-12 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Program at a Glance</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Duration:</strong> June 9th – July 11, 2025</li>
        <li><strong>Mode:</strong> 100% Virtual (Zoom & WhatsApp)</li>
        <li><strong>Extras:</strong> Access to session recordings, downloadable templates & guides, lifetime mentorship community access</li>
      </ul>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section className="py-12 px-4 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">What You’ll Gain</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>CV & LinkedIn Optimization</li>
      <li>Soft Skills Training</li>
      <li>Job & Opportunity Alerts</li>
      <li>Google Workspace Skills</li>
      <li>One-on-One Mentorship</li>
      <li>A Lifelong Network</li>
    </ul>
  </section>
);

const OutcomesSection = () => (
  <section className="bg-gray-100 py-12 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Program Outcomes</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Professionally crafted CVs and LinkedIn profiles</li>
        <li>Equipped with essential soft skills</li>
        <li>Knowledge on how to find and apply for opportunities</li>
        <li>Strong digital skills for remote and in-person roles</li>
        <li>Access to a growing network of mentors and peers</li>
      </ul>
    </div>
  </section>
);


const WhoShouldApply = () => (
    <section className=" py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Who should Apply</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Final-year university students preparing for life after graduation</li>
          <li>Recent graduates (up to 3 years post-graduation)</li>
          <li>Unemployed young people (ages 18–35) seeking practical workplace skills</li>
        </ul>
      </div>
    </section>
  );



const WORTLandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <BenefitsSection />
      <OutcomesSection />
      <WhoShouldApply />
      <WortApplicationForm />
    </div>
  );
};

export default WORTLandingPage;
