import { describe, it, expect } from 'vitest';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const addTodo = (todos: Todo[], text:string) => {
    const newTodo: Todo = {
       id: 123,
       text,
       completed: false


    }
    return [...todos, newTodo];
}

const removeTodo = (todos: Todo[], id:number) => {
    return todos.filter(todo => todo.id !== id);
} 

describe('addTodo', () => {
    it('should add a new todo to the list', () => {
        const todos: Todo[] = [];
        const result = addTodo(todos, 'Test todo');
        expect(result.length).toBe(1);
        expect(result[0].text).toBe('Test todo');
        expect(result[0].completed).toBe(false);
        
    }) 
})
 

describe('removeTodo', () => {
    it('should remove the todo with the given id from the list', () => {
        const todos: Todo[] = [
            { id: 123, text: 'Todo 1', completed: false },
            { id: 456, text: 'Todo 2', completed: false },
        ]
        const result = removeTodo(todos, 123);
        expect(result.length).toBe(1);
        expect(result[0].id).toBe(456);
    })
    it ('should not remove any todo if the id does not exist', () => {
        const todos: Todo[] = [
            { id: 123, text: 'Todo 1', completed: false },
            { id: 456, text: 'Todo 2', completed: false },
        ]
        const result = removeTodo(todos,999);
        expect(result.length).toBe(2);
    })
})



  