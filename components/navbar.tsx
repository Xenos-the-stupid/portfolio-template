"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="max-w-[1200px] px-[42px] sticky top-0 bg-white mx-auto h-[80px] flex items-center justify-between">
      <Link
        href={"/"}
        className="font-semibold text-xl outline-none focus-within:underline duration-300 hover:scale-110 focus-within:scale-110">
        Logo
      </Link>
      <div
        className={`flex items-center gap-6 max-md:flex-col max-md:fixed max-md:inset-0 max-md:justify-center max-md:bg-[#2d2d2d]/80 max-md:text-white max-md:backdrop-blur-sm duration-300 ${
          isOpen || "max-md:translate-x-full"
        }`}>
        <Link
          href={"/about"}
          className="duration-300 outline-none hover:scale-110 focus-within:underline focus-within:scale-110">
          About
        </Link>
        <Link
          href={"/work"}
          className="duration-300 outline-none hover:scale-110 focus-within:underline focus-within:scale-110">
          Work
        </Link>
        <Link
          href={"/contact"}
          className="duration-300 outline-none hover:scale-110 focus-within:underline focus-within:scale-110">
          Contact
        </Link>
        <button
          className="max-md:block hidden absolute top-4 right-4"
          onClick={() => setIsOpen((prev) => !prev)}>
          <X />
        </button>
      </div>
      <button
        className="max-md:block hidden"
        onClick={() => setIsOpen((prev) => !prev)}>
        <Menu />
      </button>
    </header>
  );
};

export default Navbar;
