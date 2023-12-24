interface ChipProps {
  text: string;
}

const Chip = (props: ChipProps) => {
  return (
    <div>
      <span className="select-none items-center whitespace-nowrap rounded-lg bg-cyan-800 py-1 px-2 font-sans text-xs font-bold uppercase text-white">
        {props.text}
      </span>
    </div>
  );
};

export default Chip;
