export function TaskItem({
  task,
  removeTask,
  toggleTask,
  startEditTask,
}) {
  return (
    <li className="flex items-center justify-between border border-gray-200 rounded p-3 gap-3">
      
      <div className="flex items-center gap-2 flex-1">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task.id)}
        />

        <span className={task.done ? "line-through text-gray-400" : ""}>
          {task.title}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => startEditTask(task.id)}
          className="text-blue-500 hover:text-blue-700 text-sm"
        >
          Editar
        </button>

        <button
          onClick={() => removeTask(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition"
        >
          Excluir
        </button>
      </div>
    </li>
  );
}