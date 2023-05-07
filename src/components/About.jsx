import { Parallax } from "react-scroll-parallax";
import ParallaxItems from "./ParallaxItems";
import Button from "./Button";
import Icons from "./Icons";

export default function About({ title, description, button, images }) {
  return (
    <section className="relative pb-10 pt-16 sm:pb-16 sm:pt-20 md:pt-24 lg:pb-28 lg:pt-28 xl:pt-32">
      <Parallax
        className="pointer-events-none absolute left-0 top-40 z-10 ml-0 2xl:left-12"
        translateY={[400, -100]}
        rotateY={[0, 460]}
        rotate={[0, -180]}
      >
        <ParallaxItems className="h-24 w-24 lg:h-44 lg:w-40" element="Elem3" />
      </Parallax>

      <div className="container flex flex-col gap-10 md:flex-row md:gap-[70px]">
        <div className="relative mx-auto flex aspect-square items-end justify-end self-start md:w-[48%]">
          <img
            className="absolute left-0 top-0 w-5/6 rounded-lg opacity-30"
            src={images[1].url}
            alt={images[1].title}
          />
          <img
            className="relative block w-5/6 rounded-lg"
            src={images[0].url}
            alt={images[0].title}
          />
        </div>

        <div className="md:flex md:w-[52%] md:flex-col md:justify-center">
          <h3 className="mb-4 font-montserrat text-xl font-bold sm:mb-6 md:text-2xl lg:mb-7 xl:text-3xl">
            {title}
          </h3>
          <div className="text-sm font-thin md:text-base">{description}</div>
          <Button
            className="mr-auto mt-5 inline-flex gap-3 bg-blue md:mt-12 lg:mt-20"
            link={button.link}
          >
            {button.text}
            <Icons className="fill-white" icon="arrow" />
          </Button>
        </div>
      </div>
    </section>
  );
}
