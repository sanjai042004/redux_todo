import { useDispatch, useSelector } from "react-redux";
// import { addTodo, setTask, updateTodo } from "../slice/todoslice";
import { AddTodo } from "./AddTodo";
import { UpdateTodo } from "./UpdateTodo";
import { setTask } from "../slice/fetchSlice";

export const TodoInput = () => {
  const task = useSelector((state) => state.todo.task);
  const editIndex = useSelector((state) => state.todo.editIndex);
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (task.trim() === "") return;

      if (editIndex === -1) {
        dispatch(addTodo());
      } else {
        dispatch(updateTodo());
      }
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <input
        className="border-3 border-gray-500 rounded p-2 w-2xs "
        type="text"
        onKeyDown={handleKeyDown}
        value={task}
        placeholder="Add a new task..."
        onChange={(e) => dispatch(setTask(e.target.value))}
      />
      {editIndex === -1 ? <AddTodo /> : <UpdateTodo />}
    </div>
  );
};
