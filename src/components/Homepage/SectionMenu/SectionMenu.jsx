import React, { Fragment, useState } from 'react';

import './SectionMenu.scss';
import { MenuItem } from './MenuItem/MenuItem';

export const SectionMenu = () => {
  const [menuItems] = useState([
    {
      title: 'IMPORTED OYSTERS GRILL (5 PIECES)',
      price: '$16',
    },
    {
      title: 'PORK TENDERLOIN MARINATED IN YOGURT',
      price: '$20',
    },
    {
      title: 'GRILLED PORK WITH PRESERVED LEMONS',
      price: '$22',
    },
    {
      title: 'WILD MUSHROOM BUCATINI WITH KALE',
      price: '$15',
    },
  ]);

  return (
    <Fragment>
      <section className="menu">
        <div className="menu__item-1">
          <h3 className="menu__heading">Menu</h3>
          <p className="menu__paragraph">
            FLAT 50% OFF, EVERY WEDNESDAY & THURSDAY ! <br />
            <br />
          </p>
        </div>
        <div className="menu__item-2">
          <h3 className="menu__heading">MAIN COURSES</h3>
          {menuItems.map((item) => {
            return <MenuItem title={item.title} price={item.price} />;
          })}
        </div>
        <div className="menu__item-3">
          <h3 className="menu__heading">MAIN COURSES</h3>
          {menuItems.map((item) => {
            return <MenuItem title={item.title} price={item.price} />;
          })}
        </div>
        <div className="menu__item-4">
          <h3 className="menu__heading">MAIN COURSES</h3>
          {menuItems.map((item) => {
            return <MenuItem title={item.title} price={item.price} />;
          })}
        </div>
        <div className="menu__item-5">
          <h3 className="menu__heading">MAIN COURSES</h3>
          {menuItems.map((item) => {
            return <MenuItem title={item.title} price={item.price} />;
          })}
        </div>
        <div className="menu__item-6">
          <h3 className="menu__heading">MAIN COURSES</h3>
          {menuItems.map((item) => {
            return <MenuItem title={item.title} price={item.price} />;
          })}
        </div>
      </section>
    </Fragment>
  );
};
