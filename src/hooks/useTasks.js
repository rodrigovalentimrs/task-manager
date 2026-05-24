import { useState, useEffect } from "react";

export function useTasks(){
    const [tasks, setTasks] = useState(() => loadTasks());
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");
    const [editId, setEditId] = useState(null);

    function addTask(){}

    function deleteTask(id){}

    function editTask(id, newTitle){}
    

        useEffect(() => {
        saveTasks(tasks);
    }, [tasks]);

    useEffect(() => {

        if(!error) return;

        const timer = setTimeout(() => {
            setError("")
        }, 2000);
        return () => clearTimeout(timer);
    }, [error]);
}