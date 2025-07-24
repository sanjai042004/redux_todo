import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import { useEffect } from "react";
import { fetchTodos } from "../slice/fetchSlice";

export const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, loading } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="bg-white">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </div>
  );
};
