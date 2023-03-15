import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

// React >= 18: https://stackoverflow.com/questions/59106742/typescript-error-property-children-does-not-exist-on-type-reactnode
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {/* <li>Learn React</li>
      <li>Learn TypeScript</li> */}

      {props.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
