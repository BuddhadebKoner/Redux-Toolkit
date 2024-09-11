import React from 'react';

const TodoInput = () => {
   return (
      <div className="w-full max-w-lg mx-auto mt-8">
         <input
            type="text"
            placeholder="Add a new task"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
         />
         <button className="block w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded-lg">
            Add Task
         </button>
      </div>
   );
};

export default TodoInput;
