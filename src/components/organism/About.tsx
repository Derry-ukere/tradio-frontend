import React from 'react';
import {MemoisedAboutContainer} from '../molecule/about/AboutContainer';

const About = () => {
  return (
    <section className="space--top pb-5 pb-lg-10 about about--v3 section--dark bg-color--dark--1" id="about">
      <MemoisedAboutContainer />
    </section>
  );
};

export const MemoiseAbout  = React.memo(About);
