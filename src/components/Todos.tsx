import React, { useContext } from "react";
//import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import { TodosContext } from '../store/todos-context';
import classes from "./Todos.module.css";

// React >= 18: https://stackoverflow.com/questions/59106742/typescript-error-property-children-does-not-exist-on-type-reactnode
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {/* <li>Learn React</li>
      <li>Learn TypeScript</li> */}

      {todosCtx.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
