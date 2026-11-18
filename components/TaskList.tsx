"use client";
import { TaskEmpty } from "./TaskEmpty";
import { Trash } from "lucide-react";
import { Task } from "@/types";
type TaskListProps = {
  tasks: Task[];
  hasTasks: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export const TaskList = ({ tasks, hasTasks, onToggle, onDelete }: TaskListProps) => {
  if (!tasks.length) return <TaskEmpty hasTasks={hasTasks} />;

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="flex h-15 items-center justify-between">
          <div className="flex gap-3">
            <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} className="size-4 cursor-pointer" />
            <div className={`text-[#30483C] font-medium text-sm ${task.completed ? "line-through text-gray-400" : ""}`}>{task.title}</div>
          </div>
          <button onClick={() => onDelete(task.id)} className="cursor-pointer flex items-center justify-center rounded-xl p-3 hover:bg-red-50 hover:text-red-500">
            <Trash className="size-4 " />
          </button>
        </div>
      ))}
    </div>
  );
};
