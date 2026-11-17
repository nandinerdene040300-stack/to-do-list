
import type { Task } from "@/types";
type TaskFilterProps = {
  tasks: Task[];
};

export const TaskFilter = ({ tasks }: TaskFilterProps) => {
  return (
    <div>
      <div className="flex justify-between pt-14.25 border-b border-[#E9EEEB] pb-2">
        <div className="text-[#7B8680] font-semibold text-sm flex gap-5">
          <button className="hover:text-[#236B53]">All</button>
          <button className="hover:text-[#236B53]">Active</button>
          <button className="hover:text-[#236B53]">Completed</button>
        </div>
        <span className="text-[#65766C] text-[11px] flex justify-center items-center bg-[#F0F4F1] px-1 py-[2.5px] rounded-md">{tasks.length}</span>
      </div>
    </div>
  );
};
