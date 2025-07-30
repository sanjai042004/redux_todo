import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { BsClipboardCheckFill } from "react-icons/bs";

export const Todo = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center pt-10 px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-2">
        <BsClipboardCheckFill />
        Redux toDo-List
      </h1>
      <div className="w-full max-w-2xl">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};
