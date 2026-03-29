import { cormorant_garamod } from "@/app/font";
import PhotoCard from "./cards/PhotoCard";
import { photoGallery } from "@/data/category";
import Link from "next/link";

function BeautfiulPhotographs() {
  return (
    <div className="w-full mt-16 mb-20">
      <div className="text-center text-black max-w-7xl  mx-auto">
        <h1
          className={`text-4xl text-[#4D504A] ${cormorant_garamod.className} tracking-widest uppercase mb-6`}
        >
          Your Love, Our passion, Beautiful photographs
        </h1>
        <p className={`font-extralight text-black/60 leading-6 text-sm mb-10`}>
          Welcome to Mystic Studios, where we capture the beauty, emotion, and
          magic of your special day. As professional wedding photographers, we
          believe that your wedding is more than just a day, it's a celebration
          of your love story. Allow us to take you on a visual journey through
          the most important day of your life, and to create a lasting legacy of
          your love.
        </p>
      </div>
      <div className=" flex items-center justify-center  ">
        <div className="grid grid-cols-1 xl:grid-cols-2 max-w-7xl mx-auto gap-10">
          {photoGallery.map((photo) => (
            <Link
              key={photo.id}
              href={`/Photography/${photo.category}/${photo.id}`}
            >
              <PhotoCard
                imgSrc={photo.coverImage}
                title={photo.title}
                category={photo.category}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default BeautfiulPhotographs;
