import clsx from "clsx";
import Icons from "./Icons";
import data from "./data.json";

function DropdownMenu({ submenu }) {
  return (
    <div className="lg:invisible hidden lg:opacity-0 relative lg:absolute rounded-md left-0 lg:top-[150%] min-w-full lg:transition-all lg:block group-aria-[hidden=false]:visible group-aria-[hidden=false]:opacity-100 group-aria-[hidden=false]:top-full peer-data-[show-submenu=true]:block peer-data-[show-submenu=true]:bg-whiteOpacity">
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

function MenuItem({
  handleToggle,
  onMouseEnter,
  onMouseLeave,
  onMenuClick,
  text,
  link,
  submenu,
}) {
  return (
    <li
      onMouseEnter={(e) => onMouseEnter(e)}
      onMouseLeave={(e) => onMouseLeave(e)}
      className="relative group flex flex-col gap-1 lg:gap-0"
    >
      <a
        className="peer group flex items-center gap-2 h-10 px-4 leading-xs md:leading-sm transition-colors hover:bg-[#ffffff20] whitespace-nowrap rounded-md group-aria-[hidden=false]:bg-[#ffffff20] data-[show-submenu=true]:bg-[#ffffff20]"
        href={link}
        onClick={(e) => submenu && onMenuClick(e)}
      >
        {text}
        {submenu && (
          <Icons
            className="transition-transform group-aria-[hidden=false]:rotate-180 group-data-[show-submenu=true]:rotate-180"
            icon="chevron"
          />
        )}
      </a>
      {submenu && (
        <DropdownMenu submenu={submenu} handleToggle={handleToggle} />
      )}
    </li>
  );
}

export default function Menu({ isMobileMenuOpen }) {
  const headData = data.header;
  const classes = clsx({
    "visible opacity-100": isMobileMenuOpen,
    "invisible opacity-0": !isMobileMenuOpen,
  });

  function handleMenuMouseEnter(e) {
    e.currentTarget.setAttribute("aria-hidden", "false");
  }

  function handleMenuMouseLeave(e) {
    e.currentTarget.setAttribute("aria-hidden", "true");
  }

  function handleMenuClick(e) {
    e.preventDefault();
    if (e.currentTarget.getAttribute("data-show-submenu") === null) {
      e.currentTarget.setAttribute("data-show-submenu", "true");
    } else {
      e.currentTarget.removeAttribute("data-show-submenu");
    }
  }

  return (
    <div
      className={`${classes} fixed inset-0 pt-20 px-5 flex-col lg:-px-0 lg:pt-0 transition-all lg:backdrop-blur-0 bg-whiteOpacity z-30 items-center justify-center lg:block backdrop-blur-md lg:visible lg:opacity-100 lg:relative lg:bg-transparent`}
    >
      <nav className="flex flex-col max-w-xs mx-auto lg:mx-0 lg:max-w-none lg:flex-row gap-2">
        <ul className="text-sm flex-col uppercase lg:items-center font-headline lg:flex-row font-semibold flex gap-2 text-white">
          {headData.menu.map((item, index) => (
            <MenuItem
              key={index}
              onMouseEnter={handleMenuMouseEnter}
              onMouseLeave={handleMenuMouseLeave}
              onMenuClick={handleMenuClick}
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
