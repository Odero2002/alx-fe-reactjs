import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
  const mockToggleTodo = jest.fn();
  const mockDeleteTodo = jest.fn();

  const incompleteTodo = {
    id: 1,
    text: 'Incomplete Todo',
    completed: false,
  };

  const completedTodo = {
    id: 2,
    text: 'Completed Todo',
    completed: true,
  };

  test('renders an incomplete todo item correctly', () => {
    render(
      <TodoItem
        todo={incompleteTodo}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );

    const todoText = screen.getByText('Incomplete Todo');
    expect(todoText).toBeInTheDocument();
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
  });

  test('renders a completed todo item correctly', () => {
    render(
      <TodoItem
        todo={completedTodo}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );

    const todoText = screen.getByText('Completed Todo');
    expect(todoText).toBeInTheDocument();
    expect(todoText).toHaveStyle('text-decoration: line-through');
  });

  test('calls toggleTodo when the todo item is clicked', () => {
    render(
      <TodoItem
        todo={incompleteTodo}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );

    const todoText = screen.getByText('Incomplete Todo');
    fireEvent.click(todoText);
    expect(mockToggleTodo).toHaveBeenCalledWith(incompleteTodo.id);
  });

  test('calls deleteTodo when the delete button is clicked', () => {
    render(
      <TodoItem
        todo={incompleteTodo}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );

    const deleteButton = screen.getByRole('button', { name: 'Delete' });
    fireEvent.click(deleteButton);
    expect(mockDeleteTodo).toHaveBeenCalledWith(incompleteTodo.id);
  });
});
