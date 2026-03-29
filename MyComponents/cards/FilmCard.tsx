import Image from "next/image";
import Link from "next/link";
import { FaRegCirclePlay } from "react-icons/fa6";

function FilmCard({
  title,
  link,
  imageSrc,
}: {
  title: string;
  link: string;
  imageSrc: string;
}) {
  return (
    <div className="mb-10 mt-10">
      <Link href={link}>
        <div className="relative h-130 lg:w-78 hover:scale-105 duration-500 shadow-xl">
          <Image
            src={imageSrc}
            alt="banbanolk"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />

          {/* play icon */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Play Icon Wrapper with semi-transparent background for contrast */}
            <FaRegCirclePlay size={50} className="text-white" />
          </div>
        </div>
        <div className="text-center mt-6">{/* <p>{title}</p> */}</div>
      </Link>
    </div>
  );
}
export default FilmCard;
