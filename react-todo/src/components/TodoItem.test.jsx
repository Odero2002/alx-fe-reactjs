import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
  const mockToggleTodo = vi.fn();
  const mockDeleteTodo = vi.fn();

  const incompleteTodo = { id: 1, text: 'Learn React', completed: false };
  const completedTodo = { id: 2, text: 'Build a Todo App', completed: true };

  test('renders an incomplete todo item correctly', () => {
    render(
      <TodoItem
        todo={incompleteTodo}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).not.toHaveStyle('text-decoration: line-through');
    expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument();
  });

  test('renders a completed todo item correctly', () => {
    render(
      <TodoItem
        todo={completedTodo}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toHaveStyle('text-decoration: line-through');
  });

  test('calls toggleTodo when checkbox is clicked', () => {
    render(
      <TodoItem
        todo={incompleteTodo}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockToggleTodo).toHaveBeenCalledTimes(1);
    expect(mockToggleTodo).toHaveBeenCalledWith(incompleteTodo.id);
  });

  test('calls deleteTodo when delete button is clicked', () => {
    render(
      <TodoItem
        todo={incompleteTodo}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );

    const deleteButton = screen.getByRole('button', { name: 'Delete' });
    fireEvent.click(deleteButton);
    expect(mockDeleteTodo).toHaveBeenCalledTimes(1);
    expect(mockDeleteTodo).toHaveBeenCalledWith(incompleteTodo.id);
  });
});
