import Films from "@/MyComponents/Films";
import Navbar from "@/MyComponents/Navbar";

const page = () => {
  return (
    <div>
      <div className="pb-40">
        <Navbar dark={true} />
      </div>
      <div className="w-screen h-[60vh] max-md:h-[40vh] relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 w-[130vw] h-[130vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/g0eptwcug-A?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay"
        ></iframe>
      </div>
      <Films />
    </div>
  );
};
export default page;
