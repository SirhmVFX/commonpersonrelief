import Image from "next/image";
import { BiCheck } from "react-icons/bi";

export default function About() {
  return (
    <div>
      <div className="md:w-5/6 mx-auto p-4 pt-[90px] md:pt-[90px] h-[600px]">
        <Image
          src="/images/op.jpeg"
          alt="about"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-5/6 px-4 mx-auto py-4 md:flex gap-4">
        <div className="flex flex-col items-start gap-4 md:w-1/2">
          <p className="text-primarycolor text-sm md:text-lg py-2 px-4 rounded-full border border-primarycolor">
            About us
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium">
            Empowering Lives, One Step at a Time
          </h1>
        </div>

        <div className="flex flex-col gap-4 md:w-1/2">
          <p className="text-sm md:text-lg text-gray-500">
            At Common Person Relief, we are driven by a shared commitment to
            uplift the lives of underprivileged individuals across Africa. Since
            our inception, we have worked tirelessly to bridge the gap in access
            to essential resources such as food, education, healthcare, and
            economic opportunities.
          </p>
          <p className="text-sm md:text-lg text-gray-500">
            Our mission is to empower children, youth, and women by addressing
            the root causes of poverty and inequality. Through strategic
            programs and partnerships, we aim to create sustainable solutions
            that bring hope, dignity, and opportunity to those who need it most.
          </p>
        </div>
      </div>

      <div className="md:w-5/6 px-4 mx-auto py-4 md:py-6 md:flex items-center gap-10">
        <div className="md:w-1/2 h-[400px]">
          <Image
            src="/images/hero1.jpeg"
            alt="about"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl md:my-0 mt-6 font-medium">
            What we stand for
          </h1>
          <div className="flex flex-col gap-2 py-2">
            <div className="flex items-center gap-2">
              <BiCheck className="text-xl text-primarycolor border border-primarycolor p-1 w-6 h-6 rounded-full" />
              <h1>Compassion</h1>
            </div>
            <p className="text-sm md:text-lg text-gray-500">
              Putting humanity at the heart of everything we do.
            </p>
          </div>

          <div className="flex flex-col gap-2 py-2">
            <div className="flex items-center gap-2">
              <BiCheck className="text-xl text-primarycolor border border-primarycolor p-1 w-6 h-6 rounded-full" />
              <h1>Equality</h1>
            </div>
            <p className="text-sm md:text-lg text-gray-500">
              Ensuring everyone, regardless of background, has access to basic
              needs.
            </p>
          </div>

          <div className="flex flex-col gap-2 py-2">
            <div className="flex items-center gap-2">
              <BiCheck className="text-xl text-primarycolor border border-primarycolor p-1 w-6 h-6 rounded-full" />
              <h1>Empowerment</h1>
            </div>
            <p className="text-sm md:text-lg text-gray-500">
              Providing tools and support for individuals to build better
              futures.
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-5/6 px-4 mx-auto py-2 md:py-6">
        <div className=" md:flex items-center gap-4 p-4 border-b border-gray-200">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium md:w-1/2">
            Our Impact Areas
          </h1>
          <p className="text-sm md:text-lg text-gray-500 md:w-1/2">
            With the support of dedicated volunteers, partners, and donors,
            we&apos;re creating lasting change one life at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-10">
          <div className="flex flex-col gap-4 p-4 bg-gray-50">
            <h1 className="text-2xl md:text-3xl text-primarycolor font-medium">01</h1>
            <h1 className="text-2xl md:text-3xl font-medium">Feeding programs to combat hunger.</h1>
            <p className="text-sm md:text-lg text-gray-500">
              Providing nutritious meals to combat hunger and improve the
              well-being of vulnerable individuals and families.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-4 bg-gray-50">
            <h1 className="text-2xl md:text-3xl text-primarycolor font-medium">02</h1>
            <h1 className="text-2xl md:text-3xl font-medium">Free education for children in need.</h1>
            <p className="text-sm md:text-lg text-gray-500">
            Offering access to quality education at no cost, ensuring every child has the opportunity to learn and thrive.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-4 bg-gray-50">
            <h1 className="text-2xl md:text-3xl text-primarycolor font-medium">03</h1>
            <h1 className="text-2xl md:text-3xl font-medium">Vocational training and economic empowerment.</h1>
            <p className="text-sm md:text-lg text-gray-500">
            Equipping individuals with skills and resources to achieve financial independence and create sustainable livelihoods.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-4 bg-gray-50">
            <h1 className="text-2xl md:text-3xl text-primarycolor font-medium">04</h1>
            <h1 className="text-2xl md:text-3xl font-medium">Emergency relief initiatives.</h1>
            <p className="text-sm md:text-lg text-gray-500">
            Delivering essential medical care and timely support during crises to save lives and build healthier communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
