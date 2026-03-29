import { cormorant_garamod, cormorant_garamod_italic } from "@/app/font";
import Image from "next/image";

function BlogCard({
  title,
  story,
  imgSrc,
}: {
  title: string;
  story: string;
  imgSrc: string;
}) {
  return (
    <div>
      {/* Container for the Image */}
      <div className="relative w-full md:w-[400px] h-80 overflow-hidden">
        <Image
          src={imgSrc}
          alt="Blog Cover"
          fill
          // IMPORTANT: Since you fixed the width to 400px on desktop,
          // your sizes should reflect that (400px) instead of 50vw.
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-500 ease-in-out hover:scale-110 hover:translate-x-2"
        />
      </div>

      {/* Container for the Text */}
      <div className="w-full md:w-[400px] max-md:p-4">
        <p
          className={`text-xl ${cormorant_garamod_italic.className} mt-6 text-gray-500`}
        >
          Blog - SubhVivah Studios
        </p>
        <h1
          className={`text-xl ${cormorant_garamod.className} tracking-[3px] uppercase`}
        >
          {title}
        </h1>
        <p className="mt-4 text-sm text-black/60 line-clamp-3">{story}</p>
        <p className="mt-6 text-sm text-black/50 font-bold cursor-pointer hover:text-black transition-colors">
          READ MORE
        </p>
      </div>
    </div>
  );
}
export default BlogCard;
