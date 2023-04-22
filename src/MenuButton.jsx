import { useContext } from "react";
import { ThemeContext } from "./AppContext.jsx";

export default function MenuButton() {
  const context = useContext(ThemeContext);
  const defaultStyles = `h-0.5 w-5 my-[2px] rounded-full bg-white transition ease transform duration-200`;

  return (
    <button
      className="group relative z-40 flex h-9 w-9 shrink-0 flex-col items-center justify-center rounded border-2 border-white"
      onClick={context.handleBurgerClick}
    >
      <div
        className={`${defaultStyles} ${
          context.isMobileMenuOpen ? "translate-y-[6px] rotate-45" : null
        }`}
      />
      <div
        className={`${defaultStyles} ${
          context.isMobileMenuOpen ? "opacity-0" : null
        }`}
      />
      <div
        className={`${defaultStyles} ${
          context.isMobileMenuOpen ? "-translate-y-[6px] -rotate-45" : null
        }`}
      />
    </button>
  );
}
