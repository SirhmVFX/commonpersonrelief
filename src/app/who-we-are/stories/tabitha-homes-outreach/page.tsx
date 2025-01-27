import Image from "next/image";

export default function TabithaHomesOutreach() {
    const images = [
        "/images/outreach/21.jpg",
        "/images/outreach/22.jpg",
        "/images/outreach/23.jpg",
        "/images/outreach/24.jpg",
        "/images/outreach/25.jpg",
        "/images/outreach/26.jpg",
        "/images/outreach/27.jpg",
        "/images/outreach/28.jpg",
      
      ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900">Bringing Relief and Smiles: Our Outreach at Tabitha Homes</h1>
      <p className="mt-2 text-gray-700">After Oni and Sons we headed to Tabitha Homes</p>
      
      <div className="mt-4">
        <Image
          src="/images/tabitha-homes-1.jpg"
          alt="Tabitha Homes Outreach"
          width={1000}
          height={500}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      
      <p className="mt-4 text-gray-700">
        Acts of kindness, no matter how small, can change lives. This belief drove our outreach at Tabitha Homes on January 14, 2025, where we joined hands to support vulnerable communities. The experience was one of connection, learning, and transformation—not just for the beneficiaries but for our team as well.
      </p>
      
      <h2 className="mt-6 text-2xl font-bold text-gray-900">Why We Chose Tabitha Homes</h2>
      <p className="mt-2 text-gray-700">
        Tabitha Homes is an organization dedicated to helping disadvantaged individuals, including orphans, widows, and struggling families. We knew that partnering with them would amplify our impact and ensure that help reaches those who need it the most.
      </p>
      
      <h2 className="mt-6 text-2xl font-bold text-gray-900">Our Outreach Activities</h2>
      <ul className="mt-2 list-disc list-inside text-gray-700">
        <li>✔️ <strong>Food Supplies</strong> – We provided essential food items to struggling families, ensuring they had enough to eat for the coming days.</li>
      </ul>
      
      <p className="mt-4 text-gray-700">
        This showed us a simple truth: what may seem small to us can mean the world to someone else.
      </p>
      
      <h2 className="mt-6 text-2xl font-bold text-gray-900">Gratitude to Our Supporters</h2>
      <p className="mt-2 text-gray-700">
        This event wouldn’t have been possible without the incredible efforts of our volunteers, donors, and partners. You are the backbone of these initiatives, and we appreciate your dedication to making the world a better place.
      </p>
      
      <h2 className="mt-6 text-2xl font-bold text-gray-900">What’s Next?</h2>
      <ul className="mt-2 list-disc list-inside text-gray-700">
        <li>✔️ Expanding food security programs to reach more communities.</li>
        <li>✔️ Strengthening our partnerships with other NGOs to increase impact.</li>
        <li>✔️ Establishing mentorship programs for children in need.</li>
      </ul>
      
     <section className="p-6 lg:p-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">📸 Swipe through the pictures to witness the love, support, and impact shared on this day!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div key={index} className="w-full h-64 relative">
                <Image src={src} alt={`Outreach ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
            ))}
          </div>
        </section>
      
     
      <div className="mt-4 text-gray-600 text-sm">
        #CommunityEngagement #Outreach #GivingBack #SocialImpact #CommonPersonRelief
      </div>
    </div>
  );
}
