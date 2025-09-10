import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import TodoApp from './TodoApp';

describe('TodoApp', () => {
  test('renders TodoApp component', () => {
    render(<TodoApp />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoApp />);
    const inputElement = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByRole('button', { name: 'Add Todo' });

    fireEvent.change(inputElement, { target: { value: 'Learn React Testing' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Learn React Testing')).toBeInTheDocument();
  });

  test('toggles a todo completion', () => {
    render(<TodoApp />);
    const inputElement = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByRole('button', { name: 'Add Todo' });

    fireEvent.change(inputElement, { target: { value: 'Learn React Testing' } });
    fireEvent.click(addButton);

    const todoItem = screen.getByText('Learn React Testing');
    const checkbox = todoItem.previousElementSibling;

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  test('deletes a todo', () => {
    render(<TodoApp />);
    const inputElement = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByRole('button', { name: 'Add Todo' });

    fireEvent.change(inputElement, { target: { value: 'Learn React Testing' } });
    fireEvent.click(addButton);

    const todoItem = screen.getByText('Learn React Testing');
    const deleteButton = todoItem.nextElementSibling;

    fireEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();
  });
});
