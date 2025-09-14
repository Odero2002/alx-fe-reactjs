import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

jest.mock('./TodoItem', () => ({
  __esModule: true,
  default: jest.fn((props) => (
    <li data-testid="todo-item">{props.todo.text}</li>
  )),
}));

describe('TodoList', () => {
  const mockToggleTodo = jest.fn();
  const mockDeleteTodo = jest.fn();

  const todos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: true },
  ];

  test('renders a list of todos', () => {
    render(
      <TodoList
        todos={todos}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );

    const todoItems = screen.getAllByTestId('todo-item');
    expect(todoItems).toHaveLength(todos.length);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('renders no todos when the list is empty', () => {
    render(
      <TodoList
        todos={[]}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );

    const todoItems = screen.queryAllByTestId('todo-item');
    expect(todoItems).toHaveLength(0);
  });
});
