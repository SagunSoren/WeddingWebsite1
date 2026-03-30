import ClientReviews from "@/MyComponents/ClientReviews";
import Navbar from "@/MyComponents/Navbar";
import Image from "next/image";
import { cormorant_garamod, cormorant_garamod_italic } from "../font";

const page = () => {
  return (
    <div>
      <div className="pb-40">
        <Navbar dark={true} />
      </div>
      <div className="max-w-7xl mx-auto flex max-lg:flex-col-reverse mt-10 mb-20">
        <div className="lg:w-1/2 - p-4">
          <h1
            className={`text-4xl ${cormorant_garamod.className} tracking-[7]`}
          >
            MEET
          </h1>
          <p className={`text-4xl ${cormorant_garamod.className} tracking-[6]`}>
            Our Founders
          </p>
          <p className={`${cormorant_garamod_italic.className} text-2xl mt-4`}>
            Sarav is an engineering graduate, former software engineer and a
            self taught Indian Wedding Photographer who have shot more than 350
            Weddings across India, Singapore, US & Dubai. Driven by passion, and
            strongly believe the quote ``Touching people's heart is limitless``
            Sajith like telling your stories through his photography. A former
            software professional, even as a child he was fascinated by
            photography, but it was not until 2012 that he decided to let it
            fully enter his life. He loves to travel and make memories and see
            the good in the world.
          </p>
        </div>
        <div className="relative h-100 lg:w-1/3 w-full mx-auto">
          <Image
            src={"/assets/founderImage/founder.jpg"}
            alt="dsjflkjds"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            loading="eager"
          ></Image>
        </div>
      </div>

      {/* vision */}
      <div className="max-w-7xl mx-auto my-40 ">
        <div className="flex max-lg:flex-col gap-10">
          <div className="lg:w-1/3 ">
            <div className="relative h-70 lg:w-100">
              <Image
                src={"/assets/AboutUsVisionMIssion/vision.jpg"}
                alt="jlkgvds"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale-100 hover:grayscale-0 duration-300"
              ></Image>
            </div>
            <div className="p-2">
              <h1
                className={`${cormorant_garamod.className} tracking-wider text-2xl uppercase mt-6`}
              >
                Vision
              </h1>
              <p className="text-sm leading-6 lg:pr-4 mt-2">
                Our vision is to be a premier destination for couples seeking
                authentic and beautiful documentary wedding photography, to
                creating visually stunning and emotionally evocative films that
                capture the essence of love and commitment.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="relative h-70 lg:w-100">
              <Image
                src={"/assets/AboutUsVisionMIssion/mission.jpg"}
                alt="jlkgvds"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale-100 hover:grayscale-0 duration-300"
              ></Image>
            </div>
            <div className="p-2">
              <h1
                className={`${cormorant_garamod.className} tracking-wider text-2xl uppercase mt-6`}
              >
                mission
              </h1>
              <p className="text-sm leading-6 lg:pr-4 mt-2">
                To provide our clients with an unparalleled photography
                experience that results in beautiful and timeless images that
                they will treasure for a lifetime. We strive to be creative,
                attentive, and professional in everything we do, and to
                consistently deliver exceptional quality and service to our
                clients. We are committed to capturing the beauty, emotion, and
                candid moments of each family celebrations we photograph, and to
                creating a lasting legacy of the celebrations.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="relative h-70 lg:w-100">
              <Image
                src={"/assets/AboutUsVisionMIssion/achievements.jpg"}
                alt="jlkgvds"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale-100 hover:grayscale-0 duration-300"
              ></Image>
            </div>
            <div className="p-2">
              <h1
                className={`${cormorant_garamod.className} tracking-wider text-2xl uppercase mt-6`}
              >
                Achievements
              </h1>
              <p className="text-sm leading-6  mt-2">
                South India’s Brand Ambassador of FujiFilm X-series camera. Won
                2 Fearless awards in Collection 50, competing with top
                photographers around the world. Winner of “Behind the Scene”
                category - Canon Wedding photographer of the year 2017-18 by
                Better Photography Magazine. 9 Award nominations - Most
                nominated Wedding photography team in Sony Better Photography
                Wedding photographer of the year 2019-20.
              </p>
            </div>
          </div>
        </div>
        {/* what our client says */}
        <ClientReviews />
      </div>
    </div>
  );
};
export default page;
