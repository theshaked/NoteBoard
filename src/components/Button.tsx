interface ButtonProps {
  onClick: () => void;
  content: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className="text-white bg-cyan-700 font-medium rounded-lg px-3 my-1 hover:bg-cyan-800 active:scale-95 ease-in-out transition-all"
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
};

export default Button;
