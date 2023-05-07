import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax } from "react-scroll-parallax";
import "swiper/swiper.min.css";
import Button from "./Button";
import ParallaxItems from "./ParallaxItems";

export default function Prices({ title, list }) {
  return (
    <section className="relative pb-20 pt-16 sm:pb-24 sm:pt-20 md:pt-24 lg:pb-28 lg:pt-28 xl:pt-32">
      <Parallax
        className="pointer-events-none absolute right-1 top-64 z-10 ml-0  2xl:right-10"
        translateY={[200, -300]}
        rotate={[0, -90]}
      >
        <ParallaxItems
          className="h-10 w-10 lg:h-20 lg:w-20"
          element="Triangle"
        />
      </Parallax>

      <div className="container">
        <h3 className="mb-4 text-center font-montserrat text-xl font-bold sm:mb-6 md:text-2xl lg:mb-10 xl:mb-14 xl:text-3xl">
          {title}
        </h3>

        {list && (
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
            {list.map((priceItem, index) => (
              <SwiperSlide
                key={index}
                style={{ "--accentColor": priceItem.accentColor }}
                className="relative overflow-hidden rounded-lg bg-white p-7 shadow-[0px_20px_100px_rgba(34,34,34,0.15)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[--accentColor] font-montserrat"></div>
                <h3 className="text-center text-lg font-extrabold leading-lg text-[--accentColor] md:text-2xl">
                  {priceItem.title}
                </h3>
                <p className="text-center font-montserrat text-4xl font-bold leading-lg text-[--accentColor] md:text-5xl">
                  {priceItem.price}
                </p>
                <div
                  className="mb-5 mt-3 text-center leading-4xl"
                  dangerouslySetInnerHTML={{ __html: priceItem.description }}
                ></div>

                <Button
                  className="mx-auto flex w-max"
                  link={priceItem.button.link}
                >
                  {priceItem.button.text}
                </Button>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
