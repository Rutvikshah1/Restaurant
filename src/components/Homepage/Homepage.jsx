import React, { Fragment } from 'react';
import Header from './Header/Header';
import SectionStory from './SectionStory/SectionStory';
import { SectionMenu } from './SectionMenu/SectionMenu';

export const Homepage = () => {
  return (
    <Fragment>
      <Header />
      <SectionStory />
      <SectionMenu />
    </Fragment>
  );
};
