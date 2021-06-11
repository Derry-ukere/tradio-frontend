import React from 'react';
import {MemoOverlay} from '../atom/how-it-works/Overlay';
import {MContainer} from '../molecule/how-it-works/Container';

const HowItWorks = () => {
  return (
    <section className="space process process--v1 section--dark bg-color--dark--1 hidden" id="working-process">
      <MemoOverlay />
      {/* end of section overlay */}
      <MContainer />
    </section>
  );
};

export const MemoHowItWorks = React.memo(HowItWorks);
