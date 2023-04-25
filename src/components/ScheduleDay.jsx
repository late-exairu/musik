import Button from "./Button";
import Icons from "./Icons";

export default function ScheduleDay({ list }) {
  return (
    <div className="-mx-5 flex flex-col overflow-hidden rounded-lg border border-[#E0E0E0] md:mx-0">
      <div className="flex bg-blueOpacity text-lg font-bold lg:text-2xl">
        <div className="w-3/12 p-5 lg:w-2/12 lg:p-10">Time</div>
        <div className="w-9/12 p-5 lg:w-5/12 lg:p-10">Content</div>
        <div className="hidden p-5 lg:block lg:w-5/12 lg:p-10">Speakers</div>
      </div>

      <div className="">
        {list.map((item, index) => (
          <div className="flex flex-wrap border-t border-[#E0E0E0]" key={index}>
            <div className="w-3/12 p-5 lg:w-2/12 lg:p-10">{item.time}</div>
            <div className="w-9/12 p-5 font-bold lg:w-5/12 lg:p-10">
              {item.description}
            </div>
            <div className="w-full p-5 lg:w-5/12 lg:p-10">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                <div className="flex flex-row gap-5 lg:flex-col">
                  {item.speakers &&
                    item.speakers.map((speaker, index) => (
                      <div key={index} className="flex items-center">
                        <div className="mr-3 shrink-0">
                          <img
                            className="aspect-square h-10 w-10 rounded-full md:h-14 md:w-14"
                            src={speaker.img}
                            alt=""
                          />
                        </div>
                        <p className="text-sm md:text-base">{speaker.name}</p>
                      </div>
                    ))}
                </div>

                {item.preview && (
                  <Button
                    link={item.preview}
                    target="_blank"
                    className="gap-2 border border-whiteHover text-black hover:bg-blueOpacity md:gap-4"
                  >
                    Preview
                    <Icons
                      className="h-5 w-5 fill-black md:h-6 md:w-6"
                      icon="play"
                    />
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
