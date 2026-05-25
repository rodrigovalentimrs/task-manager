import { useState, useEffect } from "react";
import { loadTasks, saveTasks } from "../utils/storage";

export function useTasks() {
    const [tasks, setTasks] = useState(() => loadTasks());
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");
    const [editId, setEditId] = useState(null);
    const [filter, setFilter] = useState("all");

    function handleTitleChange(e) {
        setTitle(e.target.value);

        if (error) {
            setError("");
        }
    }

    function handleSubmit(e) {
        e.preventDefault()

        const errorMessage = validateTask();

        if (errorMessage) {
            setError(errorMessage);
            return;
        }

        if (editId !== null) {
            updateTask(editId);
        } else {
            addTask();
        }

    }

    function validateTask() {
        if (!title.trim()) {
            return "Digite uma tarefa";
        }
        return null
    }

    function addTask() {
        const newTask = {
            id: crypto.randomUUID(),
            title,
            done: false
        }

        setTasks((prev) => [...prev, newTask]);
        setTitle("");
    }

    function removeTask(id) {
        setTasks((prev) => prev.filter((task) => task.id !== id));
        setEditId(null);
    }

    function startEdit(id) {
        const taskToEdit = tasks.find((task) => task.id === id);

        if (!taskToEdit) return;

        setTitle(taskToEdit.title);
        setEditId(id);
    }

    function updateTask(id) {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        title: title
                    }
                    : task
            )
        )
        setTitle("");
        setEditId(null);
    }

    function toggleTask(id) {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        done: !task.done
                    }
                    : task
            )
        );
    }

    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") {
            return task.done;
        }

        if (filter === "pending") {
            return !task.done;
        }

        return true;
    });

    useEffect(() => {
        saveTasks(tasks);
    }, [tasks]);

    useEffect(() => {

        if (!error) return;

        const timer = setTimeout(() => {
            setError("")
        }, 2000);
        return () => clearTimeout(timer);
    }, [error]);


    return {
        filteredTasks,
        title,
        error,
        editId,
        filter,

        setFilter,

        handleTitleChange,
        handleSubmit,

        removeTask,
        toggleTask,
        startEdit
    }
}