import Image from "next/image";

function ClinetReviewCard({
  imageSrc,
  review,
  clientName,
}: {
  imageSrc: string;
  review: string;
  clientName: string;
}) {
  return (
    <div className="max-w-7xl h-130 flex max-md:flex-col items-center max-md:pb-10 max-md:bg-[#F2F3F0]">
      <div className="relative h-110 w-1/2 max-md:w-full md:shadow-xl ">
        <Image
          src={imageSrc}
          alt="banana"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover "
          priority
        ></Image>
      </div>
      <div className="w-1/2 md:w-full text-center max-w-md mx-auto text-black/50 max-md:mt-10">
        <p className="text-xl">{review}</p>
        <p className="uppercase text-sm mt-10 tracking-widest font-light ">
          {clientName}
        </p>
      </div>
      <div className="h-full md:w-200 absolute right-0 -z-20 bg-[#F2F3F0]"></div>
    </div>
  );
}
export default ClinetReviewCard;
