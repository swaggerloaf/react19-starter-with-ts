export async function fetchTodos(newTodo) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    });
    const data = await response.json();
    return data;
  }

export async function createTodo(newTodo) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(`{"operation": "create", "payload": {"Item": {"id": ${newTodo.id} , "text": ${newTodo.text}}}}`),
    });
    const data = await response.json();
    return data;
  }


  export async function deleteTodo(id) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(`{"operation": "delete", "payload": {"Key": ${id}}`),
    });
    const data = await response.json();
    return data;
  }

  