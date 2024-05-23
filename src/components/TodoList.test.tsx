import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';
import { Todo } from '../types/Todo';

test('renders TodoList and toggles completion', () => {
  const todos: Todo[] = [
    { id: 1, text: 'Test Todo 1', completed: false },
    { id: 2, text: 'Test Todo 2', completed: true },
  ];
  const toggleComplete = jest.fn();

  render(<TodoList todos={todos} toggleComplete={toggleComplete} />);

  const checkboxes = screen.getAllByRole('checkbox');
  expect(checkboxes[0]).not.toBeChecked();
  expect(checkboxes[1]).toBeChecked();

  fireEvent.click(checkboxes[0]);
  expect(toggleComplete).toHaveBeenCalledWith(todos[0].id);
});