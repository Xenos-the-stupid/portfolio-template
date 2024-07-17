import { ComponentProps } from "react";

const Button = ({ ...props }: ComponentProps<"button">) => {
  return (
    <button
      {...props}
      className="text-white bg-black px-16 py-6 font-semibold text-xl duration-300 focus:ring-4 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-offset-2 focus-within:outline-none ring-black"
    />
  );
};

export default Button;
