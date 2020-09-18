import React, { Fragment } from 'react';

import './Signup.scss';

const Signup = () => {
  return (
    <Fragment>
      <section className="signup">
        <form action="#" className="form">
          <div className="form__group">
            <input type="text" placeholder="Enter Your Firstname" />
          </div>

          <div className="form__group">
            <input type="text" placeholder="Enter Your Lastname" />
          </div>
          <div className="form__group">
            <input type="text" placeholder="Enter Your Email id" />
          </div>

          <div className="form__group">
            <input type="password" placeholder="Enter Your Password" />
          </div>

          <input type="submit" content="Signup" />
        </form>
      </section>
    </Fragment>
  );
};

export default Signup;
