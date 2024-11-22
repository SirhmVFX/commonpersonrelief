"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`  fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#00000030] backdrop-blur-md" : ""
      }`}
    >
      <div className="mx-auto w-5/6 flex justify-between items-center p-4">
        <div className="w-[125px] ">
          <Image
            src="/images/logo.png"
            alt="Common Person Relief"
            width={100}
            height={100}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex gap-10 items-center">
          <Link className="text-white hover:text-primarycolor " href="/">
            Who we are
          </Link>
          <Link className="text-white hover:text-primarycolor " href="/">
            What we serve
          </Link>
          <Link className="text-white hover:text-primarycolor " href="/">
            Get Aid
          </Link>
          <Link className="text-white hover:text-primarycolor " href="/">
            Contact Us
          </Link>
          <Link className="text-white hover:text-primarycolor " href="/">
            News and Events
          </Link>
          <Link className="text-white hover:text-primarycolor " href="/">
            Volunteer
          </Link>
          <button className="bg-primarycolor text-white p-3 rounded-md">
            <BiHeart />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
