"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { youtubeVideos } from "@/data/flims";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
import FilmCard from "./cards/FilmCard";
import { cormorant_garamod, cormorant_garamod_italic } from "@/app/font";

function Films() {
  return (
    <div className="w-full bg-[#F6F6F6] text-black mb-20 py-20">
      <div className="text-center max-w-7xl mx-auto ">
        <h1 className={`text-4xl ${cormorant_garamod.className} tracking-[7]`}>
          REDEFINING WEDDING FILMS THROUGH STORY TELLING
        </h1>
        <p
          className={`${cormorant_garamod_italic.className} text-xl tracking-wide`}
        >
          Our wedding films are tailor made for you big day. We make it feel
          more personal and earthy to you, with real emotions and sounds
          captured through candid moments
        </p>
      </div>
      <div className="mt-10 max-w-7xl mx-auto relative">
        <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer">
            <IoIosArrowBack />
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer">
            <IoIosArrowForward />
          </div>
        </div>

        <Swiper
          key={youtubeVideos.length}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          //breakpoints for responsive design
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // Desktop (Window width >= 1024px)
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
        >
          {youtubeVideos.map((video, index) => (
            <SwiperSlide key={index}>
              <FilmCard
                title={video.heading}
                link={video.link}
                imageSrc={video.coverImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default Films;
