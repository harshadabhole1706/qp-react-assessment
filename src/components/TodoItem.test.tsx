
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';
import { Todo } from '../types/Todo';

test('renders TodoItem and toggles completion', () => {
  const todo: Todo = { id: 1, text: 'Test Todo', completed: false };
  const toggleComplete = jest.fn();

  render(<TodoItem todo={todo} toggleComplete={toggleComplete} />);

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(toggleComplete).toHaveBeenCalledWith(todo.id);
});