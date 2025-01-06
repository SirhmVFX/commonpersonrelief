import Link from "next/link";

function TermsAndConditions() {
    return (
        <div className="md:w-5/6 mx-auto px-4 py-20">
    <section className="rounded-lg p-6">
      <h2 className="text-3xl font-semibold mb-4 text-primarycolor">Terms and Conditions</h2>
      <p className="mb-6">
        Welcome to Common Person Relief. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-2">1. Acceptance of Terms</h3>
      <p>
        By using our website and services, you confirm that you accept these terms and agree to comply with them. If you do not agree, please do not use our services.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-2">2. Use of Our Website</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>You agree to use the website for lawful purposes only.</li>
        <li>You must not misuse the website by knowingly introducing malicious software or other harmful materials.</li>
        <li>We reserve the right to restrict or terminate your access to the website if you violate these terms.</li>
      </ul>

      <h3 className="text-xl font-bold mt-6 mb-2">3. Intellectual Property</h3>
      <p>
        All content on this website, including text, images, logos, and graphics, is the property of Common Person Relief and protected by copyright laws. You may not use, reproduce, or distribute any materials without our prior written consent.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-2">4. Donations and Contributions</h3>
      <p>
        All donations made through this website are voluntary. By donating, you agree to our <Link href="/refund-policy" className="text-blue-600 underline">Refund Policy</Link>, which states that donations are non-refundable except in the case of an error.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-2">5. Limitation of Liability</h3>
      <p>
        We are not responsible for any loss or damage resulting from the use of our website, including technical issues or unauthorized access to your data.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-2">6. Changes to Terms</h3>
      <p>
        We may update these terms periodically. Continued use of our website after changes indicates your acceptance of the revised terms.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-2">7. Contact Us</h3>
      <p>
        If you have questions or concerns about these terms, please contact us at:
      </p>
      <address className="mt-2">
        <p>Email: <a href="mailto:info@commonpersonrelief.org" className="text-blue-600 underline">info@commonpersonrelief.org</a></p>
        <p>Phone: +1 (432) 803-1218</p>
      </address>
    </section>
  </div>
    );
}    
export default TermsAndConditions;