import { Check, CornerDownLeft, ListTodo, Plus } from "lucide-react";
export default function Home() {
  return (
    <div className="w-2xl bg-white rounded-3xl px-8">
      <header className="pt-8 pb-6">
        <div className="flex items-center gap-3">
          <span className="size-11 rounded-2xl bg-[#E5F2ED] text-[#23735A] flex justify-center items-center">
            <ListTodo />
          </span>
          <h1 className="text-[#213D35] font-semibold text-2xl">My tasks.</h1>
        </div>
      </header>
      <form className="bg-[#F4F8F5] border border-[#DCE9E2] rounded-2xl flex justify-between py-3 px-2">
        <input className="text-[#213D35] flex-1 text-base border-none outline-none" type="text" placeholder="What needs to get done? " />
        <button disabled type="submit" className="translate duration-300 ease-in active:scale-90 disabled:cursor-not-allowed bg-[#D8E5DD] rounded-xl py-[13.5px] px-[21.5px] gap-2 flex justify-center items-center text-[#63796C] font-semibold">
          <span className="size-4 flex justify-center items-center text-[#63796C] ">
            <Plus />
          </span>
          Add task
        </button>
      </form>
      <p className="flex gap-1.5 text-[#7A8881] justify-end pt-3 text-[11px] items-center">
        <CornerDownLeft className="size-3"/>
        Enter to add a task
      </p>
      <div className="flex justify-between pt-14.25 border-b border-[#E9EEEB] pb-2">
        <div className="text-[#7B8680] font-semibold text-sm flex gap-5">
          <button className="hover:text-[#236B53]">All</button>
          <button className="hover:text-[#236B53]">Active</button>
          <button className="hover:text-[#236B53]">Completed</button>
        </div>
        <span className="text-[#65766C] text-[11px] flex justify-center items-center bg-[#F0F4F1] px-1 py-[2.5px] rounded-md">0</span>
      </div>
      <div className="flex items-center justify-center flex-col py-[61.5px] gap-2">
        <div className="size-14 bg-[#F0F6F2] flex justify-center items-center rounded-[100px] text-[#6C9B82]"><Check /></div>
        <div className="text-[#304C3E] font-semibold text-base">Your list starts here</div>
        <div className="text-[#7A8881] text-sm ">Add your first task above.</div>
      </div>
    </div>
  );
}
