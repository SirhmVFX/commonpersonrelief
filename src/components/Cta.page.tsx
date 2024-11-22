import { BiHeart } from "react-icons/bi";

function CtaPage() {
  return (
    <div className="calltoaction">
      <div className="w-5/6 mx-auto p-20 bg-[#ffffff32] backdrop-blur-sm rounded-3xl  border border-white flex flex-col gap-4 justify-center items-center text-center absolute top-[100px] left-0 right-0">
        <h1 className="text-5xl text-white w-2/3 ">
          Join Us in Making a Difference – Donate, Volunteer, or Partner Today!
        </h1>
        <p className="text-white">
          Your support provides food, shelter, and hope to those in need.
          Together, we can create lasting change.
        </p>
        <div className="flex gap-4">
          <button className="bg-primarycolor text-white px-10 py-3 rounded-md flex items-center gap-2">
            Make a Donation
            <BiHeart className="text-white" />
          </button>
          <button className=" border border-primarycolor text-primarycolor px-10 py-3 rounded-md">
            Talk to us
          </button>
        </div>
      </div>
    </div>
  );
}

export default CtaPage;
