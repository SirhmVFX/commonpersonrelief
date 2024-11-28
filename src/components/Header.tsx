"use client";
import Image from "next/image";
import Link from "next/link";
import {
  BiHeart,
  BiBuilding,
  BiGroup,
  BiChart,
  BiHistory,
  BiAward,
  BiFirstAid,
  BiFoodMenu,
  BiHome,
  BiBook,
  BiPulse,
  BiConversation,
  BiDonateHeart,
  BiX,
  BiMenu,
} from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";

function Header() {
  const [showWhoDropdown, setShowWhoDropdown] = useState(false);
  const [showServeDropdown, setShowServeDropdown] = useState(false);
  const [showGiveDropdown, setShowGiveDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showWhoDropdown ||
          showServeDropdown ||
          showGiveDropdown ||
          isMobileMenuOpen ||
          isScrolled
            ? "bg-black/30 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto w-5/6 flex justify-between items-center p-4">
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
                href="/"
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
              Get Aid
            </Link>
            <Link className="text-white hover:text-primarycolor " href="/about">
              About Us
            </Link>
            <Link className="text-white hover:text-primarycolor " href="/contact">
              Contact Us
            </Link>
            <Link className="text-white hover:text-primarycolor " href="/who-we-are/stories">
              News and Events
            </Link>
            <Link className="text-white hover:text-primarycolor " href="/volunteer">
              Volunteer
            </Link>
            <Link href="/donate" className="bg-primarycolor text-white p-3 rounded-md">
              <BiHeart />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <CgClose /> : <BiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="w-5/6 mx-auto py-4 space-y-4">
            <div className="space-y-4">
              <div>
                <button
                  onClick={() => setShowWhoDropdown(!showWhoDropdown)}
                  className="text-white hover:text-primarycolor w-full text-left py-2 flex justify-between items-center"
                >
                  Who we are
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
                    href="/organisation-leaders"
                    className="block text-white hover:text-primarycolor py-2"
                  >
                    Our Organization and leaders
                  </Link>
                  <Link
                    href="/who-we-are/mission-vision"
                    className="block text-white hover:text-primarycolor py-2"
                  >
                    Our Mission and Vision
                  </Link>
                </div>
              </div>

              <div>
                <button
                  onClick={() => setShowServeDropdown(!showServeDropdown)}
                  className="text-white hover:text-primarycolor w-full text-left py-2 flex justify-between items-center"
                >
                  What we serve
                  <span className="text-xl">
                    {showServeDropdown ? <BiX /> : <BiMenu />}
                  </span>
                </button>
                <div
                  className={`pl-4 space-y-2 ${
                    showServeDropdown ? "block" : "hidden"
                  }`}
                >
                  <Link
                    href="/emergency-relief"
                    className="block text-white hover:text-primarycolor py-2"
                  >
                    Emergency Relief
                  </Link>
                  <Link
                    href="/what-we-serve/#food-programs"
                    className="block text-white hover:text-primarycolor py-2"
                  >
                    Food Programs
                  </Link>
                </div>
              </div>

              <div>
                <button
                  onClick={() => setShowGiveDropdown(!showGiveDropdown)}
                  className="text-white hover:text-primarycolor w-full text-left py-2 flex justify-between items-center"
                >
                  Get Aid
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
                    className="block text-white hover:text-primarycolor py-2"
                  >
                    Make a Donation
                  </Link>
                  <Link
                    href="/volunteer"
                    className="block text-white hover:text-primarycolor py-2"
                  >
                    Volunteer With Us
                  </Link>
                </div>
              </div>

              <Link
                href="/about"
                className="block text-white hover:text-primarycolor py-2"
              >
                About Us
              </Link>

              <Link
                href="/"
                className="block text-white hover:text-primarycolor py-2"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="block text-white hover:text-primarycolor py-2"
              >
                News and Events
              </Link>
              <Link
                href="/"
                className="block text-white hover:text-primarycolor py-2"
              >
                Volunteer
              </Link>
              <Link href={"/donate"} className="bg-primarycolor text-white p-3 rounded-md w-full flex items-center justify-center gap-2">
                <BiHeart /> Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Dropdowns */}
      <div className="hidden lg:block">
        <div
          className={`fixed top-[72px] left-0 right-0 bg-black/30 backdrop-blur-md py-8 transition-all duration-300 z-40 ${
            showWhoDropdown ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onMouseLeave={() => setShowWhoDropdown(false)}
          onMouseEnter={() => setShowWhoDropdown(true)}
        >
          <div className="mx-auto w-5/6">
            <div className="grid grid-cols-3 gap-4">
              {/* Who we are dropdown content */}
              <Link
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
              </Link>

              <Link
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
              </Link>

              <Link
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
              </Link>

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

              <Link
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
              </Link>

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
          className={`fixed top-[72px] left-0 right-0 bg-black/30 backdrop-blur-md py-8 transition-all duration-300 z-40 ${
            showServeDropdown ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onMouseLeave={() => setShowServeDropdown(false)}
          onMouseEnter={() => setShowServeDropdown(true)}
        >
          <div className="mx-auto w-5/6">
            <div className="grid grid-cols-3 gap-4">
              {/* What we serve dropdown content */}

              <Link
                href="/what-we-serve/#food-programs"
                className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
              >
                <div className="text-primarycolor text-3xl mt-1">
                  <BiFoodMenu />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">
                    Feeding the Hungry
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Nutritional support and meal services
                  </p>
                </div>
              </Link>

              <Link
                href="/what-we-serve/#economic-empowerment"
                className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
              >
                <div className="text-primarycolor text-3xl mt-1">
                  <BiFirstAid />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">
                    Economic Empowerment
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Skills development and job placement
                  </p>
                </div>
              </Link>

              <Link
                href="/what-we-serve/#clothing-drive"
                className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
              >
                <div className="text-primarycolor text-3xl mt-1">
                  <BiHome />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">
                    Clothing Drive
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Providing clothing to the needy
                  </p>
                </div>
              </Link>

              <Link
                href="/what-we-serve/#education-support"
                className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
              >
                <div className="text-primarycolor text-3xl mt-1">
                  <BiBook />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">
                    Education and Skills Training
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Learning resources and academic assistance
                  </p>
                </div>
              </Link>

              <Link
                href="/what-we-serve/#emergency-response"
                className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
              >
                <div className="text-primarycolor text-3xl mt-1">
                  <BiPulse />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">
                    Emergency Response
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Giving immediate assistance during crisis situations
                  </p>
                </div>
              </Link>

              <Link
                href="/what-we-serve/#counseling-support"
                className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
              >
                <div className="text-primarycolor text-3xl mt-1">
                  <BiConversation />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">
                    Counseling Support
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Mental health and emotional support services
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`fixed top-[72px] left-0 right-0 bg-black/30 backdrop-blur-md py-8 transition-all duration-300 z-40 ${
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
