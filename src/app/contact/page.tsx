import { BsArrowRight } from "react-icons/bs";

export default function Contact() {
  return <div>

    <div className="md:w-5/6 p-4 mx-auto pt-24 md:py-32 md:flex items-center gap-4">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium md:w-1/2">We&apos;d Love to Hear From You</h1>
      <p className="text-gray-500 text-base md:text-lg md:w-1/2">Have questions, suggestions, or want to partner with us? Reach out today and let’s work together to make a difference!</p>
    </div>

    <div className="md:w-5/6 mx-auto py-4 flex md:flex-row flex-col items-center gap-4">
      <div className="w-full flex md:flex-row flex-col gap-8 p-6 md:p-16 bg-gray-50 rounded-lg">
        <form className="w-full flex flex-col gap-4 items-start">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-medium">Leave us your info </h1>
        <input type="text" className="w-full bg-transparent p-4 rounded-md border border-gray-300" placeholder="Your Name" />
        <input type="text" className="w-full bg-transparent p-4 rounded-md border border-gray-300" placeholder="Your Email" />
        <textarea className="w-full bg-transparent p-4 rounded-md border border-gray-300" placeholder="Your Message" rows={5}></textarea>
        <div>
        <input type="checkbox" className="mr-2" />
        <label htmlFor="">You agree to our friendly <span className="text-primarycolor">privacy policy</span></label>
        </div>
        <button className="bg-primarycolor text-white p-2 rounded-md flex items-center gap-2">
          Send Message 
          <BsArrowRight className="text-white" />
        </button>
        
        </form>
       
      </div>
    </div>
  </div>;
}
