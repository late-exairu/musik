export default function MenuButton({ isMobileMenuOpen, onBurgerClick }) {
  const defaultStyles = `h-0.5 w-5 my-[2px] rounded-full bg-white transition ease transform duration-200`;

  return (
    <button
      className="flex relative z-40 flex-col h-9 w-9 border-2 border-white rounded justify-center items-center group shrink-0"
      onClick={onBurgerClick}
    >
      <div
        className={`${defaultStyles} ${
          isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : null
        }`}
      />
      <div
        className={`${defaultStyles} ${isMobileMenuOpen ? "opacity-0" : null}`}
      />
      <div
        className={`${defaultStyles} ${
          isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : null
        }`}
      />
    </button>
  );
}
