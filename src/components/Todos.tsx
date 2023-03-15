import React from "react";
import Todo from '../models/todo'
import TodoItem from "./TodoItem";

// React >= 18: https://stackoverflow.com/questions/59106742/typescript-error-property-children-does-not-exist-on-type-reactnode
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {/* <li>Learn React</li>
      <li>Learn TypeScript</li> */}

      {props.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
