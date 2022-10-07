import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  function addTodo(text) {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  }

  function resetTodos() {
    setTodos([]);
  }

  function deleteCompletedTodos() {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      {todos.length > 0 ? (
        <TodosActions
          resetTodos={resetTodos}
          deleteCompletedTodos={deleteCompletedTodos}
          completedTodosCount={!!completedTodosCount}
        />
      ) : (
        ''
      )}
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      {completedTodosCount > 0 ? (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
