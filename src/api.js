export async function fetchTodos(newTodo) {
    const response = await fetch('https://gqsllxpd0c.execute-api.us-east-2.amazonaws.com/v1/todoOperations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    });
    const data = await response.json();
    return data;
  }

export async function createTodo(newTodo) {
    const response = await fetch('https://gqsllxpd0c.execute-api.us-east-2.amazonaws.com/v1/todoOperations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(`{"operation": "create", "payload": {"Item": {"id": ${newTodo.id} , "text": ${newTodo.text}}}}`),
    });
    const data = await response.json();
    return data;
  }


  export async function deleteTodo(id) {
    const response = await fetch('https://gqsllxpd0c.execute-api.us-east-2.amazonaws.com/v1/todoOperations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(`{"operation": "delete", "payload": {"Key": ${id}}`),
    });
    const data = await response.json();
    return data;
  }

  