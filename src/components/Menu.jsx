import { useContext } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Icons from "./Icons";
import data from "../data/data.json";
import { ThemeContext } from "../context/AppContext.jsx";
import Button from "./Button";

function DropdownMenu({ submenu }) {
  return (
    <div className="relative left-0 hidden min-w-full rounded group-aria-[hidden=false]:visible group-aria-[hidden=false]:top-full group-aria-[hidden=false]:opacity-100 peer-data-[show-submenu=true]:block peer-data-[show-submenu=true]:bg-white/10 lg:invisible lg:absolute lg:top-[150%] lg:block lg:opacity-0 lg:transition-all lg:peer-data-[show-submenu=true]:bg-transparent">
      <div className="ml-4 hidden w-2 border-x-[7px] border-b-[6px] border-t-0 border-solid border-x-transparent border-b-white lg:block"></div>
      <ul className="flex flex-col gap-1 rounded capitalize text-white lg:bg-white lg:p-1 lg:text-black">
        {submenu.map((item, index) => (
          <li key={index}>
            <a
              className="flex h-10 items-center gap-2 whitespace-nowrap rounded px-4 transition-colors hover:bg-white/10 lg:hover:bg-[#00000010] lg:hover:text-blue"
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
      className="group relative flex flex-col gap-1 lg:gap-0"
    >
      <NavLink
        className="group peer flex h-10 items-center gap-2 whitespace-nowrap rounded px-4 leading-xs transition-colors hover:bg-[#ffffff20] aria-[current=page]:!bg-[#ffffff20] group-aria-[hidden=false]:bg-[#ffffff20] data-[show-submenu=true]:bg-[#ffffff20] md:leading-sm lg:data-[show-submenu=true]:bg-transparent"
        to={link}
        onClick={(e) => submenu && context.handleMenuClick(e)}
      >
        {text}
        {submenu && (
          <Icons
            className="transition-transform group-aria-[hidden=false]:rotate-180 group-data-[show-submenu=true]:rotate-180 lg:group-data-[show-submenu=true]:rotate-0"
            icon="chevron"
          />
        )}
      </NavLink>
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
      className={`${classes} lg:-px-0 fixed inset-0 z-30 flex-col items-center justify-center bg-white/10 px-5 pt-20 backdrop-blur-md transition-all lg:visible lg:relative lg:block lg:bg-transparent lg:pt-0 lg:opacity-100 lg:backdrop-blur-0`}
    >
      <nav className="mx-auto flex max-w-xs flex-col gap-2 lg:mx-0 lg:max-w-none lg:flex-row">
        <ul className="font-montserrat flex flex-col gap-2 text-sm font-semibold uppercase text-white lg:flex-row lg:items-center">
          {headData.menu.map((item, index) => (
            <MenuItem
              key={index}
              text={item.text}
              link={item.link}
              submenu={item.submenu}
            />
          ))}
        </ul>

        <Button
          className="bg-white text-blue hover:bg-whiteHover lg:ml-5"
          link="/"
        >
          GET TICKETS
        </Button>
      </nav>
    </div>
  );
}
