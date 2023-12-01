import { Link } from "react-router-dom";
import Logo from "./Logo";
import Socials from "./Socials";

export default function Footer({ socials, menu, copyright }) {
  return (
    <footer className="mt-auto bg-black text-white" aria-label="Footer">
      <div className="container py-6 md:py-10">
        <Logo className="mx-auto mb-6 flex w-24 lg:inline-flex lg:w-32" />

        <div className="flex-wrap items-center lg:mt-7 lg:flex">
          {menu && (
            <ul className="flex flex-wrap justify-center gap-x-3 font-montserrat text-sm uppercase md:gap-x-8">
              {menu.map((item, index) => (
                <li key={index} className="">
                  <Link className="hover:underline" to={item.link}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {socials && (
            <Socials
              className="mx-auto mt-6 flex justify-center gap-5 fill-white md:gap-[30px] lg:mt-0"
              list={socials}
            />
          )}

          <div className="mt-6 text-center text-xs text-white/30 lg:mt-0">
            {copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
