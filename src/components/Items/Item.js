import React from 'react';

const Item = (props) => {
  return (
    <li className='item' id={"item" + props.id}>
        <h2>{props.name}</h2>
        <h4>{props.email}</h4>
    </li>
  )
}

export default Item