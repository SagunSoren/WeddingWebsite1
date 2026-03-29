import Image from "next/image";
import Link from "next/link";

function InstagramPhotoCard({
  imagesrc,
  link,
}: {
  imagesrc: string;
  link: string;
}) {
  return (
    <div>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative group  h-120 w-full ">
          <Image
            src={imagesrc}
            alt="gaojhg"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 25vw, 320px"
          ></Image>

          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/30 transition-all duration-500 ease-out"></div>
        </div>
      </Link>
    </div>
  );
}
export default InstagramPhotoCard;
