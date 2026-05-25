export function TaskItem({ task, removeTask, toggleTask, startEditTask }) {
  return (
    <li className="flex items-center justify-between border border-gray-200 rounded p-3 gap-3">
      <div className="flex items-center gap-2 flex-1">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(task.id)}
          />

          <span className={task.done ? "line-through text-gray-400" : ""}>
            {task.title}
          </span>
        </label>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => startEditTask(task.id)}
          aria-label={`Editar tarefa ${task.title}`}
          className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition"
        >
          Editar
        </button>

        <button
          onClick={() => removeTask(task.id)}
          aria-label={`Excluir tarefa ${task.title}`}
          className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition"
        >
          Excluir
        </button>
      </div>
    </li>
  );
}
