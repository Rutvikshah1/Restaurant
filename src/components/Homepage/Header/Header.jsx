import React, { Fragment } from 'react';

import './Header.scss';

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="header__text">
          <h1 className="header__text--primary">Extraordinary Experiences..</h1>
          <h2 className="header__text--secondary">
            Making the best italian food since 1975
          </h2>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
