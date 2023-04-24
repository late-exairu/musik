import Countdown from "react-countdown";
import Icons from "./Icons";
import Button from "./Button";

export default function Hero({ title, description, btnPrimary, btnSecondary }) {
  const Completionist = () => (
    <div className="font-headline text-2xl font-bold text-red sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl">
      It's LIVE!
      <span className="inline-flex animate-bounce">🎵</span>
    </div>
  );

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="text-stroke-0 flex gap-5 font-localSans text-3xl font-black sm:text-4xl md:gap-7 md:text-6xl lg:gap-9 lg:text-[120px] xl:text-[142px]">
          <span>{days}d</span>
          <span>{hours}h</span>
          <span>{minutes}m</span>
          <span>{seconds}s</span>
        </div>
      );
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-black bg-[url('./src/assets/hero-bg.png')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#381DDBcc] to-[#00000080]"></div>
      <div className="container relative z-10 max-w-sm py-24 text-center sm:max-w-[560px] md:max-w-[740px] md:pb-32 md:pt-24 lg:max-w-[980px] lg:pb-52 lg:pt-32">
        <h2 className="mb-3 font-headline text-3xl font-bold capitalize leading-xs sm:mb-6 md:text-5xl lg:mb-10 lg:text-6xl">
          {title}
        </h2>
        <p className="text-lg leading-lg md:text-xl lg:text-2xl">
          {description}
        </p>
        <div className="mt-6 flex justify-center gap-3 lg:mt-10 lg:gap-5">
          <Button className="bg-red hover:bg-redHover" link={btnPrimary.link}>
            {btnPrimary.text}
          </Button>

          <Button
            className="gap-3 whitespace-nowrap bg-transparent px-2 text-base hover:bg-whiteOpacity lg:items-center lg:gap-5 lg:text-xl"
            link={btnSecondary.link}
          >
            <Icons
              className="h-10 w-10 shrink-0 md:h-12 md:w-12 lg:h-14 lg:w-14"
              icon={btnSecondary.icon}
            />
            {btnSecondary.text}
          </Button>
        </div>
      </div>

      <div className="absolute inset-x-auto bottom-5">
        <Countdown date={Date.now() + 500000000} renderer={renderer} />
      </div>
    </section>
  );
}
