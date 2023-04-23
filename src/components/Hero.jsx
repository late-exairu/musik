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
    <section className="flex min-h-screen items-center justify-center bg-black bg-[url('./src/assets/hero-bg.png')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#381DDBcc] to-[#00000080]"></div>
      <div className="container relative z-10 max-w-sm py-24 text-center sm:max-w-[560px] md:max-w-[740px] md:pb-32 md:pt-24 lg:max-w-[980px] lg:pb-52 lg:pt-32">
        <h2 className="mb-3 font-headline text-3xl font-bold capitalize leading-xs sm:mb-6 md:text-5xl lg:mb-10 lg:text-6xl">
          {title}
        </h2>
        <p className="text-lg leading-lg md:text-xl lg:text-2xl">
          {description}
        </p>
        <div className="mt-6 flex justify-center gap-3 lg:mt-10 lg:gap-5">
          <a
            className="button bg-red hover:bg-redHover"
            href="{{hero.btnPrimary.link}}"
          >
            {btnPrimary.text}
          </a>
          <a
            className="button gap-3 whitespace-nowrap bg-transparent px-2 text-base hover:bg-whiteOpacity lg:items-center lg:gap-5 lg:text-xl"
            href={btnSecondary.link}
          >
            <Icons
              className="h-10 w-10 shrink-0 md:h-12 md:w-12 lg:h-14 lg:w-14"
              icon={btnSecondary.icon}
            />
            {btnSecondary.text}
          </a>
        </div>
      </div>

      <div className="text-stroke-0 absolute inset-x-auto bottom-5 flex gap-5 font-localSans text-3xl font-black sm:text-4xl md:gap-7 md:text-6xl lg:gap-9 lg:text-[120px] xl:text-[142px]">
        <Countdown date={Date.now() + 500000000} renderer={renderer} />
      </div>
    </section>
  );
}
