import { useContext } from "react";
import clsx from "clsx";
import Icons from "./Icons";
import data from "./data.json";
import { ThemeContext } from "./AppContext.jsx";

function DropdownMenu({ submenu }) {
  return (
    <div className="lg:invisible hidden lg:opacity-0 relative lg:absolute rounded-md left-0 lg:top-[150%] min-w-full lg:transition-all lg:block group-aria-[hidden=false]:visible group-aria-[hidden=false]:opacity-100 group-aria-[hidden=false]:top-full peer-data-[show-submenu=true]:block peer-data-[show-submenu=true]:bg-whiteOpacity lg:peer-data-[show-submenu=true]:bg-transparent">
      <div className="hidden lg:block border-solid w-2 border-b-white border-b-[6px] border-x-transparent border-x-[7px] border-t-0 ml-4"></div>
      <ul className="text-white lg:bg-white lg:text-black capitalize rounded-md lg:p-1 flex gap-1 flex-col">
        {submenu.map((item, index) => (
          <li key={index}>
            <a
              className="flex items-center gap-2 h-10 px-4 transition-colors hover:bg-whiteOpacity lg:hover:bg-[#00000010] rounded-md lg:hover:text-blue whitespace-nowrap"
              href={item.link}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuItem({ text, link, submenu }) {
  const context = useContext(ThemeContext);

  return (
    <li
      onMouseEnter={(e) => context.handleMenuMouseEnter(e)}
      onMouseLeave={(e) => context.handleMenuMouseLeave(e)}
      className="relative group flex flex-col gap-1 lg:gap-0"
    >
      <a
        className="peer group flex items-center gap-2 h-10 px-4 leading-xs md:leading-sm transition-colors hover:bg-[#ffffff20] whitespace-nowrap rounded-md group-aria-[hidden=false]:bg-[#ffffff20] data-[show-submenu=true]:bg-[#ffffff20] lg:data-[show-submenu=true]:bg-transparent"
        href={link}
        onClick={(e) => submenu && context.handleMenuClick(e)}
      >
        {text}
        {submenu && (
          <Icons
            className="transition-transform group-aria-[hidden=false]:rotate-180 group-data-[show-submenu=true]:rotate-180 lg:group-data-[show-submenu=true]:rotate-0"
            icon="chevron"
          />
        )}
      </a>
      {submenu && (
        <DropdownMenu submenu={submenu} handleToggle={context.handleToggle} />
      )}
    </li>
  );
}

export default function Menu() {
  const headData = data.header;
  const context = useContext(ThemeContext);
  const classes = clsx({
    "visible opacity-100": context.isMobileMenuOpen,
    "invisible opacity-0": !context.isMobileMenuOpen,
  });

  return (
    <div
      className={`${classes} fixed inset-0 pt-20 px-5 flex-col lg:-px-0 lg:pt-0 transition-all lg:backdrop-blur-0 bg-whiteOpacity z-30 items-center justify-center lg:block backdrop-blur-md lg:visible lg:opacity-100 lg:relative lg:bg-transparent`}
    >
      <nav className="flex flex-col max-w-xs mx-auto lg:mx-0 lg:max-w-none lg:flex-row gap-2">
        <ul className="text-sm flex-col uppercase lg:items-center font-headline lg:flex-row font-semibold flex gap-2 text-white">
          {headData.menu.map((item, index) => (
            <MenuItem
              key={index}
              text={item.text}
              link={item.link}
              submenu={item.submenu}
            />
          ))}
        </ul>
        <a
          className="button bg-white text-blue lg:ml-5 hover:bg-whiteHover"
          href="/"
        >
          GET TICKETS
        </a>
      </nav>
    </div>
  );
}
