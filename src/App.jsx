import { useState ,useEffect} from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
  try {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
});

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    if (todo.trim() === "") return; // validation

    if (editId !== null) {
      // EDIT mode
      setTodos(
        todos.map((item) =>
          item.id === editId ? { ...item, todo: todo.trim() } : item,
        ),
      );
      setEditId(null);
    } else {
      // ADD mode
      setTodos([
        ...todos,
        { id: uuidv4(), todo: todo.trim(), isCompleted: false },
      ]);
    }
    setTodo("");
  };

  const handleEdit = (id) => {
    const t = todos.find((item) => item.id === id);
    setTodo(t.todo);
    setEditId(id);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
    if (editId === id) {
      setEditId(null);
      setTodo("");
    }
  };

  const handleCheckbox = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
      ),
    );
  };

  return (
    <>
      <Header />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <TaskForm
          todo={todo}
          editId={editId}
          onChange={handleChange}
          onSubmit={handleAdd}
        />
        <h2 className="font-bold text-xl">Your Todos</h2>
        <TaskList
          todos={todos}
          onToggle={handleCheckbox}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default App;