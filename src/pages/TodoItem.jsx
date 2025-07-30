import { useDispatch } from "react-redux";
// import { CiEdit } from "react-icons/ci";
// import { MdCancel } from "react-icons/md";
import { deleteTodo, setTask, setEditId, updateTodo } from "../slice";

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(setEditId(todo._id));
    dispatch(setTask(todo.title));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo._id));
  };

  const toggleComplete = () => {
    dispatch(
      updateTodo({
        id: todo._id,
        task: todo.title,
        isCompleted: !todo.isCompleted,
      })
    );
  };

  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-6 rounded-xl w-full">
      <div className="flex items-center gap-3">
        <input className="hover:cursor-pointer "
          type="checkbox"
          checked={todo.isCompleted}
          onChange={toggleComplete}
        />
        <span
          className={`font-sans  ${todo.isCompleted ? "line-through text-gray-400" : "text-gray-800" }`}
          style={{ wordBreak: "break-word" }}
        >
          {todo.title}
        </span>
      </div>
      <div className="flex items-center gap-3 text-lg">
        <button
          onClick={handleEdit}
          className="text-orange-500 hover:text-orange-600"
        >
          ✏️
        </button>
        <button
          onClick={handleDelete}
          className="text-purple-600 hover:text-purple-700"
        >
          ✖️
        </button>
      </div>
    </div>
  );
};
