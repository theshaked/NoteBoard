import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  widthFit?: boolean;
  className?: string;
  primaryStyle?: boolean;
  iconStyle?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${props.className} 
      ${props.className} 
      ${
        props.primaryStyle
          ? `bg-cyan-600 hover:bg-cyan-700`
          : `bg-zinc-600 hover:bg-zinc-700`
      }
      ${props.widthFit ? "" : "w-full"}
      ${props.iconStyle ? "p-2 bg-transparent hover:bg-transparent" : "px-3"}
      text-gray-50 hover:text-white font-medium rounded-md my-1 active:scale-95 ease-in-out transition-all flex justify-center items-center gap-2`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
