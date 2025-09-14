import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from './TodoApp';

describe('TodoApp', () => {
  test('renders the todo application', () => {
    render(<TodoApp />);
    expect(screen.getByText('Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoApp />);
    const input = screen.getByRole('textbox');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo', () => {
    render(<TodoApp />);
    const todoText = screen.getByText('Learn React');
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoApp />);
    const todoText = screen.getByText('Learn React');
    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);
    expect(todoText).not.toBeInTheDocument();
  });
});
