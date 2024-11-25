import CtaPage from "@/components/Cta.page";
import Image from "next/image";
import { CgMail } from "react-icons/cg";

export default function Oppourtunities() {
  return (
    <div>
      <div className="w-5/6 mx-auto py-16 md:py-32 flex flex-col items-center gap-4">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium">
          Join the visionary team
        </h1>
        <p className="text-gray-500 text-base md:text-lg">
          Apply to be a nonprofit board members
        </p>
        <div className="flex items-center gap-2 bg-gray-100 w-full md:w-2/4 p-2 rounded-md">
          <CgMail className="text-gray-500 text-4xl" />
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full p-2 focus:outline-none text-sm md:text-base rounded-full bg-transparent"
          />
          <button className="bg-primarycolor px-4 text-white p-2 rounded-md flex-shrink-0">
            Book a free call
          </button>
        </div>
      </div>

      <div className="w-5/6 mx-auto py-16 md:py-32 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/hero2.png"
            alt="oppourtunities"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium">
            Nonprofit Organization Board Opportunities
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            Common Person Relief is seeking passionate individuals from around
            the world to join our board and help make a lasting difference in
            the lives of underprivileged communities. Since our inception, we’ve
            been dedicated to improving the lives of those in need across
            Africa, and with your support, we can expand our impact even
            further.
          </p>
        </div>
      </div>

      <div className="w-5/6 mx-auto py-16 md:py-32 flex flex-col gap-4">
        <h1 className="text-3xl md:text-5xl lg:text-7xl ">
          Why you need to join a nonprofit volunteer Board member positions
        </h1>
        <ul className="list-disc list-inside text-gray-500 text-base md:text-lg">
          <li>
            Make a Real Impact – Help create lasting change in underserved
            communities.
          </li>
          <li>
            Expand Your Network – Connect with like-minded professionals
            dedicated to social good.
          </li>
          <li>
            Find Personal Fulfillment – Experience the satisfaction of giving
            back and making a difference.
          </li>
          <li>
            Global Reach – Contribute to a global movement and impact
            communities worldwide.
          </li>
          <li>
            Develop Skills – Gain leadership and strategic experience in a
            non-profit setting in a non-profit setting.
          </li>
        </ul>
      </div>

      <CtaPage />
    </div>
  );
}
