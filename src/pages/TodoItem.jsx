import { useDispatch } from "react-redux";
// import { CiEdit } from "react-icons/ci";
// import { MdCancel } from "react-icons/md";
import {deleteTodo,setTask,setEditId, updateTodo,} from "../slice";

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(setEditId(todo._id));
    dispatch(setTask(todo.title));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo._id));
  };

  const togglecomplete=()=>{
    dispatch(updateTodo({
      id:todo._id,
      task:todo.title,
      isCompleted:!todo.isCompleted
    }))
  }

  return (
<div className="flex w-3xl justify-between items-start bg-gray-50 py-5 px-9 rounded-2xl">
  <div className="flex items-center gap-2 mb-2">
    <input 
      type="checkbox"
      checked={todo.isCompleted}
      onChange={togglecomplete}
    />
   <span
  className={`font-serif  w-[300px] break-words mb-2 ${
    todo.isCompleted ? "line-through text-gray-400" : ""
  }`}
>
  {todo.title}
</span>
  </div>
  <div className="flex gap-6 ">
    <button onClick={handleEdit} >✏️</button>
    <button onClick={handleDelete} className="h-3" >✖️</button>
  </div>
</div>

  );
};
