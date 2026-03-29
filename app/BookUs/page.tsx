import Navbar from "@/MyComponents/Navbar";
import { cormorant_garamod } from "../font";

const page = () => {
  return (
    <div>
      <div className="pb-40">
        <Navbar dark={true} />
      </div>
      <div
        className="w-full bg-[#F4F0ED]  py-20
      "
      >
        <div className="max-w-7xl bg-white  h-120 mx-auto text-center py-20">
          <h1
            className={`text-4xl ${cormorant_garamod.className} tracking-[4] text-black/60 uppercase font-bold`}
          >
            Let’s make your wedding a Wonderful story.
          </h1>
          <p>
            You can draft an email to us on{" "}
            <span className="font-bold">contact@vivahstudios.in </span>, or can
            send us the details by filling the form below.
          </p>
          {/* form */}
          <div className=" flex flex-col items-center justify-center my-20">
            <div>
              <input
                type="text"
                placeholder="Event Dates"
                className="border border-black p-2 w-70 m-2 "
              />
              <input
                type="text"
                placeholder="Name"
                className="border border-black p-2 w-110 "
              />
              <div></div>
              <input
                type="text"
                placeholder="Whatsapp Number"
                className="border border-black p-2 w-100 m-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-black p-2 w-80"
              />
            </div>
            <button className="bg-[#dbd9d5] w-20 h-10 rounded-2xl mt-10">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
