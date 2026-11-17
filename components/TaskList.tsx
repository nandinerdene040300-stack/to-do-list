import { Check, Trash } from "lucide-react";
import React from "react";
import { Task } from "@/types";
type TaskListProps = {
  tasks: Task[];
};

export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="flex  h-15 items-center justify-between">
          <div className="flex gap-3">
            <input type="checkbox" className="size-4" />
            <div className="text-[#30483C] font-medium text-sm">{task.title}</div>
          </div>
          <button>
            <Trash className="size-4 " />
          </button>
        </div>
      ))}
    </div>
  );
};
