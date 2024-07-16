import Image from "next/image";

const SERVICES = [
  {
    image: "/service1.svg",
    title: "Product Design",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    image: "/service2.svg",
    title: "Visual Design",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    image: "/service3.svg",
    title: "Art Direction",
    description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
];

const Services = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-[68px] min-h-[513px] grid place-items-center grid-cols-3 gap-[24px] max-md:gap-[30px] max-md:grid-cols-1">
      {SERVICES.map((service) => (
        <div
          key={service.title}
          className="space-y-[42px] p-[42px] max-md:p-0">
          <Image
            src={service.image}
            alt="service"
            className="mx-auto"
            width={124}
            height={124}
          />
          <div className="text-black space-y-3">
            <h3 className="font-semibold text-[1.6875rem] text-center">{service.title}</h3>
            <p className="text-[1.0625rem]">{service.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
