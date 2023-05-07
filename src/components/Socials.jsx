import React from "react";
import Icons from "./Icons";

export default function Socials({ list, className }) {
  return (
    <ul className={`${className}`}>
      {list.map((item, index) => (
        <li key={index}>
          <a className="bg-red" href={item.link} target="_blanc">
            <Icons className="h-[30px] w-[30px] fill-white" icon={item.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
