import Image from "next/image";
import { BiCheck } from "react-icons/bi";

function WhoWeAre() {
  const standFor = [
    {
      id: 1,
      title: "Equity & Inclusion",
      desc: "We prioritize the underserved, ensuring that no one is left behind.",
    },
    {
      id: 2,
      title: "Compassion & Dignity",
      desc: "We treat every individual with empathy and respect, recognizing their inherent worth.",
    },
    {
      id: 3,
      title: "Community-Led Development",
      desc: "We work with communities, not just for them—co-designing solutions that reflect local realities.",
    },
    {
      id: 4,
      title: "Transparency & Accountability",
      desc: "We uphold integrity in our operations, partnerships, and use of resources.",
    },
    {
      id: 5,
      title: "Sustainability",
      desc: "We invest in long-term solutions that foster self-reliance and lasting impact.",
    },
  ];

  return (
    <div>
      <div className="md:w-5/6 mx-auto p-4 pt-[80px] lg:pt-[120px] gap-4">
        <div className="flex flex-col items-start gap-4 ">
          <p className="text-primarycolor text-sm md:text-lg py-2 px-4 rounded-full border border-primarycolor">
            About us
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium my-2">
            Who we are
          </h1>
        </div>

        <div className="flex flex-col gap-4 ">
          <p className="text-sm md:text-lg text-gray-500">
            Common Person Relief (CPR) is a nonprofit organization dedicated to
            uplifting vulnerable communities across Africa through inclusive and
            sustainable development programs. We exist to serve the “common
            person”—individuals and families who are often left behind due to
            poverty, marginalization, and limited access to basic services.
            Founded with a deep belief in equity, compassion, and dignity, CPR
            empowers people to break free from systemic barriers and build a
            better future for themselves and their communities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
            <div className="p-10 bg-gray-50/50 rounded-xl">
              <h1 className="text-xl md:text-3xl lg:text-5xl font-medium my-2">
                Our Mission
              </h1>
              <p className="text-sm md:text-lg text-gray-500">
                To uplift and empower vulnerable communities in Africa through
                grassroots, sustainable development programs.
              </p>
            </div>
            <div className="p-10 bg-gray-50/50 rounded-xl">
              <h1 className="text-xl md:text-3xl lg:text-5xl font-medium my-2">
                Our Vision
              </h1>
              <p className="text-sm md:text-lg text-gray-500">
                A world where every person—regardless of background or
                circumstance—has the opportunity to live with dignity, achieve
                their potential, and contribute to a thriving, resilient
                community.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-5/6 p-4 mx-auto flex flex-col gap-20">
        <div className="w-full h-[200px] sm:h-[300px] md:h-[400px]">
          <Image
            src={"/images/corp.jpeg"}
            alt="Organisation Leaders"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-medium my-2">
            What We Stand For
          </h1>
          <p className="text-sm md:text-lg text-gray-500">
            We are guided by core values that shape our actions and
            relationships:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {standFor.map((stand) => (
            <div key={stand.id} className=" p-4 flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <BiCheck className="text-xl sm:text-2xl text-green-500 border border-green-500 rounded-full p-1 flex-shrink-0" />
                <h1 className="text-xl sm:text-2xl font-medium text-black/80">
                  {stand.title}
                </h1>
              </div>
              <p className="text-gray-400 text-base sm:text-lg">{stand.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-5/6 p-4 mx-auto flex flex-col gap-4 mb-10">
      <div className="flex flex-col justify-center items-center"></div>
        <h1 className="text-xl md:text-3xl lg:text-5xl font-medium my-2 ">
          What Makes Us Different
        </h1>
        <p className="text-sm md:text-lg text-gray-500">
          At CPR, we believe lasting change begins at the grassroots. Our
          approach is deeply community-centered—we listen first, then act. We
          collaborate with local leaders, schools, healthcare providers, and
          families to design and implement programs that are practical,
          inclusive, and relevant. Whether we’re drilling boreholes in
          water-scarce regions, distributing school supplies, supporting digital
          literacy for youth, or providing emergency food relief—our work is
          driven by the lived experiences of those we serve. We don’t just
          provide aid—we empower.
        </p>
        </div>
     
    </div>
  );
}

export default WhoWeAre;
