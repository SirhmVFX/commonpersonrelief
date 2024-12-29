import Image from "next/image";
import { BiCheck } from "react-icons/bi";

function WhoWeAre() {
  return (
    <div>
      
      <div className="w-5/6 mx-auto py-[80px] lg:py-[120px] gap-4">
        <div className="flex flex-col items-start gap-4 ">
          <p className="text-primarycolor text-sm md:text-lg py-2 px-4 rounded-full border border-primarycolor">
            About us
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium">
            Empowering Lives, One Step at a Time
          </h1>
        </div>

        <div className="flex flex-col gap-4 ">
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

      
      <div className="w-5/6 mx-auto">
        <div className="w-full h-[200px] sm:h-[300px] md:h-[400px]">
          <Image
            src={"/images/corp.jpeg"}
            alt="Organisation Leaders"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="py-6 sm:py-8 md:py-10 flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
            <h1 className="text-xl sm:text-2xl font-medium">
              What lead to the establishment of Common Person Relief
            </h1>
          </div>
          <p className="text-gray-500 text-base sm:text-lg">
            Common Person Relief was founded with the mission to support
            underprivileged individuals across Africa, providing access to
            essential resources such as education, healthcare, and economic
            empowerment. We are dedicated to helping children, youth, and women
            overcome challenges related to poverty, lack of education, and
            limited opportunities. Our focus is on creating sustainable
            solutions that improve lives and uplift communities, ensuring that
            everyone has the chance to thrive and achieve their full potential.
          </p>
        </div>
        <div className="py-6 sm:py-8 md:py-10 flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
            <h1 className="text-xl sm:text-2xl font-medium">
              How Common Person Relief plans to transform others
            </h1>
          </div>
          <p className="text-gray-500 text-base sm:text-lg">
            Common Person Relief plans to transform lives by focusing on three
            key areas: education, economic empowerment, and health awareness. We
            aim to provide free education to underserved children, ensuring they
            have the tools to build brighter futures. Through vocational
            training and support programs, we will empower individuals with
            skills that enhance their economic opportunities. Additionally, we
            will raise health awareness, addressing key issues like nutrition
            and sanitation, to improve overall well-being. By providing these
            essential services, we strive to create lasting change, helping
            individuals and communities rise above poverty and reach their full
            potential.
          </p>
        </div>
      </div>
      
      <div className="w-5/6 mx-auto py-16 md:py-32">
        <div className=" md:flex items-center gap-4 p-4 border-b border-gray-200">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium md:w-1/2">
            Our Initiatives
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

      <div className="w-5/6 md:h-screen flex flex-col justify-center mx-auto py-10 md:py-20  ">
        <div className="justify-center items-center  flex flex-col md:flex-row md:gap-10">
          <div className="w-full pt-10 md:pt-0 md:w-1/2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium py-6 md:py-10 border-b border-gray-200">
              Our Vision
            </h1>
            <p className="text-gray-500 text-base md:text-lg py-6">
              Our vision is to create a society where children, youth, and women
              have equal access to essential services, including quality
              healthcare, economic empowerment, education, clean water, and
              climate resilience, regardless of their gender or religion.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium py-6 md:py-10 border-b border-gray-200">
              Our Mission
            </h1>
            <p className="text-gray-500 text-base md:text-lg py-6">
              We are committed to creating opportunities for children, youth,
              and women to benefit from initiatives focused on education,
              quality healthcare, climate change, water access, and economic
              empowerment.
            </p>
          </div>
        </div>

        <div className=" py-8 md:py-16 flex flex-col  justify-center md:flex-row gap-6 md:gap-10 items-center">
          <div className="flex flex-col justify-between gap-4 w-full md:w-1/3">
            <div>
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Integrity</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Honesty and strong moral principles guide us
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div>
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Teamwork</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Together we can achieve anything
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/3">
            <div>
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Passion</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                A consistent desire to transform bad to good
              </p>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div>
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl  font-medium">Goodwill</h1>
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                To build good long-lasting legacy
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-[200px] mt-6 md:mt-0">
            <Image
              src="/images/mis.jpeg"
              alt="mission-vision"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
