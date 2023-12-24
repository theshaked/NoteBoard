import TaskCard from "./TaskCard";

const BoardBlock = () => {
  return (
    <div className="rounded-lg space-y-2 bg-gray-400 p-2">
      <h1 className="text-xl text-center border-b">Title</h1>
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
};

export default BoardBlock;
