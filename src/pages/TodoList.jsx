import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTodos } from "../slice";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const dispatch = useDispatch();

  // 🛡️ Fallbacks if undefined

  const todoState = useSelector((state) => state.todo || {});
  
  const todos = todoState.todos || [];
  const loading = todoState.loading || false;
  const error = todoState.error || null;

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);


if (loading) return <p>Loading.....</p>;

if (error) return <p className="text-red-500">Error: {error}</p>;

  if (todos.length === 0) {

    return <p className="font-extrabold text-2xl text-center text-gray-500">No todos yet. Add one!</p>;
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => {
        return <TodoItem key={todo._id} todo={todo} />
      } 
      )}
    </div>
  );
};
