import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoInput from './TodoInput';

test('adds a new todo', () => {
  const addTodo = jest.fn();

  render(<TodoInput addTodo={addTodo} />);

  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: /add todo/i });

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  expect(addTodo).toHaveBeenCalledWith('New Todo');
  expect(input).toHaveValue('');
});