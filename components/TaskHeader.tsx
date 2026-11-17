import { ListTodo } from 'lucide-react'
import React from 'react'

export const TaskHeader = () => {
  return (
    <div>   <header className="pt-8 pb-6">
        <div className="flex items-center gap-3">
          <span className="size-11 rounded-2xl bg-[#E5F2ED] text-[#23735A] flex justify-center items-center">
            <ListTodo />
          </span>
          <h1 className="text-[#213D35] font-semibold text-2xl">My tasks.</h1>
        </div>
      </header></div>
  )
}
