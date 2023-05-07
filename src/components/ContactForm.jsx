import React from "react";
import Input from "./Input";
import { buttonStyles } from "./Button";

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

        <button
          type="submit"
          className={buttonStyles({
            className: "mt-5 md:mt-10",
            fullWidth: true,
          })}
        >
          {button.text}
        </button>
      </form>
    </>
  );
}
