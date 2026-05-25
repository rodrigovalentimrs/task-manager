import { useState } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState("all");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) {
      setError("Digite uma tarefa");
      return;
    }

    setError("");

    if (editId !== null) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editId ? { ...task, title } : task
        )
      );
      setEditId(null);
    } else {
      const newTask = {
        id: Date.now(),
        title,
        done: false,
      };

      setTasks((prev) => [...prev, newTask]);
    }

    setTitle("");
  }

  function removeTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function startEditTask(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    setTitle(task.title);
    setEditId(id);
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.done;
    if (filter === "completed") return task.done;
    return true;
  });

  return {
    title,
    error,
    editId,
    tasks,
    filteredTasks,
    filter,
    setFilter,

    handleTitleChange,
    handleSubmit,
    removeTask,
    toggleTask,
    startEditTask,
  };
}