import Image from "next/image";

const LAST_WORK = [
  {
    image: "/image.svg",
    title: "Project Title",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    image: "/image.svg",
    title: "Project Title",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    image: "/image.svg",
    title: "Project Title",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    image: "/image.svg",
    title: "Project Title",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    image: "/image.svg",
    title: "Project Title",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    image: "/image.svg",
    title: "Project Title",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
];

const LastWork = () => {
  return (
    <section className="min-h-[1030px] max-w-[1200px] mx-auto px-[24px] grid place-items-center grid-cols-3 grid-rows-2 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1 my-[42px]">
      {LAST_WORK.map((work) => (
        <div
          key={work.image}
          className="space-y-[24px]">
          <Image
            src={work.image}
            alt="work"
            className="mx-auto"
            width={390}
            height={330}
          />
          <div className="text-black space-y-2">
            <h3 className="font-semibold text-xl">{work.title}</h3>
            <p className="text-[1.0625rem]">{work.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LastWork;
