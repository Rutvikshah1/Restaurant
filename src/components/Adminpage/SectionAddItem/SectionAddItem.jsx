import React, { Fragment } from 'react';

import './SectionAddItem.scss';

const SectionAddItem = () => {
  return (
    <Fragment>
      <section className="sectionadditem">
        <form action="#" className="form">
          <div className="form__group">
            <input type="text" placeholder="Enter Category" />
          </div>

          <div className="form__group">
            <input type="text" placeholder="Enter Item Name" />
          </div>

          <div className="form__group">
            <input type="text" placeholder="Enter Item Price" />
          </div>

          <input type="submit" content="Add" />
        </form>
      </section>
    </Fragment>
  );
};

export default SectionAddItem;
