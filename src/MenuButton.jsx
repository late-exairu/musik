import { useContext } from "react";
import { ThemeContext } from "./AppContext.jsx";

export default function MenuButton() {
  const context = useContext(ThemeContext);
  const defaultStyles = `h-0.5 w-5 my-[2px] rounded-full bg-white transition ease transform duration-200`;

  return (
    <button
      className="flex relative z-40 flex-col h-9 w-9 border-2 border-white rounded justify-center items-center group shrink-0"
      onClick={context.handleBurgerClick}
    >
      <div
        className={`${defaultStyles} ${
          context.isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : null
        }`}
      />
      <div
        className={`${defaultStyles} ${
          context.isMobileMenuOpen ? "opacity-0" : null
        }`}
      />
      <div
        className={`${defaultStyles} ${
          context.isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : null
        }`}
      />
    </button>
  );
}
