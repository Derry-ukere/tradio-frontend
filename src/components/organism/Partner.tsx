import React from 'react';
import {MemOverlay} from '../atom/patners/Overlay';
import {MemContainer} from '../molecule/partner/Container';

const Partner = () => {
  return (
    <section className="space--top pb-4 section--dark bg-color--dark--2">
      < MemOverlay />
      {/* end of section overlay */}
      <MemContainer />
    </section>
  );
};

export const MemPartner = React.memo(Partner);
