import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../slice/todoslice";

export const UpdateTodo = () => {
  const task = useSelector((state) => state.todo.task);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    if (task.trim() !== "") {
      dispatch(updateTodo());
    }
  };
  return (
    <div>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={handleUpdate}>Update</button>
    </div>
  );
};
