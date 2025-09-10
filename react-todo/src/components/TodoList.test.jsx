import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

// Mock the TodoItem component to simplify testing TodoList
jest.mock('./TodoItem', () => {
  return jest.fn((props) => (
    <li data-testid="todo-item">{props.todo.text}</li>
  ));
});

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
    expect(todoItems).toHaveLength(2);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('passes correct props to TodoItem', () => {
    render(
      <TodoList
        todos={todos}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );

    // Check that TodoItem was called with the correct props for the first todo
    expect(TodoItem).toHaveBeenCalledWith(
      {
        todo: { id: 1, text: 'Learn React', completed: false },
        toggleTodo: mockToggleTodo,
        deleteTodo: mockDeleteTodo,
      },
      {}
    );

    // Check that TodoItem was called with the correct props for the second todo
    expect(TodoItem).toHaveBeenCalledWith(
      {
        todo: { id: 2, text: 'Build a Todo App', completed: true },
        toggleTodo: mockToggleTodo,
        deleteTodo: mockDeleteTodo,
      },
      {}
    );
  });

  test('renders no todos when the list is empty', () => {
    render(
      <TodoList
        todos={[]}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );
    expect(screen.queryAllByTestId('todo-item')).toHaveLength(0);
  });
});
