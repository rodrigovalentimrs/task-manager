import { useTasks } from "./hooks/useTasks";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { TaskFilter } from "./components/TaskFilter";

function App() {
  const {
    title,
    error,
    editId,
    handleSubmit,
    handleTitleChange,
    filteredTasks,
    removeTask,
    toggleTask,
    startEditTask,
    filter,
    setFilter,
  } = useTasks();

  return (
    <main className="min-h-screen bg-gray-100 p-4 flex items-start justify-center">
      <div className="w-full max-w-md bg-white p-4 rounded shadow">
        
        <h1 className="text-2xl font-bold text-center mb-4">
          Lista de tarefas
        </h1>

        <TaskFilter filter={filter} setFilter={setFilter} />

        <TaskForm
          title={title}
          error={error}
          editId={editId}
          handleChange={handleTitleChange}
          handleSubmit={handleSubmit}
        />

        <TaskList
          tasks={filteredTasks}
          removeTask={removeTask}
          toggleTask={toggleTask}
          startEditTask={startEditTask}
        />
      </div>
    </main>
  );
}

export default App;