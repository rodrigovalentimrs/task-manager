export function TaskForm({ title, error, editId, handleChange, handleSubmit }) {
  return (
    <div className="mb-4">
      {error && (
        <p role="alert" className="text-red-500 text-sm mb-2">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium mb-1 text-center"
          >
            Título
          </label>

          <input
            autoFocus
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
            placeholder={
              editId !== null ? "Editar tarefa..." : "Nova tarefa..."
            }
            className="
              w-full
              border
              border-gray-300
              rounded
              px-3
              py-2
              outline-none
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            "
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          {editId !== null ? "Salvar" : "Adicionar"}
        </button>
      </form>
    </div>
  );
}
