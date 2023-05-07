import Icons from "./Icons";

export default function ContactUs({ title, subtitle, contactsList }) {
  return (
    <>
      <h3 className="mb-2 font-montserrat text-xl font-bold md:mb-2 md:text-2xl xl:text-3xl">
        {title}
      </h3>
      <h4 className="text-md md:text-lg xl:text-2xl">{subtitle}</h4>

      {contactsList && (
        <ul className="mt-5 flex flex-col gap-y-5 text-sm md:mt-10 md:gap-y-8 md:text-base lg:mt-20 lg:gap-y-10">
          {contactsList.map((contact, index) => (
            <li
              key={index}
              className="flex items-center font-montserrat font-semibold"
            >
              <Icons
                className="mr-2 inline-block h-6 w-6 fill-pink"
                icon={contact.icon}
              />
              {contact.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
