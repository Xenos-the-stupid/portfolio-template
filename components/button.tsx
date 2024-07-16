import { ComponentProps } from "react";

const button = ({ ...props }: ComponentProps<"button">) => {
  return (
    <button
      {...props}
      className="text-white bg-black px-16 py-6 font-semibold text-xl"
    />
  );
};

export default button;
