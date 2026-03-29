"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SplitText from "../components/SplitText";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { useState, useEffect } from "react";
import { heroSlides } from "@/data/heroSlides";

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const handleAnimationComplete = () => {};

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-screen h-screen bg-black">
        {/* Loading state or static content */}
      </div>
    );
  }

  return (
    <div className="">
      {/* swiper carousel */}
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="hero-swiper w-screen h-screen"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                className="object-cover"
                fill
                priority={index < 2} // Eager load only the first image
                sizes="100vw"
                loading="eager"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-white text-5xl font-bold text-center">
                  {mounted && activeIndex === index && (
                    <SplitText
                      key={`${index}-${activeIndex}`}
                      text={slide.title}
                      className="text-4xl font-semibold text-center z-20"
                      delay={50}
                      duration={1.25}
                      ease="power3.out"
                      splitType="chars"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="center"
                      onLetterAnimationComplete={handleAnimationComplete}
                    />
                  )}
                  {!mounted && (
                    <h1 className="text-4xl font-semibold">{slide.title}</h1>
                  )}

                  <p className="hero-text mt-4 text-xl font-normal">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Hero;
