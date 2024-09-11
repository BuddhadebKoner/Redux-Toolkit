import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/Todo/todoSlice';

const TodoInput = () => {
   const [input, setInput] = useState('');
   const dispatch = useDispatch();


   const addTodoHandler = (e) => {
      e.preventDefault();
      if (!input) return;
      dispatch(addTodo(input));
      setInput('');
   }

   return (
      <form onSubmit={addTodoHandler}>
         <div className="w-full max-w-lg mx-auto mt-8">
            <input
               type="text"
               placeholder="Add a new task"
               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text-red-50"
               value={input}
               onChange={(e) => setInput(e.target.value)}
            />
            <button className="block w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded-lg" type='submit'>
               Add Task
            </button>
         </div>
      </form>
   );
};

export default TodoInput;
