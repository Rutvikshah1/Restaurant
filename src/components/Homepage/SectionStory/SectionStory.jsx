import React, { Fragment } from 'react';

import './SectionStory.scss';
import chefimg from '../../../assets/chef.jpg';

const SectionStory = () => {
  return (
    <Fragment>
      <section className="story">
        <div className="story__text">
          <h2 className="story__text--title">
            <span>Discover</span>
            <br /> Our story..
          </h2>
          <p className="story__text--paragraph">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi. Exercitation photo booth
            stumptown tote bag Banksy, elit small batch freegan sed. Craft beer
            elit seitan exercitation, photo booth et 8-bit kale chips proident
            chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod
            Pinterest in do umami readymade.
          </p>
        </div>

        <div className="story__img">
          <img src={chefimg} alt="story-chef" />
        </div>
      </section>
    </Fragment>
  );
};

export default SectionStory;
