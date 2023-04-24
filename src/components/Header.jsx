import { useContext } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import { ThemeContext } from "../context/AppContext.jsx";

export default function Header() {
  const context = useContext(ThemeContext);

  return (
    <div
      className={`${
        context.isHeaderSticky &&
        "bg-[#00000050] lg:!py-2 lg:backdrop-blur-[5px]"
      } fixed inset-x-0 top-0 z-20 py-4 transition-all lg:py-8`}
    >
      <div className="container flex items-center justify-between">
        <Logo className="z-40 w-24 shrink-0 lg:w-32" />

        <Menu />

        {!context.isScreenLg && <MenuButton />}
      </div>
    </div>
  );
}
