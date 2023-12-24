import { ClockCircleOutlined } from "@ant-design/icons";
import Chip from "../Chip";

const TaskCard = () => {
  return (
    <div className="rounded-lg bg-gray-300 flex p-2">
      <div className="w-2/3 flex flex-col justify-around">
        <Chip text="Task-123" />
        <h2 className="flex-wrap">We need to do something</h2>
        <div className="flex gap-x-1 items-center">
          <ClockCircleOutlined />
          <span>Dec 9, 2023</span>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/3">
        <img className="h-1/3" about="avatar" src="public\UserAvatar.png" />
      </div>
    </div>
  );
};

export default TaskCard;
