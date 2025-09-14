import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';

describe('TodoForm', () => {
  test('calls addTodo when the form is submitted', () => {
    const addTodo = jest.fn();
    render(<TodoForm addTodo={addTodo} />);
    
    const inputElement = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: 'Add Todo' });

    fireEvent.change(inputElement, { target: { value: 'Learn React Testing' } });
    fireEvent.click(addButton);

    expect(addTodo).toHaveBeenCalledWith('Learn React Testing');
    expect(inputElement.value).toBe('');
  });
});
