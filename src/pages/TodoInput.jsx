import { useDispatch, useSelector } from "react-redux";
import { setTask, addTodo, updateTodo, resetTask } from "../slice";

export const TodoInput = () => {
  const dispatch = useDispatch();

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
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow mb-10"
    >
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => dispatch(setTask(e.target.value))}
        className="flex-1 border border-blue-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-md font-semibold transition"
      >
        {editId ? "Update" : "Add"}
      </button>
    </form>
  );
};
