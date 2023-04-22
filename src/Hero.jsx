import Countdown from "react-countdown";
import Icons from "./Icons";

export default function Hero({ title, description, btnPrimary, btnSecondary }) {
  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <>
          <span>{days}d</span>
          <span>{hours}h</span>
          <span>{minutes}m</span>
          <span>{seconds}s</span>
        </>
      );
    }
  };

  return (
    <section className="flex justify-center min-h-screen items-center bg-black text-white bg-cover bg-center bg-[url('./src/assets/hero-bg.png')]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#381DDBcc] to-[#00000080]"></div>
      <div className="container py-24 max-w-sm relative z-10 text-center sm:max-w-[560px] md:pt-24 md:pb-32 lg:pt-32 lg:pb-52 md:max-w-[740px] lg:max-w-[980px]">
        <h2 className="text-3xl leading-xs font-headline font-bold capitalize md:text-5xl lg:text-6xl mb-3 sm:mb-6 lg:mb-10">
          {title}
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl leading-lg">
          {description}
        </p>
        <div className="flex mt-6 lg:mt-10 gap-3 lg:gap-5 justify-center">
          <a
            className="button bg-red hover:bg-redHover"
            href="{{hero.btnPrimary.link}}"
          >
            {btnPrimary.text}
          </a>
          <a
            className="button bg-transparent gap-3 lg:gap-5 text-base whitespace-nowrap lg:items-center lg:text-xl px-2 hover:bg-whiteOpacity"
            href={btnSecondary.link}
          >
            <Icons
              className="w-10 h-10 shrink-0 md:w-12 md:h-12 lg:w-14 lg:h-14"
              icon={btnSecondary.icon}
            />
            {btnSecondary.text}
          </a>
        </div>
      </div>

      <div className="absolute flex gap-5 font-black inset-x-auto font-localSans bottom-5 text-stroke-0 text-3xl md:gap-7 lg:gap-9 sm:text-4xl md:text-6xl lg:text-[120px] xl:text-[142px]">
        <Countdown date={Date.now() + 500000000} renderer={renderer} />
      </div>
    </section>
  );
}
