import { cormorant_garamod, cormorant_garamod_italic } from "@/app/font";
import InstagramPhotoCard from "./cards/InstagramPhotoCard";
import { FaInstagram } from "react-icons/fa";
import { instagramData } from "@/data/instagramData";
import Link from "next/link";

function FollowInstagram() {
  return (
    <div className="">
      <div className="text-center">
        <h1 className={`text-4xl ${cormorant_garamod.className} tracking-[7]`}>
          FOLLOW US ON INSTAGRAM
        </h1>
        <p
          className={`${cormorant_garamod_italic.className} text-2xl tracking-wide mb-10`}
        >
          @subhvivah_photography
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 max-lg:grid-cols-2 md:gap-2 md:p-10 py-10">
          {instagramData.map((item) => (
            <InstagramPhotoCard
              key={item.id}
              imagesrc={item.imagesrc}
              link={item.link}
            />
          ))}
        </div>
      </div>
      <div className="text-white text-center mb-10">
        <Link
          href={"https://instagram.com/p/abc1"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#acaca9] w-50 p-2 rounded-sm mx-auto flex items-center justify-center gap-3">
            <FaInstagram />
            <h1 className="text-sm">Follow on instagram</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default FollowInstagram;
