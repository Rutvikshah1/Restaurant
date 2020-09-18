import React from 'react';

export const addItem = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.price}
      </p>
    </div>
  );
};
