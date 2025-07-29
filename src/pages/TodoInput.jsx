import { useDispatch, useSelector } from "react-redux";
import { setTask, addTodo, updateTodo, resetTask } from "../slice";

export const TodoInput = () => {
  const dispatch = useDispatch();

  // Select task and editId from Redux store
  const task = useSelector((state) => state.todo.task);
  const editId = useSelector((state) => state.todo.editId);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task?.trim()) return;

    if (editId) {
      dispatch(updateTodo({ id: editId, task }));
    } else {
      dispatch(addTodo(task));
    }

    dispatch(resetTask());
  };

  return (
    <form onSubmit={handleSubmit} className="flex bg-white w-3xl p-5 rounded-2xl gap-6 mb-6 items-center">
      <input
        type="text"
        value={task || ""}  
        onChange={(e) => dispatch(setTask(e.target.value))}
        placeholder="Enter a task..."
        className="flex-1  w-2xl px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className={`px-7 py-3 rounded-lg text-white font-semibold ${
          editId ? "bg-yellow-500 hover:bg-yellow-600" : "bg-purple-400 hover:bg-purple-500"
        }`}
      >
        {editId ? "Update" : "Add"}
      </button>
    </form>
  );
};
