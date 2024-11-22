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
} from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [showWhoDropdown, setShowWhoDropdown] = useState(false);
  const [showServeDropdown, setShowServeDropdown] = useState(false);
  const [showGiveDropdown, setShowGiveDropdown] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showWhoDropdown || showServeDropdown || showGiveDropdown
            ? "bg-black/30 backdrop-blur-md"
            : "bg-transparent"
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
                href="/"
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

      <div
        className={`fixed top-[72px] left-0 right-0 bg-black/30 backdrop-blur-md py-8 transition-all duration-300 z-40 ${
          showWhoDropdown ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onMouseLeave={() => setShowWhoDropdown(false)}
        onMouseEnter={() => setShowWhoDropdown(true)}
      >
        <div className="mx-auto w-5/6">
          <div className="grid grid-cols-3 gap-4">
            <Link
              href="/organization-leaders"
              className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
            >
              <div className="text-primarycolor text-3xl mt-1">
                <BiBuilding />
              </div>
              <div>
                <h1 className="text-2xl text-white font-bold ">
                  Our Organization and leaders
                </h1>
                <p className="text-gray-300 text-sm">
                  Who we are, What we stand for and the team
                </p>
              </div>
            </Link>

            <Link
              href="/mission-vision"
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
              href="/initiatives"
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
              href="/partners"
              className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
            >
              <div className="text-primarycolor text-3xl mt-1">
                <FaHandshake />
              </div>
              <div>
                <h1 className="text-2xl text-white font-bold">Our Partners</h1>
                <p className="text-gray-300 text-sm">
                  Who we are, What we stand for and the team
                </p>
              </div>
            </Link>

            <Link
              href="/opportunities"
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
              href="/stories"
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
            <Link
              href="/emergency-relief"
              className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
            >
              <div className="text-primarycolor text-3xl mt-1">
                <BiFirstAid />
              </div>
              <div>
                <h1 className="text-2xl text-white font-bold">
                  Emergency Relief
                </h1>
                <p className="text-gray-300 text-sm">
                  Immediate assistance during crisis situations
                </p>
              </div>
            </Link>

            <Link
              href="/food-programs"
              className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
            >
              <div className="text-primarycolor text-3xl mt-1">
                <BiFoodMenu />
              </div>
              <div>
                <h1 className="text-2xl text-white font-bold">Food Programs</h1>
                <p className="text-gray-300 text-sm">
                  Nutritional support and meal services
                </p>
              </div>
            </Link>

            <Link
              href="/shelter"
              className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
            >
              <div className="text-primarycolor text-3xl mt-1">
                <BiHome />
              </div>
              <div>
                <h1 className="text-2xl text-white font-bold">
                  Shelter Services
                </h1>
                <p className="text-gray-300 text-sm">
                  Safe housing and accommodation support
                </p>
              </div>
            </Link>

            <Link
              href="/education"
              className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
            >
              <div className="text-primarycolor text-3xl mt-1">
                <BiBook />
              </div>
              <div>
                <h1 className="text-2xl text-white font-bold">
                  Education Support
                </h1>
                <p className="text-gray-300 text-sm">
                  Learning resources and academic assistance
                </p>
              </div>
            </Link>

            <Link
              href="/healthcare"
              className="flex items-start gap-3 p-8 hover:bg-[#ffffff10] rounded-md"
            >
              <div className="text-primarycolor text-3xl mt-1">
                <BiPulse />
              </div>
              <div>
                <h1 className="text-2xl text-white font-bold">
                  Healthcare Services
                </h1>
                <p className="text-gray-300 text-sm">
                  Medical assistance and health programs
                </p>
              </div>
            </Link>

            <Link
              href="/counseling"
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
              href="/partner"
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
    </>
  );
}

export default Header;
