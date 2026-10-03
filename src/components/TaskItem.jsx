function TaskItem({ item, onToggle, onEdit, onDelete }) {
  return (
    <div className="todo flex w-1/4 my-3 justify-between">
      <div className="flex gap-5">
        <input
          type="checkbox"
          checked={item.isCompleted}
          onChange={() => onToggle(item.id)}
        />
        <div className={item.isCompleted ? "line-through" : ""}>
          {item.todo}
        </div>
      </div>
      <div className="buttons">
        <button
          onClick={() => onEdit(item.id)}
          className="bg-violet-800 hover:bg-violet-950 text-sm font-bold p-3 py-1 text-white rounded-md mx-1"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="bg-violet-800 hover:bg-violet-950 text-sm font-bold p-3 py-1 text-white rounded-md mx-1"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;