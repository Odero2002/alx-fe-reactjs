import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import TodoForm from './TodoForm';

describe('TodoForm', () => {
  test('renders TodoForm component', () => {
    render(<TodoForm addTodo={() => {}} />);
    expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add Todo' })).toBeInTheDocument();
  });

  test('calls addTodo with the input value when form is submitted', () => {
    const mockAddTodo = vi.fn();
    render(<TodoForm addTodo={mockAddTodo} />);

    const inputElement = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByRole('button', { name: 'Add Todo' });

    fireEvent.change(inputElement, { target: { value: 'New Todo Item' } });
    fireEvent.click(addButton);

    expect(mockAddTodo).toHaveBeenCalledTimes(1);
    expect(mockAddTodo).toHaveBeenCalledWith('New Todo Item');
    expect(inputElement.value).toBe(''); // Input should be cleared after submission
  });

  test('does not call addTodo if input is empty', () => {
    const mockAddTodo = vi.fn();
    render(<TodoForm addTodo={mockAddTodo} />);

    const addButton = screen.getByRole('button', { name: 'Add Todo' });
    fireEvent.click(addButton);

    expect(mockAddTodo).not.toHaveBeenCalled();
  });
});
