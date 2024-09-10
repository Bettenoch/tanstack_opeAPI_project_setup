import { useTodos, useTodosIds } from "../services/queries";

const Todo = () => {
  const todosIdsQUery = useTodosIds();
  const todosQueries = useTodos(todosIdsQUery.data)

  return (
    <div className="flex flex-col border-1 border-zinc-400 bg-[#DFFF00] mt-6 w-96 min-h-96">
      <ul className="flex flex-col p-6 min-w-full">
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
