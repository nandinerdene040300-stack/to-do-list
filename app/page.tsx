"use client";
import { Task } from "@/types";
import { useState } from "react";
import { TaskForm, TaskHeader, TaskEmpty, TaskFilter, TaskItems, TaskList } from "@/components";

const page = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    setTasks((current) => [newTask, ...current]);
  };

  return (
    <div className="w-2xl bg-white rounded-3xl px-8">
      <TaskHeader />
      <TaskForm onCreateTask={createTask} />
      <TaskItems />
      <TaskFilter />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default page;
