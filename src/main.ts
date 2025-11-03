import './style.css'
// import { setupCounter } from './counter.ts'

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  dueDate?: string; 
}

let todos: Todo[] = [];
const todoInput = document.getElementById('todo-input') as HTMLInputElement; 
const todoDate = document.getElementById('todo-date') as HTMLInputElement;
const todoForm = document.querySelector('.todo-form') as HTMLFormElement; 
const todoList = document.querySelector('.todo-list') as HTMLUListElement;


const addTodo = (text:string) => {
  const newTodo: Todo = {
    id: Date.now(),
    text: text,
    completed: false
  }
  todos.push(newTodo);
  console.log("check if it works", todos);
  renderTodos();
}

const toggleTodo = (id: number) => {
  todos = todos.map(todo => 
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  renderTodos();
}

todoForm.addEventListener('submit', (event:Event) => {
  event.preventDefault();
  const text = todoInput.value.trim();
  if (text !== '') {
    addTodo(text);
    todoInput.value = '';
  }
});

const renderTodos = () => {
  todoList.innerHTML = ''; 

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
      <span style="cursor: pointer; ${todo.completed ? 'text-decoration: line-through; opacity: 0.6;' : ''}" 
            onclick="toggleTodo(${todo.id})">${todo.text}</span>
      <button>Remove</button>`;

    addRemoveButtonListener(li, todo.id);
    todoList.appendChild(li);
  })
}

// Make toggleTodo globally accessible
(window as any).toggleTodo = toggleTodo;

renderTodos();

const addRemoveButtonListener = (li: HTMLLIElement, id:number) => {
  const addRemoveButtonListener = li.querySelector('button') as HTMLButtonElement;
  addRemoveButtonListener?.addEventListener ('click', () => {
    removeTodo(id) 
  });
}

const removeTodo = (id: number) => {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}