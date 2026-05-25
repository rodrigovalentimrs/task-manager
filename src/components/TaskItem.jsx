export function TaskItem({
    task,
    removeTask,
    toggleTask,
    startEdit
}) {
    return (
        <li>
            <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
            />

            <span
                style={{
                    textDecoration: task.done ? "line-through" : "none"
                }}
            >
                {task.title}
            </span>

            <button onClick={() => startEdit(task.id)}>
                Editar
            </button>

            <button onClick={() => removeTask(task.id)}>
                Excluir
            </button>
        </li>
    );
}
