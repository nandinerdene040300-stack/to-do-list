import { Plus } from "lucide-react";
import { ChangeEvent, useState, SubmitEvent } from "react";

type TaskFormProps = {
  onCreateTask: (title: string) => void;
};

export const TaskForm = ({ onCreateTask }: TaskFormProps) => {
  const [taskTitle, setTaskTitle] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreateTask(taskTitle);
    setTaskTitle("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-[#F4F8F5] border border-[#DCE9E2] rounded-2xl flex justify-between py-3 px-2">
        <input
          onChange={handleChange}
          value={taskTitle}
          className="text-[#213D35] flex-1 text-base border-none outline-none focus:bg-white rounded-xl"
          type="text"
          placeholder="What needs to get done? "
        />
        <button
          type="submit"
          disabled={!taskTitle.trim()}
          className="translate duration-300 ease-in active:scale-90 disabled:cursor-not-allowed bg-[#D8E5DD] rounded-xl py-[13.5px] px-[21.5px] gap-2 flex justify-center items-center text-[#63796C] font-semibold"
        >
          <span className="size-4 flex justify-center items-center text-[#63796C] ">
            <Plus />
          </span>
          Add task
        </button>
      </form>
    </div>
  );
};
