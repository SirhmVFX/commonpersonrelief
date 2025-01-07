"use client";
import Image from "next/image";
import Link from "next/link";
import {
  BiHeart,
  BiBuilding,
  BiAward,
  BiDonateHeart,
  BiX,
  BiMenu,
} from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { CgClose } from "react-icons/cg";

function Header() {
  const [showWhoDropdown, setShowWhoDropdown] = useState(false);
  const [showServeDropdown, setShowServeDropdown] = useState(false);
  const [showGiveDropdown, setShowGiveDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
        setShowWhoDropdown(false);
        setShowServeDropdown(false);
        setShowGiveDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all bg-black/70 backdrop-blur-md duration-300 ${
          showWhoDropdown ||
          showServeDropdown ||
          showGiveDropdown ||
          isMobileMenuOpen ||
          isScrolled
            ? "bg-black/70 backdrop-blur-md"
            : " bg-black/70 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto w-5/6 flex justify-between items-center py-4">
          <Link href="/" className="w-[125px]">
            <Image
              src="/images/logo.png"
              alt="Common Person Relief"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-10 items-center">
            <div>
              <Link
                className="text-white hover:text-primarycolor flex items-center"
                href="/who-we-are"
                onMouseEnter={() => {
                  setShowWhoDropdown(true);
                  setShowServeDropdown(false);
                  setShowGiveDropdown(false);
                }}
              >
                Who we are
              </Link>
            </div>
            <div>
              <Link
                className="text-white hover:text-primarycolor flex items-center"
                href="/what-we-serve"
                onMouseEnter={() => {
                  setShowWhoDropdown(false);
                  setShowServeDropdown(true);
                  setShowGiveDropdown(false);
                }}
              >
                What we serve
              </Link>
            </div>
            <Link
              className="text-white hover:text-primarycolor "
              href="/"
              onMouseEnter={() => {
                setShowWhoDropdown(false);
                setShowServeDropdown(false);
                setShowGiveDropdown(true);
              }}
            >
              Give Aid
            </Link>
            {/* <Link className="text-white hover:text-primarycolor " href="/about">
              About Us
            </Link> */}
            <Link
              className="text-white hover:text-primarycolor "
              href="/contact"
            >
              Contact Us
            </Link>

            <Link
              href="/donate"
              className="bg-primarycolor text-white p-3 rounded-md"
            >
              <BiHeart />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primarycolor text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <CgClose /> : <BiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        >
          <div className="w-5/6 mx-auto pt-4 pb-32 ">
            <div className="space-y-4">
              <div>
                <button
                  onClick={() => setShowWhoDropdown(!showWhoDropdown)}
                  className="text-white hover:text-primarycolor w-full text-left py-2 flex justify-between items-center"
                >
                  Who We Are
                  <span className="text-xl">
                    {showWhoDropdown ? <BiX /> : <BiMenu />}
                  </span>
                </button>
                <div
                  className={`pl-4 space-y-2 ${
                    showWhoDropdown ? "block" : "hidden"
                  }`}
                >
                  <Link
                    href="/who-we-are"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setShowWhoDropdown(false);
                    }}
                    className="block text-white hover:text-primarycolor py-2"
                  >
                    About Us
                  </Link>
                  {/* <Link
                    href="/who-we-are"
                    className="block text-white hover:text-primarycolor py-2"
                  >
                    Our Organization and leaders
                  </Link> */}
                  {/* <Link
                    href="/who-we-are/mission-vision"
                    className="block text-white hover:text-primarycolor py-2"
                  >
                    Our Mission and Vision
                  </Link> */}
                  {/* <Link
                    href="/who-we-are/initiatives"
                    className="block text-white hover:text-primarycolor py-2"
                  >
                    Our Initiatives
                  </Link> */}
                  <Link
                    href="/who-we-are/partners"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setShowWhoDropdown(false);
                    }}
                    className="block text-white hover:text-primarycolor py-2"
                  >
                    Our Partners
                  </Link>
                  <Link
                    href="/who-we-are/oppourtunities"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setShowWhoDropdown(false);
                    }}
                    className="block text-white hover:text-primarycolor py-2"
                  >
                    Oppourtunities
                  </Link>
                  <Link
                    href="/who-we-are/stories"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setShowWhoDropdown(false);
                    }}
                    className="block text-white hover:text-primarycolor py-2"
                  >
                    Our Success Stories
                  </Link>
                </div>
              </div>

              <div>
                <button
                  onClick={() => setShowGiveDropdown(!showGiveDropdown)}
                  className="text-white hover:text-primarycolor w-full text-left py-2 flex justify-between items-center"
                >
                  Give Aid
                  <span className="text-xl">
                    {showGiveDropdown ? <BiX /> : <BiMenu />}
                  </span>
                </button>
                <div
                  className={`pl-4 space-y-2 ${
                    showGiveDropdown ? "block" : "hidden"
                  }`}
                >
                  <Link
                    href="/donate"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setShowWhoDropdown(false);
                    }}
                    className="block text-white hover:text-primarycolor py-2"
                  >
                    Make a Donation
                  </Link>
                  <Link
                    href="/volunteer"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setShowWhoDropdown(false);
                    }}
                    className="block text-white hover:text-primarycolor py-2"
                  >
                    Volunteer With Us
                  </Link>
                  <Link
                    href="/who-we-are/partners"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setShowWhoDropdown(false);
                    }}
                    className="block text-white hover:text-primarycolor py-2"
                  >
                    Partner With Us
                  </Link>
                </div>
              </div>
              <div>
                <Link
                  href={"/what-we-serve"}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setShowWhoDropdown(false);
                  }}
                  className="text-white hover:text-primarycolor w-full text-left py-2 flex justify-between items-center"
                >
                  What We Serve
                </Link>
              </div>
              {/* <Link
                href="/about"
                className="block text-white hover:text-primarycolor py-2"
              >
                About Us
              </Link> */}

              <Link
                href="/contact"
                className="block text-white hover:text-primarycolor py-2"
              >
                Contact Us
              </Link>

              <Link
                href={"/donate"}
                className="bg-primarycolor text-white p-3 rounded-md w-full flex items-center justify-center gap-2"
              >
                <BiHeart /> Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Dropdowns */}
      <div className="hidden lg:block">
        <div
          className={`fixed top-[72px] left-0 right-0 bg-black/70 backdrop-blur-md py-8 transition-all duration-300 z-40 ${
            showWhoDropdown ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onMouseLeave={() => setShowWhoDropdown(false)}
          onMouseEnter={() => setShowWhoDropdown(true)}
        >
          <div className="mx-auto w-5/6">
            <div className="grid grid-cols-3 gap-4">
              {/* Who we are dropdown content */}
              {/* <Link
                href="/who-we-are/organisation-leaders"
                className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
              >
                <div className="text-primarycolor text-3xl mt-1">
                  <BiBuilding />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">
                    Our Organization and leaders
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Who we are, What we stand for and the team
                  </p>
                </div>
              </Link> */}

              <Link
                href="/who-we-are"
                className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
              >
                <div className="text-primarycolor text-3xl mt-1">
                  <BiBuilding />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">About us</h1>
                  <p className="text-gray-300 text-sm">
                    Who we are, What we stand for and the team
                  </p>
                </div>
              </Link>

              {/* <Link
                href="/who-we-are/mission-vision"
                className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
              >
                <div className="text-primarycolor text-3xl mt-1">
                  <BiGroup />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">
                    Our Mission and Vision
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Why we do what we do and what we plan to achieve
                  </p>
                </div>
              </Link> */}

              {/* <Link
                href="/who-we-are/initiatives"
                className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
              >
                <div className="text-primarycolor text-3xl mt-1">
                  <BiChart />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">
                    Our Initiatives
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Why we do what we do and what we plan to achieve
                  </p>
                </div>
              </Link> */}

              <Link
                href="/who-we-are/partners"
                className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
              >
                <div className="text-primarycolor text-3xl mt-1">
                  <FaHandshake />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">
                    Our Partners
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Who we are, What we stand for and the team
                  </p>
                </div>
              </Link>

              {/* <Link
                href="/who-we-are/oppourtunities"
                className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
              >
                <div className="text-primarycolor text-3xl mt-1">
                  <BiHistory />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">
                    Our Opportunities
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Why we do what we do and what we plan to achieve
                  </p>
                </div>
              </Link> */}

              <Link
                href="/who-we-are/stories"
                className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
              >
                <div className="text-primarycolor text-3xl mt-1">
                  <BiAward />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">
                    Our Success Stories
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Why we do what we do and what we plan to achieve
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

       

        <div
          className={`fixed top-[72px] left-0 right-0 bg-black/70 backdrop-blur-md py-8 transition-all duration-300 z-40 ${
            showGiveDropdown ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onMouseLeave={() => setShowGiveDropdown(false)}
          onMouseEnter={() => setShowGiveDropdown(true)}
        >
          <div className="mx-auto w-5/6">
            <div className="grid grid-cols-3 gap-4">
              {/* Get Aid dropdown content */}
              <Link
                href="/donate"
                className="flex items-start gap-3 p-3 hover:bg-[#ffffff10] rounded-md"
              >
                <div className="text-primarycolor text-3xl mt-1">
                  <BiDonateHeart />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">
                    Make a Donation
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Support our cause through financial contributions
                  </p>
                </div>
              </Link>

              <Link
                href="/volunteer"
                className="flex items-start gap-3 p-3 hover:bg-[#ffffff10] rounded-md"
              >
                <div className="text-primarycolor text-3xl mt-1">
                  <BiHeart />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">
                    Volunteer With Us
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Join our team and make a direct impact
                  </p>
                </div>
              </Link>

              <Link
                href="/who-we-are/partners"
                className="flex items-start gap-3 p-3 hover:bg-[#ffffff10] rounded-md"
              >
                <div className="text-primarycolor text-3xl mt-1">
                  <FaHandshake />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">
                    Partner With Us
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Collaborate with us for greater impact
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
