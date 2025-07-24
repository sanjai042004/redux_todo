import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../slice/todoslice";
import { createTodo } from "../slice/fetchSlice";


export const AddTodo = () => {
  const task = useSelector((state) => state.todo.task);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim() !== "") {
      dispatch(createTodo());
    }
  };

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={handleAdd}
    >
      Add
    </button>
  );
};
