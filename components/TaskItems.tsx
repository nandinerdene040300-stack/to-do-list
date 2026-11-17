import { CornerDownLeft } from "lucide-react";



export const TaskItems = () => {
  return (
    <div>
      {" "}
      <p className="flex gap-1.5 text-[#7A8881] justify-end pt-3 text-[11px] items-center">
        <CornerDownLeft className="size-3" />
        Enter to add a task
      </p>
    </div>
  );
};
