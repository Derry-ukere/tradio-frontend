import React from 'react';
import {MemContainer} from '../molecule/Benefits/Container';

const Benefits = () => {
  return (
    <section className="space section--dark bg-color--dark--2">
      <MemContainer />
    </section>
  );
};

export const MemBenefits = React.memo(Benefits);
