import Image from "next/image";

export default function SerikoSaboOutreach() {
    const images = [
        "/images/outreach/31.jpg",
        "/images/outreach/32.jpg",
        "/images/outreach/33.jpg",
        "/images/outreach/34.jpg",
        "/images/outreach/35.jpg",
        "/images/outreach/36.jpg",
        "/images/outreach/37.jpg",
        "/images/outreach/38.jpg",
        "/images/outreach/39.jpg",
        "/images/outreach/40.jpg",
        "/images/outreach/41.jpg",
        "/images/outreach/42.jpg",
    ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-900">Spreading Hope at Seriki Sabo: A Day of Impactful Outreach</h1>
            <p className="mt-2 text-gray-700">Seriki Sabo - Our Last Stop for that day</p>
            
            <div className="mt-4">
                <Image
                    src="/images/seriko-sabo-1.jpg"
                    alt="Seriko Sabo Outreach"
                    width={1000}
                    height={500}
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>
            
            <p className="mt-4 text-gray-700">
                At Common Person Relief, we believe in the power of community-driven impact. Our mission is to extend a helping hand to those in need, bringing not just resources but also hope, encouragement, and a sense of belonging. On January 14, 2025, we had the incredible opportunity to visit Seriko Sabo, a community where many struggle with daily necessities. Our goal was simple: to provide support, spread kindness, and make a lasting impact.
            </p>
            
            <h2 className="mt-6 text-2xl font-bold text-gray-900">A Mission of Compassion</h2>
            <p className="mt-2 text-gray-700">
                Seriko Sabo is home to many families who face challenges ranging from food insecurity to limited access to healthcare. We knew that even small efforts could make a big difference, so we organized an outreach program focused on food distribution, health awareness, and emotional support.
            </p>
            
            <h2 className="mt-6 text-2xl font-bold text-gray-900">How We Made a Difference</h2>
            <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>✔️ <strong>Food Distribution</strong> – We provided nutritious meals to individuals and families, ensuring they had access to proper nourishment.</li>
                <li>✔️ <strong>Health Awareness & Hygiene Education</strong> – We engaged the community in discussions about hygiene, preventive healthcare, and wellness, empowering them with knowledge to improve their daily lives.</li>
                <li>✔️ <strong>Emotional Support & Encouragement</strong> – Beyond material assistance, we offered words of motivation, reassurance, and encouragement to those who needed it most.</li>
            </ul>
            
            <p className="mt-4 text-gray-700">
                Moments like these reinforce the importance of what we do. It’s not just about distributing materials—it’s about restoring hope and dignity to people who feel forgotten.
            </p>
            
            <h2 className="mt-6 text-2xl font-bold text-gray-900">A Special Thanks to Our Supporters</h2>
            <p className="mt-2 text-gray-700">
                This initiative was made possible by our dedicated volunteers, generous sponsors, and compassionate organizers who put in their time, effort, and resources. Your support fuels our mission to reach more communities and transform more lives.
            </p>
            
            <h2 className="mt-6 text-2xl font-bold text-gray-900">What’s Next?</h2>
            <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>✔️ Expand our outreach programs to more communities.</li>
                <li>✔️ Provide health screenings in future events.</li>
                <li>✔️ Establish long-term support programs for families in need.</li>
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
                #CommunitySupport #GivingBack #Impact #CommonPersonRelief
            </div>
        </div>
    );
}