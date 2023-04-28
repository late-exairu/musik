function Elem1({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 102 102"
    >
      <path
        fill="#FFA3A3"
        d="M.088 17.06 11.402 5.745l84.853 84.852-11.314 11.314z"
      />
      <path
        stroke="#222"
        d="M6.452 11.402 17.06.796l84.145 84.145-10.606 10.607z"
      />
    </svg>
  );
}

function Elem2({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 161 113"
    >
      <path
        fill="#84C4FF"
        d="m144.306 0 11.108 19.24-144.306 83.316-11.109-19.24z"
      />
      <path
        stroke="#222"
        d="m149.678 10.303 10.609 18.375-143.44 82.815L6.236 93.12z"
      />
    </svg>
  );
}

function Elem3({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 182 169"
    >
      <path
        stroke="#84C4FF"
        strokeWidth={8}
        d="m31.068 1 2.27 40.647 40.608-2.874 2.27 40.647 40.608-2.875 2.27 40.647 40.608-2.874 2.27 40.647"
      />
      <path
        stroke="#381DDB"
        strokeWidth={8}
        d="m19.17 14.507 2.27 40.647 40.608-2.875 2.27 40.647 40.608-2.874 2.269 40.647 40.609-2.874 2.269 40.647"
      />
    </svg>
  );
}

function Triangles({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 144 117"
    >
      <path fill="#84C4FF" d="M30 17.174 144 17 86.85 117 30 17.174Z" />
      <path
        stroke="#222"
        strokeWidth={8}
        d="M56.857 91.928 6.875 4.163l100.226-.152-50.244 87.917Z"
      />
    </svg>
  );
}

function Circles({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 95 96"
    >
      <circle cx="41.5" cy="54.5" r="41.5" fill="#84C4FF" />
      <circle cx="53.5" cy="41.5" r="37.5" stroke="#222" strokeWidth={8} />
    </svg>
  );
}

function Triangle({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 48 55"
    >
      <path
        stroke="#FC5252"
        strokeWidth={4}
        d="m4.005 27.635 41-23.589.07 47.3-41.07-23.711Z"
      />
    </svg>
  );
}

const elemSet = {
  Elem1: Elem1,
  Elem2: Elem2,
  Elem3: Elem3,
  Triangles: Triangles,
  Circles: Circles,
  Triangle: Triangle,
};

export default function ParallaxItems({ element, className }) {
  const Element = elemSet[element];
  return <Element className={className} />;
}
