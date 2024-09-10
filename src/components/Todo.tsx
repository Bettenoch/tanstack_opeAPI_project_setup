import { useTodosIds } from "../services/queries";

const Todo = () => {
  const todosIdsQUery = useTodosIds();

  if (todosIdsQUery.isPending) {
    return <div>Loading...</div>;
  }
  if (todosIdsQUery.isError) {
    return <div>Error: {todosIdsQUery.error.message}</div>;
  }
  return (
    <div>
      {todosIdsQUery.data?.map((id) => (
        <div key={id}>Todo {id}</div>
      ))}
    </div>
  );
};

export default Todo;
