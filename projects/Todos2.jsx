import React from 'react';
//import './Todos.css';

const Todos = props => {
  return (
    <div className="Todos">
      <h2>{props.title}</h2>
      <ul>
        {props.items.map((item, index) => {
          return (
            <li key={index}>
              <input type="checkbox" checked={item.completed} />
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export function x() {
  return 1;
}
export default Todos;
