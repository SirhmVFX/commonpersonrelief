import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

function Footer() {
  return (
    <div className="p-24 bg-[#016635]">
      <div className="w-5/6 mx-auto">
        <div className="flex justify-between items-center border-b border-white pb-10">
          <h1 className="text-white text-4xl">info@commonpersonrelief.com</h1>
          <div className="flex gap-4">
            <Link
              href="/"
              className="text-white text-2xl p-2 rounded-full border border-white"
            >
              <BiLogoFacebook />
            </Link>
            <Link
              href="/"
              className="text-white text-2xl p-2 rounded-full border border-white"
            >
              <BiLogoInstagram />
            </Link>
            <Link
              href="/"
              className="text-white text-2xl p-2 rounded-full border border-white"
            >
              <BiLogoTwitter />
            </Link>
            <Link
              href="/"
              className="text-white text-2xl p-2 rounded-full border border-white"
            >
              <BiLogoLinkedin />
            </Link>
          </div>
        </div>

        <div className="flex justify-between pt-10">
          <div className="flex flex-col gap-6 ">
            <h1 className="text-white text-2xl font-medium">
              Lend an helping hand
            </h1>
            <div className="flex gap- flex-col">
              <Link href="/" className="text-[#DCECBA] ">
                Donate
              </Link>
              <Link href="/" className="text-[#DCECBA]">
                Volunteer
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 ">
              <h1 className="text-white text-2xl font-medium">Support</h1>
            </div>
            <div className="flex gap-2 flex-col">
              <Link href="/" className="text-[#DCECBA]">
                FAQ&apos;s
              </Link>
              <Link href="/" className="text-[#DCECBA]">
                Privacy Policy
              </Link>
              <Link href="/" className="text-[#DCECBA]">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 ">
              <h1 className="text-white text-2xl font-medium">Company</h1>
            </div>
            <div className="flex gap-2 flex-col">
              <Link href="/" className="text-[#DCECBA]">
                About us
              </Link>
              <Link href="/" className="text-[#DCECBA]">
                BLogs
              </Link>
              <Link href="/" className="text-[#DCECBA]">
                Services
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 ">
              <h1 className="text-white text-2xl font-medium">Contact Info</h1>
            </div>
            <div className="flex gap-2 flex-col">
              <Link href="/" className="text-[#DCECBA] flex items-center gap-2">
                <CiLocationOn />
                No location yet
              </Link>
              <Link href="/" className="text-[#DCECBA] flex items-center gap-2">
                <CiPhone />
                +91 9876543210
              </Link>
              <Link href="/" className="text-[#DCECBA] flex items-center gap-2">
                <CiMail />
                mail@commonpersonrelief.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
