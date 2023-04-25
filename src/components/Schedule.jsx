import { NavLink, Outlet } from "react-router-dom";

export default function Schedule({ title, scheduleList }) {
  return (
    <section className="overflow-visible bg-gradient-to-b from-blueOpacity pb-10 pt-16 sm:pb-16 sm:pt-20 md:pt-24 lg:pb-28 lg:pt-32">
      <div className="container">
        <h3 className="mb-4 font-headline text-xl font-bold sm:mb-6 md:text-2xl lg:mb-10 xl:text-3xl">
          {title}
        </h3>

        <div className="relative">
          <div className="sticky top-16 -mx-5 mb-5 flex gap-4 bg-[#f5f4fd] px-5 md:mx-0 md:px-0 lg:mb-10 lg:gap-[30px]">
            {scheduleList &&
              scheduleList.map((item, index) => (
                <NavLink
                  className="group grow border-b-4 border-blueOpacity py-3 font-headline text-black aria-[current=page]:border-blue aria-[current=page]:text-blue lg:py-4"
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
