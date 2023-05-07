import { Parallax } from "react-scroll-parallax";
import Button from "./Button";
import ParallaxItems from "./ParallaxItems";

export default function Sponsors({ title, list, button }) {
  return (
    <section className="relative pb-20 pt-16 sm:pb-24 sm:pt-20 md:pt-24 lg:pb-28 lg:pt-28 xl:pt-32">
      <Parallax
        className="pointer-events-none absolute right-1 top-64 z-10 ml-0  2xl:right-10"
        translateY={[200, -300]}
        rotate={[0, -90]}
      >
        <ParallaxItems
          className="h-20 w-20 lg:h-32 lg:w-32"
          element="Triangles2"
        />
      </Parallax>

      <div className="container">
        <h3 className="mb-4 text-center font-montserrat text-xl font-bold sm:mb-6 md:text-2xl lg:mb-10 xl:mb-14 xl:text-3xl">
          {title}
        </h3>

        <ul className="flex flex-wrap gap-y-5 md:gap-y-8 lg:gap-y-14">
          {list.map((item, index) => (
            <li
              className="flex w-1/2 justify-center md:w-1/3 lg:w-1/4"
              key={index}
            >
              <a
                className="block w-32 sm:w-36 md:w-[170px]"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="block h-full w-full object-contain object-center transition-transform duration-200 will-change-transform hover:scale-105"
                  src={item.imgUrl}
                  alt={item.title}
                />
              </a>
            </li>
          ))}
        </ul>

        {button && (
          <Button
            className="mx-auto mt-10 flex w-max md:mt-16 lg:mt-20"
            link={button.link}
          >
            {button.text}
          </Button>
        )}
      </div>
    </section>
  );
}
