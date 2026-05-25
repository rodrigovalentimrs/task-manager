import { TaskItem } from "./TaskItem";

export function TaskList({
  tasks,
  removeTask,
  toggleTask,
  startEditTask,
}) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleTask={toggleTask}
          startEditTask={startEditTask}
        />
      ))}
    </ul>
  );
}