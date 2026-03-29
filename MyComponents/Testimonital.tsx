"use client";
import TestimonailCard from "./cards/TestimonailCard";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

function Testimonital() {
  return (
    <div className="max-w-7xl mx-auto bg-pink-500 ">
      <div>
        <h1>TESTIMONIALS</h1>
      </div>
      <div className="flex items-center justify-between  bg-amber-700">
        <div className="h-52 w-80 p-6 bg-gray-300 rounded-lg">
          <div className="flex">
            <div className="relative h-18 w-18">
              <Image
                src={"/assets/image2.jpg"}
                fill
                alt="dsjfkdj"
                className="rounded-lg object-cover"
              ></Image>
            </div>
            <div>
              <h1>Vivah Photography</h1>
              <div className="flex text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>7 google reviews</p>
              <div className="border-1 border-black rounded-sm text-center p-2">
                <h1>Write a review</h1>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper max-w-5xl bg-yellow-300"
        >
          <SwiperSlide>
            <TestimonailCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonailCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonailCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonailCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonailCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonailCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonailCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonailCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default Testimonital;
