import { Facebook, YoutubeIcon } from "lucide-react";
import Button from "./button";

const Contact = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-[24px] py-[24px]">
      <h1 className="text-[2rem] font-semibold mb-[24px]">Lets work together</h1>
      <div className="grid grid-cols-2 gap-[142px] max-md:grid-cols-1">
        <div className="space-y-[42px]">
          <p className="text-[1.0625rem] leading-[1.6875rem]">
            This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template
            Figma file, turned into code using Anima. Learn more at AnimaApp.com
          </p>
          <div className="flex gap-6">
            <YoutubeIcon size={28} />
            <YoutubeIcon size={28} />
            <YoutubeIcon size={28} />
            <YoutubeIcon size={28} />
            <YoutubeIcon size={28} />
            <YoutubeIcon size={28} />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="hello"
            className="px-4 py-3 bg-gray placeholder:text-[1.0625rem] placeholder:text-black placeholder:leading-[1.6875rem] focus-within:outline-black focus:outline-black focus:outline"
          />
          <input
            type="text"
            placeholder="hello"
            className="mb-3 px-4 py-3 bg-gray placeholder:text-[1.0625rem] placeholder:text-black placeholder:leading-[1.6875rem] focus-within:outline-black focus:outline-black focus:outline"
          />
          <div role="button">
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
