export function TaskForm({ title, error, editId, handleChange, handleSubmit }) {
  return (
    <div>
      {error && (
        <p role="alert" className="error">
          {error}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleChange}
          placeholder={editId !== null ? "Editar tarefa..." : "Nova tarefa..."}
        />

        <button type="submit">
          {editId !== null ? "Salvar" : "Adicionar"}
        </button>
      </form>
    </div>
  );
}
