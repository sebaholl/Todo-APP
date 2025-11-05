import './style.css'


interface Todo {
  id: number;
  text: string;
  completed: boolean;
  dueDate?: string; 
}

let currentFilter: 'all' | 'active' | 'completed' = 'all';

let todos: Todo[] = [];
const todoInput = document.getElementById('todo-input') as HTMLInputElement; 
const todoDate = document.getElementById('todo-date') as HTMLInputElement;
const todoForm = document.querySelector('.todo-form') as HTMLFormElement; 
const todoList = document.querySelector('.todo-list') as HTMLUListElement;


const addTodo = (text: string) => {
  const newTodo: Todo = {
    id: Date.now(),
    text: text,
    completed: false,
    dueDate: todoDate.value ? todoDate.value : undefined
  };
  todos.push(newTodo);
  console.log("check if it works", todos);
  renderTodos();
};


const toggleTodo = (id: number) => {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  renderTodos();
};


todoForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const text = todoInput.value.trim();
  if (text !== '') {
    addTodo(text);
    todoInput.value = '';
    todoDate.value = '';
  }
});


const renderTodos = () => {
  todoList.innerHTML = '';

  let filteredTodos = todos;

  if (currentFilter === 'active') {
    filteredTodos = todos.filter(todo => !todo.completed);
  } else if (currentFilter === 'completed') {
    filteredTodos = todos.filter(todo => todo.completed);
  }


  filteredTodos.forEach(todo => {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const isOverdue = todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed;

    li.innerHTML = `
      <div class="todo-content">
        <span style="cursor: pointer; ${todo.completed ? 'text-decoration: line-through; opacity: 0.6;' : ''}">
          ${todo.text} ${todo.dueDate ? `<small>(Due: ${todo.dueDate})</small>` : ''}
        </span>
      </div>
      <div class="todo-actions">
        <button class="toggle-btn">${todo.completed ? 'Undo' : 'Complete'}</button>
        <button class="remove-btn">Remove</button>
      </div>
    `;

    if (isOverdue) {
      li.classList.add('overdue');
    }

    const toggleButton = li.querySelector('.toggle-btn') as HTMLButtonElement;
    const removeButton = li.querySelector('.remove-btn') as HTMLButtonElement;
    const span = li.querySelector('span') as HTMLSpanElement;

    toggleButton.addEventListener('click', () => toggleTodo(todo.id));
    span.addEventListener('click', () => toggleTodo(todo.id));

    removeButton.addEventListener('click', () => removeTodo(todo.id));

    todoList.appendChild(li);
  });
};



const removeTodo = (id: number) => {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
};



(window as any).toggleTodo = toggleTodo;

renderTodos();


