import { useDispatch } from "react-redux";
import { deleteTodo, startEdit, toggleComplete } from "../slice/todoslice";

export const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  

  return (
    <li className="w-[400px] min-h-[30px] shadow rounded-xl px-4 py-3 mb-5 flex justify-between items-center">
      <input
        type="checkbox"
        checked={todo.isCompleted}
        className="w-5 h-3 cursor-pointer "
        onChange={() => dispatch(toggleComplete(index))}/>
      <span className={` font-medium w-[250px] break-words 
      ${todo.isCompleted ? "line-through text-gray-400" : ""}`}>
        {todo.title}
      </span>

      <div className="flex gap-3 items-center">
        <button onClick={() => dispatch(startEdit(index))}>✏️</button>
        <button onClick={() => dispatch(deleteTodo(index))}>❌</button>
      </div>
    </li>
  );
};
