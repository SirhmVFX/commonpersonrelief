import Button from "@/components/Button";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <div className="md:w-5/6 p-4 mx-auto pt-24 md:py-32 md:flex items-center gap-4">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium md:w-1/2">
          We&apos;d Love to Hear From You
        </h1>
        <p className="text-gray-500 text-base md:text-lg md:w-1/2">
          Have questions, suggestions, or want to partner with us? Reach out
          today and let’s work together to make a difference!
        </p>
      </div>

      <div className="md:w-5/6 mx-auto py-4 flex md:flex-row flex-col items-center gap-4">
        <div className=" flex md:flex-row flex-col gap-8 p-6 rounded-lg w-1/2">
          <form className="w-full flex flex-col gap-4 items-start">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-medium">
              Leave us your info{" "}
            </h1>
            <input
              type="text"
              className="w-full bg-transparent p-4 rounded-md border border-gray-300"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="w-full bg-transparent p-4 rounded-md border border-gray-300"
              placeholder="Your Email"
            />
            <textarea
              className="w-full bg-transparent p-4 rounded-md border border-gray-300"
              placeholder="Your Message"
              rows={5}
            ></textarea>
            <div>
              <input type="checkbox" className="mr-2" />
              <label htmlFor="">
                You agree to our friendly{" "}
                <span className="text-primarycolor">privacy policy</span>
              </label>
            </div>
            <Button
              type="link"
              url="/who-we-are"
              title="Send Message"
              classname="bg-primarycolor text-white"
            />
          </form>
        </div>

        <div className="w-1/2 flex flex-col gap-12">
          

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl  font-medium">Office Address</h1>

            <p className="text-gray-700 text-base  lg:text-lg">
              <span className="font-bold">U.S.A:</span> 734 Felicity Pl, Wylie,
              Texas
              <br />
              <span className="font-bold">Nigeria:</span> No 2 Dogo Sawmill
              Road, Dogo Bus Stop Apata, Ibadan, Oyo State
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl  font-medium">Phone Number: </h1>

            <p className="text-gray-700  text-base  lg:text-lg">
            +1 (432) 803-1218,
              <br />
              +234-808-826-3385
            </p>
          </div>


          <div className="flex flex-col gap-2">
            <h1 className="text-2xl  font-medium">Email Address:  </h1>

            <p className="text-gray-700 text-base  lg:text-lg">
            Info@commonpersonrelief.org

            </p>
          </div>
          </div>


          <div className="flex flex-col gap-2">
            <h1 className="text-2xl  font-medium">Social Media Links  </h1>

            

            <div className="flex gap-4">
            <Link href={"https://web.facebook.com/profile.php?id=61570392260899"} className="text-primarycolor">Facebook</Link>
            <Link href={"https://www.instagram.com/cpr_inc_hq/"} className="text-primarycolor">Instagram </Link>
            <Link href={"https://x.com/CPR_INC_HQ"} className="text-primarycolor">LinkedIn</Link>
            <Link href={"https://www.linkedin.com/company/common-person-relief/posts/?feedView=all"} className="text-primarycolor">Twitter/X</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
