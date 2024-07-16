import Image from "next/image";
import React from "react";

const IMAGES: { name: string; width: number; height: number }[] = [
  { name: "/google.svg", width: 80, height: 50 },
  { name: "/nike.svg", width: 80, height: 50 },
  { name: "/samsung.svg", width: 80, height: 50 },
  { name: "/apple.svg", width: 40, height: 50 },
  { name: "/adidas.svg", width: 80, height: 50 },
];

const Marks = () => {
  return (
    <section className="flex h-[130px] items-center justify-between max-w-[1200px] mx-auto px-[68px]">
      {IMAGES.map((image) => (
        <Image
          width={image.width}
          height={image.width}
          key={image.name}
          src={image.name}
          alt="image"
        />
      ))}
    </section>
  );
};

export default Marks;
