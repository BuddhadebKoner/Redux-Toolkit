import React from 'react';
import TodoInput from './components/TodoInput';
import Todos from './components/Todos';
import { Provider } from 'react-redux';
import { store } from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-[#0d1117] py-10">
        <TodoInput />
        <Todos />
      </div>
    </Provider>
  );
};

export default App;
