import React from "react";

export default function Input({ label, type, name, placeholder, className }) {
  return type === "textarea" ? (
    <label className="block text-xs font-bold text-black/70" htmlFor={name}>
      {label}
      <textarea
        className={`${className} block w-full resize-y border-b border-black/20 bg-transparent py-1 text-base font-normal text-black focus:border-blue focus:outline-none`}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </label>
  ) : (
    <label className="block text-xs font-bold text-black/70" htmlFor={name}>
      {label}
      <input
        className={`${className} w-full resize-y border-b border-black/20 bg-transparent py-1 text-base font-normal text-black focus:border-blue focus:outline-none`}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </label>
  );
}
