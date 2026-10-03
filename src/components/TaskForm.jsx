import { useEffect, useRef } from "react";

function TaskForm({ todo, editId, onChange, onSubmit }) {
  const inputRef = useRef(null);
  const isEditing = editId !== null;

  // page khulne par, aur jab bhi Edit dabaya jaye, input par focus
  useEffect(() => {
    inputRef.current.focus();
  }, [editId]);

  const handleSubmit = (e) => {
    e.preventDefault(); // page reload hone se rokta hai
    onSubmit();
    inputRef.current.focus(); // add/save ke baad dobara input par focus
  };

  return (
    <form onSubmit={handleSubmit} className="addtodo my-5">
      <h2 className="text-xl font-bold">
        {isEditing ? "Edit Todo" : "Add a Todo"}
      </h2>
      <input
        ref={inputRef}
        onChange={onChange}
        value={todo}
        type="text"
        className="bg-amber-50 border-gray-300 w-1/2"
      />
      <button
        type="submit"
        className="bg-violet-800 hover:bg-violet-950 text-sm font-bold p-3 py-1 text-white rounded-md mx-6"
      >
        {isEditing ? "Save" : "Add"}
      </button>
    </form>
  );
}

export default TaskForm;