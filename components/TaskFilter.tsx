import type { Task } from "@/types";
import { MouseEvent } from "react";
type TaskFilterProps = {
  tasks: Task[];
  filter: string;
  onFilter: (filterValue: string) => void;
};

export const TaskFilter = ({ tasks, filter, onFilter }: TaskFilterProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onFilter(event.currentTarget.id);
  };

  return (
    <div>
      <div className="flex justify-between pt-14.25 border-b border-[#E9EEEB] pb-2">
        <div className="text-[#7B8680] font-semibold text-sm flex gap-5">
          {["All", "Active", "Completed"].map((item) => (
            <button onClick={handleClick} id={item} className={`hover:text-[#236B53] border-b-2 ${filter === item ? "border-b-green-900" : "border-b-transparent"}`} key={item}>
              {item}
            </button>
          ))}
        </div>
        <span className="text-[#65766C] text-[11px] flex justify-center items-center bg-[#F0F4F1] px-1 py-[2.5px] rounded-md">{tasks.length}</span>
      </div>
    </div>
  );
};
