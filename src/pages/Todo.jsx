import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
import { BsClipboardCheckFill } from "react-icons/bs";

export const Todo = () => {

  
  return (
    <div className='flex flex-col min-h-screen  items-center pt-10 bg-blue-50 '>
      <div className='w-full max-w-md flex flex-col items-center gap-6 '>
        <h1 className=' flex gap-2 text-3xl text-blue-400 font-extrabold'><BsClipboardCheckFill />Redux toDo-List</h1>
        
        <TodoInput />
        <TodoList />
      </div>
    </div>
  )
}
