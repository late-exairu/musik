import ContactUs from "./ContactUs";
import ContactForm from "./ContactForm";

export default function ContactsSection({ contactUs, contactForm }) {
  return (
    <div className="relative w-full overflow-hidden md:flex-row">
      <div className="container relative z-10 flex max-w-[1480px] flex-col md:flex-row">
        <div className="relative flex-1 py-10 text-white before:absolute before:inset-0 before:-left-96 before:-right-96 before:bg-blue md:py-16 md:before:right-0 lg:py-28">
          <svg
            className="absolute -right-5 bottom-0 h-[116px] w-[112px] md:right-0 md:h-[232px] md:w-[224px]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 224 232"
          >
            <path
              fill="#FFA3A3"
              d="M15 232c0-115.427 93.573-209 209-209v209H15Z"
            />
            <circle cx={60} cy={60} r={60} fill="#84C4FF" />
            <path
              fill="#84C4FF"
              fillRule="evenodd"
              d="M60 120c33.137 0 60-26.863 60-60 0-3.04-.226-6.027-.662-8.945a210.059 210.059 0 0 0-71.09 67.795c3.8.754 7.73 1.15 11.752 1.15Z"
              clipRule="evenodd"
              style={{ mixBlendMode: "overlay" }}
            />
          </svg>

          <div className="relative mx-auto max-w-md pr-5 md:mx-0 md:max-w-xl">
            <ContactUs {...contactUs} />
          </div>
        </div>

        <div className="relative flex-1 py-10 text-black before:absolute before:inset-0 before:-left-96 before:-right-96 before:bg-black/5 md:py-16 md:before:left-0 lg:py-28">
          <svg
            className="absolute bottom-0 right-5 h-[48px] w-[72px] md:right-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 72 48"
          >
            <path fill="#FFA3A3" d="M24 48C24 21.49 45.49 0 72 0v48H24Z" />
            <path fill="#84C4FF" d="M0 0c26.51 0 48 21.49 48 48H0V0Z" />
            <path
              fill="#84C4FF"
              fillRule="evenodd"
              d="M24 48h24c0-12.173-4.532-23.288-12-31.75C28.532 24.712 24 35.827 24 48Z"
              clipRule="evenodd"
              style={{ mixBlendMode: "overlay" }}
            />
          </svg>

          <div className="relative mx-auto max-w-md md:mx-0 md:max-w-xl md:pl-10 lg:pl-20">
            <ContactForm {...contactForm} />
          </div>
        </div>
      </div>
    </div>
  );
}
