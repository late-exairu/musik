import Icons from "./Icons";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <div className="h-screen flex justify-center items-center bg-black text-white bg-cover bg-center bg-[url('./src/assets/hero-bg.png')]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#381DDBcc] to-[#00000080]"></div>
        <div className="container max-w-sm relative z-10 text-center sm:max-w-[560px] md:max-w-[740px] lg:max-w-[980px]">
          <h2 className="text-3xl leading-xs font-headline font-bold capitalize md:text-5xl lg:text-6xl mb-3 sm:mb-6 lg:mb-10">
            The Best experience of <span className="text-pink">music</span> in
            2021
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl leading-lg">
            Get ready to rock out at the biggest music festival of the year!
            With an incredible lineup of top artists and an amazing atmosphere,
            this festival is the place to be for music lovers everywhere.
          </p>
          <div className="flex mt-6 lg:mt-10 gap-3 lg:gap-5 justify-center">
            <a className="button bg-red hover:bg-redHover" href="/">
              Get Started
            </a>
            <a
              className="button bg-transparent gap-3 lg:gap-5 text-base whitespace-nowrap lg:items-center lg:text-xl px-2 hover:bg-whiteOpacity"
              href="/"
            >
              <Icons
                className="w-10 h-10 shrink-0 md:w-12 md:h-12 lg:w-14 lg:h-14"
                icon="play"
              />
              Watch Video
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
