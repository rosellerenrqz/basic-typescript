import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [new Todo("Eat"), new Todo("Sleep")];

  const onAddTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  console.log(todos);

  return (
    <>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos items={todos} />
    </>
  );
};

export default App;
