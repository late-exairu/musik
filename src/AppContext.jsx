import { useState, createContext } from "react";
import useMediaQuery from "./hooks/useMediaQuery.jsx";

const ThemeContext = createContext();

function AppProvider(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScreenLg = useMediaQuery("(min-width: 1024px)");

  function handleBurgerClick() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function handleMenuMouseEnter(e) {
    e.currentTarget.setAttribute("aria-hidden", "false");
  }

  function handleMenuMouseLeave(e) {
    e.currentTarget.setAttribute("aria-hidden", "true");
  }

  function handleMenuClick(e) {
    !isScreenLg && e.preventDefault();

    if (e.currentTarget.getAttribute("data-show-submenu") === null) {
      e.currentTarget.setAttribute("data-show-submenu", "true");
    } else {
      e.currentTarget.removeAttribute("data-show-submenu");
    }
  }

  const value = {
    isMobileMenuOpen: isMobileMenuOpen,
    isScreenLg: isScreenLg,
    handleBurgerClick: handleBurgerClick,
    handleMenuMouseEnter: handleMenuMouseEnter,
    handleMenuMouseLeave: handleMenuMouseLeave,
    handleMenuClick: handleMenuClick,
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, AppProvider };
