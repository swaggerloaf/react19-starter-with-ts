import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '../api';

function TodoList() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['todos'], // Unique key for this query
    queryFn: fetchTodos, // Function to fetch data
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching todos</div>;

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;