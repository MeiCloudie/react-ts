import React from "react";

// React >= 18: https://stackoverflow.com/questions/59106742/typescript-error-property-children-does-not-exist-on-type-reactnode
const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {/* <li>Learn React</li>
      <li>Learn TypeScript</li> */}
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
