import { useTasks } from "./hooks/useTasks";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

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
    startEdit
  } = useTasks();

  return (
    <main>
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
        startEdit={startEdit}
      />
    </main>
  );
}

export default App;