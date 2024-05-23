import React, { useState, useCallback, useMemo } from 'react';
import { Todo } from './types/Todo';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  const toggleComplete = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const todoList = useMemo(() => <TodoList todos={todos} toggleComplete={toggleComplete} />, [todos, toggleComplete]);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput addTodo={addTodo} />
      {todoList}
    </div>
  );
};

export default App;