import { useState, useEffect, createContext } from "react";
import useMediaQuery from "../hooks/useMediaQuery.jsx";

const ThemeContext = createContext();

function AppProvider(props) {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScreenLg = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    window.addEventListener("scroll", checkSticky);

    return () => {
      window.removeEventListener("scroll", checkSticky);
    };
  }, []);

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

  function checkSticky() {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    if (scrollTop >= 1) {
      setIsHeaderSticky(true);
    } else {
      setIsHeaderSticky(false);
    }
  }

  const value = {
    isMobileMenuOpen: isMobileMenuOpen,
    isScreenLg: isScreenLg,
    handleBurgerClick: handleBurgerClick,
    handleMenuMouseEnter: handleMenuMouseEnter,
    handleMenuMouseLeave: handleMenuMouseLeave,
    handleMenuClick: handleMenuClick,
    isHeaderSticky: isHeaderSticky,
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, AppProvider };
