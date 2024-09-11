import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../features/Todo/todoSlice';

const Todos = () => {
   const dispatch = useDispatch();
   const todos = useSelector((state) => state.todos);
   const [editingId, setEditingId] = useState(null);
   const [newText, setNewText] = useState('');

   const handeleEditTodo = (id, currentText) => {
      setEditingId(id);
      setNewText(currentText);
   };

   const saveEditTodo = (id) => {
      dispatch(updateTodo({ id, text: newText }));
      setEditingId(null);
      setNewText('');
   };

   return (
      <div className="w-full max-w-lg mx-auto mt-6">
         {
            todos.map((todo) => (
               <div key={todo.id} className="flex items-center justify-between p-4 bg-transparent border border-gray-200 rounded-lg mt-4 text-red-50">
                  {
                     editingId === todo.id ? (
                        <input
                           type="text"
                           value={newText}
                           onChange={(e) => setNewText(e.target.value)}
                           className="text-black"
                        />
                     ) : (
                        <p>{todo.text}</p>
                     )
                  }
                  <div className='flex items-center space-x-4'>
                     {
                        editingId === todo.id ? (
                           <button onClick={() => saveEditTodo(todo.id)} className="text-green-500 font-semibold">Save</button>
                        ) : (
                           <button onClick={() => handeleEditTodo(todo.id, todo.text)} className="text-blue-500 font-semibold">Edit</button>
                        )
                     }
                     <button onClick={() => dispatch(removeTodo(todo.id))} className="text-red-500 font-semibold">Delete</button>
                  </div>
               </div>
            ))
         }
      </div>
   );
};

export default Todos;
