import Image from "next/image";
import Button from "./button";

const Hero = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-[42px] min-h-[444px] grid grid-cols-2 items-center gap-[68px] max-md:grid-cols-1">
      <div className="space-y-[48px]">
        <div className="space-y-[24px] text-black">
          <h3 className="font-semibold leading-[30px] text-xl">Branding | Image making </h3>
          <h1 className="font-semibold text-[4.25rem] max-md:text-[3rem]">Visual Designer</h1>
          <p className="text-[1.0625rem] leading-[27px] max-md:leading-[24px] max-md:text-[0.9rem]">
            This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
          </p>
        </div>
        <Button>Contact</Button>
      </div>
      <div className="grid place-items-center">
        <Image
          src="/hero-image.png"
          alt="hero"
          height={360}
          width={480}
        />
      </div>
    </section>
  );
};

export default Hero;
