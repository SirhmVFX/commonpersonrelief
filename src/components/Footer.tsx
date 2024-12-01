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
    <div className="p-6 lg:p-24 bg-[#016635]">
      <div className="md:w-5/6 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-white pb-6 sm:pb-10 gap-6 sm:gap-0">
          <h1 className="text-white  sm:text-2xl lg:text-4xl text-center sm:text-left break-all">
            info@commonpersonrelief.com
          </h1>
          <div className="flex gap-4 flex-wrap justify-center">
            {[
              { icon: <BiLogoFacebook />, href: "/" },
              { icon: <BiLogoInstagram />, href: "/" },
              { icon: <BiLogoTwitter />, href: "/" },
              { icon: <BiLogoLinkedin />, href: "/" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-white text-xl sm:text-2xl p-2 rounded-full border border-white hover:bg-white/10 transition-colors"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6 sm:pt-10">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h1 className="text-white text-xl sm:text-2xl font-medium">
              Lend an helping hand
            </h1>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-[#DCECBA] hover:text-white transition-colors"
              >
                Donate
              </Link>
              <Link
                href="/"
                className="text-[#DCECBA] hover:text-white transition-colors"
              >
                Volunteer
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <h1 className="text-white text-xl sm:text-2xl font-medium">
              Support
            </h1>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-[#DCECBA] hover:text-white transition-colors"
              >
                FAQ&apos;s
              </Link>
              <Link
                href="/"
                className="text-[#DCECBA] hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-[#DCECBA] hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <h1 className="text-white text-xl sm:text-2xl font-medium">
              Company
            </h1>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-[#DCECBA] hover:text-white transition-colors"
              >
                About us
              </Link>
              <Link
                href="/"
                className="text-[#DCECBA] hover:text-white transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/"
                className="text-[#DCECBA] hover:text-white transition-colors"
              >
                Services
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <h1 className="text-white text-xl sm:text-2xl font-medium">
              Contact Info
            </h1>
            <div className="flex flex-col gap-2">
              {[
                {
                  icon: <CiLocationOn className="text-xl" />,
                  text: "No location yet",
                },
                {
                  icon: <CiPhone className="text-xl" />,
                  text: "+91 9876543210",
                },
                {
                  icon: <CiMail className="text-xl" />,
                  text: "mail@commonpersonrelief.com",
                },
              ].map((contact, index) => (
                <Link
                  key={index}
                  href="/"
                  className="text-[#DCECBA] hover:text-white transition-colors flex items-center gap-2"
                >
                  {contact.icon}
                  <span className="break-all">{contact.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
