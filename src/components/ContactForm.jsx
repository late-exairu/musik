import React from "react";
import Input from "./Input";

export default function ContactForm({ title, formItems, button }) {
  return (
    <>
      <h3 className="mb-2 font-montserrat text-xl font-extrabold md:mb-2 md:text-xl xl:text-2xl">
        {title}
      </h3>

      <form className="mt-10 flex flex-col gap-5">
        {formItems.map((item, index) =>
          item.type === "textarea" ? (
            <Input key={index} {...item} className="" />
          ) : (
            <Input key={index} {...item} className="" />
          )
        )}

        <button type="submit" className="button mt-5 w-full bg-blue md:mt-10">
          {button.text}
        </button>
      </form>
    </>
  );
}
