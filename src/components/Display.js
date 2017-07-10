import React from 'react';

export const Display = (props) => {
  return (
    <div>
      {props.elements.map(({id, title, body}) => (
        <div className="item" key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      ))}
    </div>
  )
}
