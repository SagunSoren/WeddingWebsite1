"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ClinetReviewCard from "./cards/ClinetReviewCard";
import { cormorant_garamod, cormorant_garamod_italic } from "@/app/font";
import {reviews} from "@/data/clientReview"

function ClientReviews() {
  return (
    <div className="w-full mb-50 mt-40">
      <div className="text-center text-black">
        <h1
          className={`text-4xl ${cormorant_garamod.className} tracking-[7] text-black/60`}
        >
          WHAT OUR CLIENT SAYS
        </h1>
        <p
          className={`${cormorant_garamod_italic.className} text-xl tracking-wide mb-20`}
        >
          At the end of the day, people won’t remember what you said or did,
          they will remember how you made them feel.
        </p>
      </div>
      <div className="mt-10 max-w-7xl mx-auto">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <ClinetReviewCard
                imageSrc={item.imageSrc}
                review={item.review}
                clientName={item.clientName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default ClientReviews;
