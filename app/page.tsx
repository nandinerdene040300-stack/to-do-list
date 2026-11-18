"use client";
import { Task } from "@/types";
import { useState } from "react";
import { TaskForm, TaskHeader, TaskFilter, TaskItems, TaskList } from "@/components";

const page = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState("All");

  const createTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    setTasks((current) => [newTask, ...current]);
  };

  const handleToggle = (id: string) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleFilter = (filterValue: string) => {
    setFilter(filterValue);
  };

  const visibleTasks = tasks.filter((task) => filter === "All" || (filter === "Active" ? !task.completed : task.completed));

  return (
    <div className="w-2xl bg-white rounded-3xl px-8">
      <TaskHeader />
      <TaskForm onCreateTask={createTask} />
      <TaskItems />
      <TaskFilter tasks={visibleTasks} filter={filter} onFilter={handleFilter} />
      <TaskList tasks={visibleTasks} hasTasks={tasks.length > 0} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
};

export default page;
