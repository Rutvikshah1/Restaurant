import React, { Fragment } from 'react';

import './MenuItem.scss';

export const MenuItem = ({ title, price }) => {
  return (
    <Fragment>
      <div className="item">
        <div className="item__title">{title}</div>
        <div className="item__price">{price}</div>
      </div>
    </Fragment>
  );
};
