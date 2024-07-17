import Image from "next/image";

const TASTIMONIALS = [
  {
    name: "Name",
    userName: "Gemma Nolen",
    image: "/client.png",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    name: "Name",
    userName: "Gemma Nolen",
    image: "/client.png",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    name: "Name",
    userName: "Gemma Nolen",
    image: "/client.png",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    name: "Name",
    userName: "Gemma Nolen",
    image: "/client.png",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    name: "Name",
    userName: "Gemma Nolen",
    image: "/client.png",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    name: "Name",
    userName: "Gemma Nolen",
    image: "/client.png",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    name: "Name",
    userName: "Gemma Nolen",
    image: "/client.png",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    name: "Name",
    userName: "Gemma Nolen",
    image: "/client.png",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    name: "Name",
    userName: "Gemma Nolen",
    image: "/client.png",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
];

const Testimonial = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-[68px] py-[42px]">
      <h1 className="text-[2rem] leading-[2.3125rem] font-semibold text-center mb-[42px]">Testimonial</h1>
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
        {TASTIMONIALS.map((tastimonial) => (
          <div
            key={tastimonial.image}
            className="space-y-[60px] p-[42px] bg-gray">
            <div className="flex gap-4 items-center">
              <Image
                src={tastimonial.image}
                alt="tastimonial"
                className="rounded-full"
                width={40}
                height={40}
              />
              <h3 className="font-semibold text-xl">{tastimonial.userName}</h3>
            </div>
            <p className="text-[1.0625rem]">{tastimonial.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
