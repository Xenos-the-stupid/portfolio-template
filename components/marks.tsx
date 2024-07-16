import Image from "next/image";
import React from "react";

const IMAGES = ["/google.svg", "/nike.svg", "/samsung.svg", "apple.svg", "adidas.svg"];

const Marks = () => {
  return (
    <section className="flex h-[130px] items-center justify-between max-w-[1200px] mx-auto px-[68px]">
      {IMAGES.map((image) => (
        <Image
          width={80}
          height={10}
          key={image}
          src={image}
          alt="image"
        />
      ))}
    </section>
  );
};
//todo make fix width

export default Marks;
