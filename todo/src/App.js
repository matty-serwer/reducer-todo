import React, { useState, useReducer } from 'react';
import reducer from './reducers';
import { setNewTodo, setCompleted, setCurrentText } from './actions';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {

  const testArray = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Wash your face',
    completed: false,
    id: 3892987590
  },
  {
    item: 'Eat Tamales',
    completed: false,
    id: 3892987591
  }]

  const initialState = {
    list: testArray,
    currentText: ''
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleToggleItem = () => {

  }

  return(
    <div className='App'>
      <TodoForm />
      <TodoList todoList={state.list} handleToggleItem={handleToggleItem}/>
    </div>

)}

export default App;
