import React, { Fragment } from 'react';

import './Login.scss';

const Login = () => {
  return (
    <Fragment>
      <section className="login">
        <form action="#" className="form">
          <div className="form__group">
            <input type="text" placeholder="Enter Your Email id" />
          </div>

          <div className="form__group">
            <input type="password" placeholder="Enter Your Password" />
          </div>

          <input type="submit" content="Login" />
        </form>
      </section>
    </Fragment>
  );
};

export default Login;
