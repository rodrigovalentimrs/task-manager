export function TaskFilter({ filter, setFilter }) {
  return (
    <div className="flex gap-2 mb-4 justify-center">
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? "font-bold underline" : ""}
      >
        Todos
      </button>

      <button
        onClick={() => setFilter("pending")}
        className={filter === "pending" ? "font-bold underline" : ""}
      >
        Pendentes
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={filter === "completed" ? "font-bold underline" : ""}
      >
        Concluídos
      </button>
    </div>
  );
}