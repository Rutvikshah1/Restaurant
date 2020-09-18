import React, { Fragment } from 'react';

import './Contact.scss';

const Contact = () => {
  return (
    <Fragment>
      <section className="contact">
        <form action="#" className="form">
          <div className="form__group">
            <input type="text" placeholder="Enter Your Name" />
          </div>

          <div className="form__group">
            <input type="text" placeholder="Enter Your Email id" />
          </div>

          <div className="form__group">
            <textarea
              placeholder="Enter Your Query"
              rows="10"
              cols="22"
            ></textarea>
          </div>

          <input type="submit" content="Signup" />
        </form>
      </section>
    </Fragment>
  );
};

export default Contact;
