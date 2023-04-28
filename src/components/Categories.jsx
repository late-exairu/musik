import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax } from "react-scroll-parallax";
import "swiper/swiper.min.css";
import Icons from "./Icons";
import ParallaxItems from "./ParallaxItems";

export default function Categories({ title, categoriesList }) {
  return (
    <section className="relative pb-10 pt-16 sm:pb-16 sm:pt-20 md:pt-24 lg:pb-28 lg:pt-32 xl:pt-40">
      <Parallax
        className="pointer-events-none absolute left-1 top-64 z-10 ml-0  2xl:left-10"
        translateY={[0, -500]}
        rotate={[0, -90]}
      >
        <ParallaxItems className="h-10 w-10 lg:h-24 lg:w-24" element="Elem1" />
      </Parallax>

      <Parallax
        className="pointer-events-none absolute bottom-60 right-1 z-10 ml-0 2xl:right-10"
        translateY={[400, -300]}
        rotate={[0, -90]}
      >
        <ParallaxItems className="h-16 w-20 lg:h-32 lg:w-40" element="Elem2" />
      </Parallax>

      <div className="container">
        <h3 className="mb-4 font-montserrat text-xl font-bold sm:mb-6 md:text-2xl lg:mb-10 xl:mb-14 xl:text-3xl">
          {title}
        </h3>

        {categoriesList && (
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1480: {
                initialSlide: 1,
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="overflow-visible"
          >
            {categoriesList.map((category, index) => (
              <SwiperSlide
                key={index}
                className="group flex h-auto flex-col justify-end rounded-lg bg-[--bgColorTransparent] px-8 py-9 transition-colors hover:bg-[--bgColor] hover:fill-white hover:text-white md:px-10 lg:px-12 xl:px-14"
                style={{
                  "--bgColor": category.bgColor,
                  "--bgColorTransparent": category.bgColor + "20",
                }}
              >
                <Icons
                  icon={category.icon}
                  className="mb-4 fill-[--bgColor] transition-colors duration-100 ease-linear group-hover:fill-white md:mb-6 lg:mb-8"
                />
                <h2 className="mb-3 font-montserrat text-2xl font-bold leading-md md:mb-4 lg:mb-5">
                  {category.title}
                </h2>
                <p className="text-sm font-thin md:text-base">
                  {category.description}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
