const chevron = (
  <svg
    width={8}
    height={8}
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.764 1.656a.924.924 0 010 1.234L4.57 6.344a.764.764 0 01-1.14 0L.236 2.89A.91.91 0 010 2.273c0-.223.079-.447.236-.617a.764.764 0 011.141 0L3.193 3.62 4 4.516l.807-.896 1.816-1.964a.764.764 0 011.14 0z"
      fill="#fff"
    />
  </svg>
);

const play = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none">
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M28 51.333C15.113 51.333 4.667 40.887 4.667 28 4.667 15.113 15.113 4.667 28 4.667c12.887 0 23.333 10.446 23.333 23.333 0 12.887-10.446 23.333-23.333 23.333Zm0-4.666a18.667 18.667 0 1 0 0-37.333 18.667 18.667 0 0 0 0 37.333Zm-3.215-27.032 11.384 7.588a.934.934 0 0 1 0 1.554l-11.387 7.588a.934.934 0 0 1-1.449-.775V20.41a.933.933 0 0 1 1.452-.775Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h56v56H0z" />
      </clipPath>
    </defs>
  </svg>
);

const iconSet = {
  chevron: chevron,
  play: play,
};

export default function Icons({ icon, className }) {
  // const classes = clsx(className);

  return <div className={`${className} shrink-0`}>{iconSet[icon]}</div>;
}
