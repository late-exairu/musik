import Button from "./Button";
import Icons from "./Icons";

export default function Singers({ title, description, button, images }) {
  return (
    <section className="pb-10 pt-16 sm:pb-16 sm:pt-20 md:pt-24 lg:pb-28 lg:pt-28 xl:pt-32">
      <div className="container flex flex-col-reverse gap-10 md:flex-row md:gap-[70px]">
        <div className="md:flex md:w-[40%] md:flex-col md:justify-center">
          <h3 className="mb-4 font-headline text-xl font-bold sm:mb-6 md:text-2xl lg:mb-7 xl:text-3xl">
            {title}
          </h3>
          <div className="text-sm font-thin md:text-base">{description}</div>
          <Button
            className="mr-auto mt-5 inline-flex gap-3 bg-blue md:mt-12 lg:mt-20"
            link={button.link}
          >
            {button.text}
            <Icons icon="arrow" />
          </Button>
        </div>

        <div className="relative mx-auto flex aspect-square flex-wrap items-end justify-end gap-[5%] gap-y-4 self-start md:w-[60%] md:gap-y-[5%]">
          <img
            className="relative block w-[54%] self-end rounded-md shadow-xl lg:rounded-lg"
            src={images[0].url}
            alt={images[0].title}
          />
          <img
            className="relative block w-[41%] self-end rounded-md shadow-xl lg:rounded-lg"
            src={images[1].url}
            alt={images[1].title}
          />
          <img
            className="relative block w-[41%] self-start rounded-md shadow-xl lg:rounded-lg"
            src={images[2].url}
            alt={images[2].title}
          />
          <img
            className="relative block w-[54%] self-start rounded-md shadow-xl lg:rounded-lg"
            src={images[3].url}
            alt={images[3].title}
          />
        </div>
      </div>
    </section>
  );
}
