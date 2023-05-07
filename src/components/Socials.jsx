import React from "react";
import Icons from "./Icons";

export default function Socials({ list, className }) {
  return (
    <ul className={`${className} flex gap-2 md:gap-[30px]`}>
      {list.map((item, index) => (
        <li key={index}>
          <a className="bg-red" href={item.link} target="_blanc">
            <Icons className="h-[30px] w-[30px]" icon={item.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
