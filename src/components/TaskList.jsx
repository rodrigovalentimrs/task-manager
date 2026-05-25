
import { TaskItem } from "./TaskItem";

export function TaskList({
    tasks,
    removeTask,
    toggleTask,
    startEdit
}) {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    removeTask={removeTask}
                    toggleTask={toggleTask}
                    startEdit={startEdit}
                />
            ))}
        </ul>
    );
}