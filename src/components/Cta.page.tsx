import { BiHeart } from "react-icons/bi";

function CtaPage() {
  return (
    <div className="calltoaction">
      <div
        className="w-5/6 mx-auto p-6 sm:p-10 lg:p-20 bg-[#ffffff32] backdrop-blur-sm rounded-3xl border border-white 
        flex flex-col gap-4 justify-center items-center text-center 
        absolute top-[50px] sm:top-[75px] lg:top-[100px] left-0 right-0"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white w-full md:w-3/4 lg:w-2/3">
          Join Us in Making a Difference – Donate, Volunteer, or Partner Today!
        </h1>
        <p className="text-white text-sm sm:text-base px-4">
          Your support provides food, shelter, and hope to those in need.
          Together, we can create lasting change.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            className="bg-primarycolor text-white px-6 sm:px-8 lg:px-10 py-3 rounded-md 
            flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Make a Donation
            <BiHeart className="text-white" />
          </button>
          <button
            className="border border-primarycolor text-primarycolor px-6 sm:px-8 lg:px-10 py-3 rounded-md
            w-full sm:w-auto"
          >
            Talk to us
          </button>
        </div>
      </div>
    </div>
  );
}

export default CtaPage;
