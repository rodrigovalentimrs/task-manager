export function loadTasks(){
    try {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    } catch {
        return [];
    }
}

export function saveTasks(tasks){
    localStorage.setItem("tasks", JSON.stringify(tasks))
}