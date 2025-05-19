"use client"; // if using App Router

import { useState } from "react";

import { applicationForm } from "../app/actions";

function WortApplicationForm() {

  const [submitted, setSubmitted] = useState(false) 
  const [error, setError] = useState(false)
  const [isPending, setIsPending] = useState(false)

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setIsPending(true)
    const res = await applicationForm(formData)
    if (res.status === "success") {
      setSubmitted(true)
    } else {
      setError(false)
    }
    setIsPending(false)
  }
  
    return (
        <section className="py-12 px-4 max-w-5xl mx-auto">
          {submitted && (
            <div onClick={() => setSubmitted(false)} className="fixed top-0 left-0 bg-black/50 bottom-0 right-0 w-full h-full flex items-center justify-center">
              <div className="bg-white p-6 rounded shadow-lg">
              <p className="text-green-600 mt-4">✅ Application submitted successfully</p>
              </div>
            </div>
          )}
          {error && (
            <div onClick={() => setError(false)} className="fixed top-0 left-0 bg-black/50 bottom-0 right-0 w-full h-full flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg">
            <p className="text-green-600 mt-4">Something went wrong. Please try again.</p>
            </div>
          </div>
          )}
            
    <h2 className="text-3xl font-bold mb-6">WORT Program Registration Form</h2>
    <form className="form  flex flex-col md:grid  md:grid-cols-2 gap-4" onSubmit={(e) => handleRegister(e)}>
      <div>
        <label className="block font-medium ">First Name</label>
        <input type="text" name="firstName" required className="w-full border p-4 rounded-xl" />
      </div>

      <div>
        <label className="block font-medium ">Last Name</label>
        <input type="text" name="lastName" required className="w-full border p-4 rounded-xl" />
      </div>
      <div>
        <label className="block font-medium">Email Address</label>
        <input type="email" name="email" required className="w-full border p-4 rounded-xl" />
      </div>
      <div>
        <label className="block font-medium">Phone Number</label>
        <input type="tel" name="phoneNumber" required className="w-full border p-4 rounded-xl" />
      </div>
      <div>
        <label className="block font-medium">Gender</label>
        <select name="gender" required className="w-full border p-4 rounded-xl">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Prefer not to say</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">State of residence</label>
        <select name="state" required className="w-full border p-4 rounded-xl">
          {["abia", "adamawa", "akwa ibom", "anambra", "bauchi", "bayelsa", "benue", "cross river", "delta", "ebonyi", "edo", "ekiti", "enugu", "gombe", "imo", "jigawa", "kano", "kastina", "katsina", "kebbi", "kogi", "kwara", "lagos", "nasirawa", " Niger", "ogun", "ondo", "osun", "oyo", "plateau", "rivers", "sokoto", "taraba", "yobe", "zamfara"].map((state, index) => (
            <option key={index}>{state}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium">Highest Level of Qualification</label>
        <select name="qualification" required className="w-full border p-4 rounded-xl">
          {["Final Year Undergraduate", "Bachelor’s Degree Graduate", "Polytechnic Graduate", "Other"].map((state, index) => (
            <option key={index}>{state}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium">Current Status</label>
        <select name="currentStatus" required className="w-full border p-4 rounded-xl">
          {["Final Year Undergraduate", "Recent Graduate (within the last 3 years)", "Currently Unemployed", "Employed but looking for better opportunities", "Seeking Internship/First Job"].map((state, index) => (
            <option key={index}>{state}</option>
          ))}
        </select>
      </div>


      <div>
        <label className="block font-medium">Field of Interest</label>
        <select name="fieldOfInterest" required className="w-full border p-4 rounded-xl">
          {["Business", "IT", "Health", "Education", "Other"].map((state, index) => (
            <option key={index}>{state}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium">Do you currently have a CV</label>
        <select name="haveCV" required className="w-full border p-4 rounded-xl">
          {["Yes", "No"].map((state, index) => (
            <option key={index}>{state}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium">Why do you want to join the WORT Program? (Short answer – max 150 words)        </label>
        <textarea name="whyDoYouWant" required className="w-full border p-4 rounded-xl" ></textarea>
      </div>

      <div>
        <label className="block font-medium">What are your top 2 goals for participating in this program?</label>
        <textarea name="topGoals" required className="w-full border p-4 rounded-xl" ></textarea>
      </div>

      <div>
        <label className="block font-medium">How did you hear about the program?</label>
        <select name="howDidYouHear" required className="w-full border p-4 rounded-xl">
          {["CPR Website", "WhatsApp", "Instagram", "Facebook", "Friend/Referral", "Other"].map((state, index) => (
            <option key={index}>{state}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium">Are you available for all virtual sessions (Thursdays 3–5 PM & Saturdays 10 AM–12 PM from June 9th – July 11, 2025)?        </label>
        <select name="available" required className="w-full border p-4 rounded-xl">
          {["Yes", "No"].map((state, index) => (
            <option key={index}>{state}</option>
          ))}
        </select>
      </div>


      <div>
        <label className="block font-medium">Do you have access to a smartphone or computer with internet for virtual participation?</label>
        <select name="haveAccess" required className="w-full border p-4 rounded-xl">
          {["Yes", "No"].map((state, index) => (
            <option key={index}>{state}</option>
          ))}
        </select>
      </div>


      {/* Add remaining form fields similarly... */}
      <div className="col-span-2">
        <label className="flex items-center space-x-2 ">
          <input type="checkbox" required name="agree"/>
          <span>I agree to participate in the WORT Program and join the WhatsApp/Email community for updates.</span>
        </label>
      </div>
      <button type="submit" className="bg-primarycolor text-white px-6 py-2 rounded col-span-2 w-fit">{isPending ? "Submitting..." : "Submit Registration"}</button>
    </form>
    {/* {status === "success" && <p className="text-green-600 mt-4">✅ Application submitted successfully</p>} */}
    {/* {status === "error" && <p className="text-red-600 mt-4">❌ Something went wrong. Please try again.</p>} */}
  </section>
    )
}

export default WortApplicationForm