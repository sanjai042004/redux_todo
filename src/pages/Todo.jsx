import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'

export const Todo = () => {

  
  return (
    <div className='flex flex-col max-h-screen items-center my-20 '>
      <div className='w-full max-w-md flex flex-col items-center gap-6 '>
        <h1 className='text-3xl font-extrabold'>Redux todDo-List</h1>
        
        <TodoInput />
        <TodoList />
      </div>
    </div>
  )
}
