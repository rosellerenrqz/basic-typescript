import React, { ReactNode } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[]; children?: ReactNode }> = (props) => {
  return (
    <>
      <ul className="my-10">
        {props.items.map((item) => (
          <TodoItem key={item.id} text={item.text} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
