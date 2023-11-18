import { ReactNode } from "react";

interface IconButtonProps {
  className?: string;
  children: ReactNode;
  onClick: () => void;
}

const IconButton = (props: IconButtonProps) => {
  return (
    <div
      onClick={props.onClick}
      className={`${props.className}
  hover:cursor-pointer active:scale-95 hover:bg-zinc-700 rounded-full text-slate-100 hover:text-white p-1 inline-flex transition-all`}
    >
      {props.children}
    </div>
  );
};

export default IconButton;
