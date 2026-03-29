import { cormorant_garamod } from "@/app/font";
import Image from "next/image";

function PhotoCard({
  imgSrc,
  title,
  category,
}: {
  imgSrc: string;
  title: string;
  category: string;
}) {
  return (
    <div className="flex flex-col text-black">
      <div className="relative w-154 max-md:w-full h-80 overflow-clip  ">
        <Image
          className="object-cover scale-105 hover:translate-x-3 duration-500"
          src={imgSrc}
          alt="banana"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        ></Image>
      </div>
      <h2 className="mt-6 tracking-widest font-light text-sm text-black/60">
        CROSS-CULTURE - <span className="uppercase">{category}</span>
      </h2>
      <h1
        className={`${cormorant_garamod.className} text-2xl tracking-wider font-light text-black/60`}
      >
        {title}
      </h1>
    </div>
  );
}
export default PhotoCard;
