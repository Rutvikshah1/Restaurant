import React, { Fragment } from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <Fragment>
      <section className="footer">
        <div className="footer__col-one">
          <h4 className="footer__heading">Paragon Branch</h4>
          <p className="footer__paragraph">
            732/21 Second Street, Manchester, King Street, Kingston United
            Kingdom
            <br /> 1.800.456.6743
          </p>
        </div>
        <div className="footer__col-two">
          <h4 className="footer__heading">Center Branch</h4>
          <p className="footer__paragraph">
            78/31 Third Street, LiverPool, King Street, Kingston United Kingdom
            <br /> 1.800.456.6743
          </p>
        </div>
        <div className="footer__col-three">
          <h4 className="footer__heading">Zen Branch</h4>
          <p className="footer__paragraph">
            78/31 Third Street, LiverPool, King Street, Kingston United Kingdom
            <br /> 1.800.456.6743
          </p>
        </div>
        <div className="footer__col-four">
          <h4 className="footer__heading">GRAND RESTAURANT</h4>
          <p className="footer__paragraph">
            732/21 Second Street, Manchester, King Street, Kingston United
            Kingdom
            <br /> 1.800.456.6743
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
