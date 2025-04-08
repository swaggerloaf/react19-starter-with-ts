export async function fetchTodos() {
    const response = await fetch('/api/todos'); // Replace with your API endpoint
    const data = await response.json();
    return data;
}

export async function createTodo(newTodo) {
    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    });
    const data = await response.json();
    return data;
  }

export async function updateTodo(todo) {
    const response = await fetch(`/api/todos/${todo.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
    });
    const data = await response.json();
    return data;
}

export async function deleteTodo(id) {
    const response = await fetch(`/api/todos/${id}`, {
        method: 'DELETE'
    });
    return response.ok;
}
  