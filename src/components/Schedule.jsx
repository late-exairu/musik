import { Parallax } from "react-scroll-parallax";
import ParallaxItems from "./ParallaxItems";
import { NavLink, Outlet } from "react-router-dom";

export default function Schedule({ title, scheduleList }) {
  return (
    <section className="relative overflow-visible bg-gradient-to-b from-blue/5 pb-10 pt-16 sm:pb-16 sm:pt-20 md:pt-24 lg:pb-28 lg:pt-32">
      <Parallax
        className="pointer-events-none absolute left-1 top-80 z-10 ml-0 hidden 2xl:left-0 2xl:block"
        translateX={[0, 50]}
        translateY={[0, 500]}
        rotate={[-50, 160]}
      >
        <ParallaxItems
          className="h-14 w-16 lg:h-24 lg:w-24"
          element="Circles"
        />
      </Parallax>

      <div className="container">
        <h3 className="font-montserrat mb-4 text-xl font-bold sm:mb-6 md:text-2xl lg:mb-10 xl:text-3xl">
          {title}
        </h3>

        <div className="relative">
          <div className="sticky top-16 -mx-5 mb-5 flex gap-4 bg-[#f5f4fd] px-5 md:mx-0 md:px-0 lg:mb-10 lg:gap-[30px]">
            {scheduleList &&
              scheduleList.map((item, index) => (
                <NavLink
                  className="font-montserrat group grow border-b-4 border-blue/5 py-3 text-black aria-[current=page]:border-blue aria-[current=page]:text-blue lg:py-4"
                  to={index === 0 ? "/" : "/" + index}
                  key={index}
                >
                  <div className="text-xl font-extrabold opacity-50 group-aria-[current=page]:opacity-100 lg:text-2xl">
                    {item.title}
                  </div>
                  <div className="text-sm font-bold opacity-20 group-aria-[current=page]:opacity-50 lg:text-base">
                    {item.date}
                  </div>
                </NavLink>
              ))}
          </div>

          <Outlet />
        </div>
      </div>
    </section>
  );
}
