import BoardBlock from "./BoardBlock";

const Board = () => {
  return (
    <div className="flex h-screen justify-around bg-gray-200 p-2 gap-2">
      <BoardBlock />
      <BoardBlock />
      <BoardBlock />
    </div>
  );
};

export default Board;
