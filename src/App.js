import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import {
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useGetAllTodosQuery,
  useUpdateTodoMutation,
} from "./services/todo";
function App() {
  const { data, isLoading, isError } = useGetAllTodosQuery();
  const [title, setTitle] = useState("");
  const [createTodo, createInfo] = useCreateTodoMutation();
  const [DT, deleteTodoInfo] = useDeleteTodoMutation();
  const [UT, updateTodoInfo] = useUpdateTodoMutation();
  const handleClick = () => {
    createTodo({
      id: nanoid(),
      userId: 1,
      completed: false,
      title,
    });
    console.log(createInfo);
  };
  const handleUpdate = (todo) => {
    UT({ ...todo, title: "New Update Todo" });
  };

  const handleDelete = (id) => {
    DT(id);
  };
  return (
    <div className="App">
      {isLoading && <p>Loading....</p>}
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleClick}>Add Todo</button>
      {data?.map((todo) => (
        <li key={todo.id}>
          {todo.title}{" "}
          <button onClick={() => handleUpdate(todo)}>Update Todo</button>
          <button onClick={() => handleDelete(todo.id)}>Delete Todo</button>
        </li>
      ))}
    </div>
  );
}

export default App;
