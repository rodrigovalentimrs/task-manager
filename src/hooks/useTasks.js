import { useState, useEffect } from "react";

export function useTasks(){
    const [tasks, setTasks] = useState(() => loadTasks());
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");
    const [editId, setEditId] = useState(null);

        function handleTitleChange(e){
            setTitle(e.target.value);
        }

        function handleSubmit(e){
            e.preventDefault()

            const erroMessage = validateTask(title);

            if (erroMessage) {
                setError(erroMessage);
                return;
            }

            if(editId !== null){
                updateTask(editId, title);
            }else{
                addTask();
            }

        }

        function validateTask(title){
            if(!title.trim()){
                    return "Digite uma tarefa";
            }
            return null
        }

        function addTask(){
            const newTask = {
                id: crypto.randomUUID(),
                title,
                done: false
            }

            setTasks((prev) => [...prev, newTask]);
            setTitle("");
        }

        function removeTask(id){
            setTasks((prev) => prev.filter((task) => task.id !== id));
            editId(null);
        }

        function updateTask(id, newTitle){
            setTasks((prev) =>
                prev.map((task) =>
                    task.id === editId
                        ? {
                            ...task,
                            title: newTitle
                        }
                        : task
                )
            )
            setTitle("");
            setEditId(null);
        }
        

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