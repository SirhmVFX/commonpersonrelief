import { BiMailSend, BiPhone } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

export default function Contact() {
  return <div>

    <div className="w-5/6 mx-auto py-16 md:py-32 flex items-center gap-4">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium w-1/2">We&apos;d Love to Hear From You</h1>
      <p className="text-gray-500 text-base md:text-lg w-1/2">Have questions, suggestions, or want to partner with us? Reach out today and let’s work together to make a difference!</p>
    </div>

    <div className="w-5/6 mx-auto py-16 md:py-32 flex flex-col md:flex-row items-center gap-4">
      <div className="w-full flex gap-8 p-16 bg-gray-50 rounded-lg">
        <form className="w-3/5 flex flex-col gap-4 items-start">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-medium">Leave us your info </h1>
        <input type="text" className="w-full bg-transparent p-2 rounded-md border border-gray-300" placeholder="Your Name" />
        <input type="text" className="w-full bg-transparent p-2 rounded-md border border-gray-300" placeholder="Your Email" />
        <textarea className="w-full bg-transparent p-2 rounded-md border border-gray-300" placeholder="Your Message" rows={5}></textarea>
        <div>
        <input type="checkbox" className="mr-2" />
        <label htmlFor="">You agree to our friendly <span className="text-primarycolor">privacy policy</span></label>
        </div>
        <button className="bg-primarycolor text-white p-2 rounded-md flex items-center gap-2">
          Send Message 
          <BsArrowRight className="text-white" />
        </button>
        
        </form>
        <div className="w-2/5 p-10 bg-white flex flex-col gap-8 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className=" p-2 border border-primarycolor rounded-full">
            <BiMailSend className="text-2xl md:text-3xl lg:text-4xl w-6 h-6 text-primarycolor " />
              
            </div>
          <div className="flex flex-col gap-2 items-start">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">Send us an Email</h1>
            <p className="text-gray-500 text-base md:text-lg">We&apos;d love to hear from you! Please feel free to reach out to us via mail.</p>
            <button className="bg-primarycolor text-white p-2 rounded-md">info@commonpersonrelief.com</button>
          </div>
          </div>

          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="flex items-start gap-4">
            <div className=" p-2 border border-primarycolor rounded-full">
            <BiPhone className="text-2xl md:text-3xl lg:text-4xl w-6 h-6 text-primarycolor " />
              
            </div>
          <div className="flex flex-col gap-2 items-start">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">Give us a call </h1>
            <p className="text-gray-500 text-base md:text-lg">We&apos;re here to help! Don&apos;t hesitate to reach out to us by phone.</p>
            <button className="bg-primarycolor text-white p-2 rounded-md">+234 9023675656327</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
