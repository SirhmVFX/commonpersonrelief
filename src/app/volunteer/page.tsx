'use client';
import Image from "next/image";
import React, { useState, FormEvent } from 'react';
import { BsArrowRight } from "react-icons/bs";

export default function Volunteer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:info@commonpersonrelief.org?subject=Volunteer%20Interest&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <div className="w-full h-[50vh] md:h-[70vh] pt-16">
        <div className="w-full h-full relative">
          <Image
            src="https://res.cloudinary.com/dkeh0cumc/image/upload/v1748891825/mn_taoxwu.jpg"
            alt="donate"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
          <div className="absolute top-16 left-10 botton-10 right-10 md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 text-white text-center">
            <h1 className="md:text-6xl text-3xl font-bold ">
              Give a helping hand to those who need it
            </h1>
            <p className="mb-4 text-xs md:text-base">
              Your donation to Common Person Relief has the power to transform
              lives. Together, we can provide food for the hungry, education for
              underprivileged children, and economic opportunities for
              struggling families. Every contribution, no matter the size, helps
              us create lasting change in the lives of those who need it most.
            </p>
            
          </div>
        </div>
      </div>
      <div className="md:w-5/6 mx-auto p-4 py-4 md:py-4 flex flex-col md:flex-row md:gap-10">
        <div className="w-full pt-10 md:pt-0 md:w-1/2">
          <h1 className="text-3xl  font-medium py-4 border-b border-gray-200">
            What we are doing?
          </h1>
          <p className="text-gray-500 text-base md:text-lg py-6">
            Our vision is to create a society where children, youth, and women
            have equal access to essential services, including quality
            healthcare, economic empowerment, education, clean water, and
            climate resilience, regardless of their gender or religion.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl   font-medium py-4  border-b border-gray-200">
            Why are we doing what we do?
          </h1>
          <p className="text-gray-500 text-base md:text-lg py-6">
            We are committed to creating opportunities for children, youth, and
            women to benefit from initiatives focused on education, quality
            healthcare, climate change, water access, and economic empowerment.
          </p>
        </div>
      </div>

      <div className="md:w-5/6 p-4 mx-auto py-6"  onSubmit={handleSubmit}>
        <form className="w-full flex flex-col gap-4 items-start">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-medium">
            Leave us your info{" "}
          </h1>
          <input
            type="text"
            className="w-full bg-transparent p-4 rounded-md border border-gray-300"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            className="w-full bg-transparent p-4 rounded-md border border-gray-300"
            placeholder="Your Email"
            value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
          <textarea
            className="w-full bg-transparent p-4 rounded-md border border-gray-300"
            placeholder="Your Message"
            rows={5}
            value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          ></textarea>

          <button className="bg-primarycolor text-white p-2 rounded-md flex items-center gap-2" type="submit">
            Volunteer with us
            <BsArrowRight className="text-white" />
          </button>
        </form>
      </div>
    </div>
  );
}
