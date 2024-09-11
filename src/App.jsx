import React from 'react';
import TodoInput from './components/TodoInput';
import Todos from './components/Todos';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <TodoInput />
      <Todos />
    </div>
  );
};

export default App;
