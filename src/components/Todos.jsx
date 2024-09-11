import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/Todo/todoSlice';


const Todos = () => {
   const dispatch = useDispatch();
   const todos = useSelector((state) => state.todos);

   return (
      <div className="w-full max-w-lg mx-auto mt-6">
         {
            todos.map((todo) => (
               <div key={todo.id} className="flex items-center justify-between p-4 bg-transparent border border-gray-200 rounded-lg mt-4 text-red-50">
                  <p>{todo.text}</p>
                  <button onClick={() => dispatch(removeTodo(todo.id))} className="text-red-500 font-semibold">Delete</button>
               </div>
            ))
         }
      </div>
   );
};

export default Todos;
