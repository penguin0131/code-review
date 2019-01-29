import React, {Component} from 'react';

const Todos = (props) => {
  console.log('---->',props);

  return(
    <div className="Todos" style={{backgroundColor:#ccc}}>
      <h2>{props.title}</h2>
      <ul>
        {props.items.map((item,index)=>{
          return <li key={index}><input type="checkbox"/>{item}</li>
        })}
      </ul>
    </div>
      );
}
export default Todos;
