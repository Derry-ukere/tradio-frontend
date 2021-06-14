import React from 'react';
import {MemContainer} from '../molecule/faq/Container';

const Faq = () => {
  return (
    <section className="section--dark bg-color--dark--1">
      <div className="space faq faq--v1" id="faq">
        <MemContainer />
      </div>
    </section>

  );
};

export const MemFaq = React.memo(Faq);
