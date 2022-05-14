import React from 'react';

const LoadingSkeleton = () => {

  const items = [];

  for (let i = 0; i < 11; i++) {
    items.push(<li key={'loading-item' + i} className='item'>
    <h2></h2>
    <h4></h4>
    </li>);
  }

  return (
    <div className='items loading-items'>
      <ul>
        {items}
      </ul>
    </div>
  )
}

export default LoadingSkeleton