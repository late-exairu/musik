import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Icons from "./Icons";

export default function Testimonials({ title, list }) {
  return (
    <section className="relative pb-20 pt-16 sm:pb-24 sm:pt-20 md:pt-24 lg:pb-28 lg:pt-28 xl:pt-32">
      <div className="container max-w-sm sm:max-w-lg md:max-w-2xl xl:max-w-[830px]">
        <h3 className="mb-4 text-center font-montserrat text-xl font-bold sm:mb-6 md:text-2xl lg:mb-10 xl:mb-14 xl:text-3xl">
          {title}
        </h3>

        {list && (
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            className="overflow-visible"
          >
            {list.map((item, index) => (
              <SwiperSlide
                key={index}
                className="opacity-30 transition-opacity [&.swiper-slide-active]:opacity-100"
              >
                <blockquote className="relative bg-black/5 px-5 py-12 pb-16 text-black/60 md:px-16 md:pb-16 lg:px-20 lg:py-12 lg:pb-20">
                  <Icons
                    className="absolute left-4 top-3 h-8 w-8 fill-blue md:left-7 md:top-5"
                    icon="quote"
                  />
                  {item.review}
                  <Icons
                    className="absolute bottom-3 right-4 h-8 w-8 rotate-180 fill-blue md:bottom-12 md:right-8"
                    icon="quote"
                  />
                </blockquote>

                <div className="-mt-12 flex flex-col items-center justify-center text-center">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="h-[120px] w-[120px] rounded-full"
                  />
                  <p className="font-montserrat text-xl font-extrabold">
                    {item.name}
                  </p>
                  <a
                    className="text-blue"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.site}
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
