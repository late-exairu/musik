import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SwiperCore from "swiper/core";
import "swiper/swiper.min.css";
import Icons from "./Icons";

SwiperCore.use([Navigation]);

export default function Testimonials({ title, list }) {
  return (
    <section className="relative bg-gradient-to-b from-red/5 pb-20 pt-16 sm:pb-24 sm:pt-20 md:pt-24 lg:pb-28 lg:pt-28 xl:pt-32">
      <div className="container">
        <h3 className="mb-4 font-montserrat text-xl font-bold sm:mb-6 md:text-2xl lg:mb-10 xl:mb-14 xl:text-3xl">
          {title}
        </h3>

        <Icons
          className="absolute left-20 top-5 h-60 w-60 fill-pink opacity-10 md:left-1/2 md:top-10 md:h-[360px] md:w-[360px] md:-translate-x-[500px]"
          icon="instagram"
        />

        {list && (
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            watchSlidesProgress={true}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
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
            <div className="swiper-prev swiper-button-prev absolute -left-10 top-40 z-10 hidden h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white shadow-md lg:flex 2xl:-left-36">
              <Icons className="w-3" icon="sliderArrow" />
            </div>
            <div className="swiper-next swiper-button-prev absolute -right-10 top-40 z-10 hidden h-14 w-14 cursor-pointer items-center justify-center rounded-full  bg-white shadow-md lg:flex 2xl:-right-36">
              <Icons className="w-3 rotate-180" icon="sliderArrow" />
            </div>
            {list.map((item, index) => (
              <SwiperSlide
                key={index}
                className="w-80 opacity-30 transition-opacity md:w-[370px] [&.swiper-slide-visible]:opacity-100"
              >
                <div className="w-full">
                  <img
                    src={item.photo}
                    alt={item.title}
                    className="aspect-square h-full w-full object-cover object-center"
                  />

                  <div className="mb-2 mt-6 flex gap-10 font-montserrat font-bold">
                    <div className="flex gap-2">
                      <Icons className="h-6 w-6" icon="like" />
                      {item.likes}
                    </div>
                    <div className="flex gap-2">
                      <Icons className="h-6 w-6" icon="comment" />
                      {item.comments}
                    </div>
                  </div>

                  <h5 className="mb-2">{item.title}</h5>

                  {item.tags && (
                    <div className="block text-black/50">
                      {item.tags.map((tag, index) => {
                        return (
                          <span className="inline-block" key={index}>
                            #{tag}&nbsp;
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
