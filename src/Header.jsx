import { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import useMediaQuery from "./hooks/useMediaQuery.jsx";

export default function Header() {
  const isScreenLg = useMediaQuery("(min-width: 1024px)");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleBurgerClick() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <div className="py-4 z-20 fixed inset-x-0 top-0 lg:py-8">
      <div className="container flex items-center justify-between">
        <Logo className="z-40 w-24 shrink-0 lg:w-32" />

        <Menu isMobileMenuOpen={isMobileMenuOpen} />

        {!isScreenLg && (
          <MenuButton
            isMobileMenuOpen={isMobileMenuOpen}
            onBurgerClick={handleBurgerClick}
          />
        )}
      </div>
    </div>
  );
}
