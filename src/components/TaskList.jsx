import TaskItem from "./TaskItem";

function TaskList({ todos, onToggle, onEdit, onDelete }) {
  return (
    <div className="todos">
      {todos.length === 0 && <div className="m-5">No todos to display.</div>}
      {todos.map((item) => (
        <TaskItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;