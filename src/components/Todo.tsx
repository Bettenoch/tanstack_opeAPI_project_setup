import { useTodos, useTodosIds } from "../services/queries";

const Todo = () => {
  const todosIdsQUery = useTodosIds();
  const todosQueries = useTodos(todosIdsQUery.data)

  return (
    <div className="">
      <ul>
        {todosQueries.map(({data}) => (
            <li key={data?.id}>
                <div>Id: {data?.id}</div>
                <span>
                    <strong>Title:</strong>{data?.title}, {" "}
                    <strong>Description:</strong> {data?.description}
                </span>

            </li>
        ))}
      
      </ul>
    </div>
  );
};

export default Todo;
