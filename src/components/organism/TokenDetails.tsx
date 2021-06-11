import React from 'react';
import {MemContainer} from '../molecule/Token-Details/Container';

const TokenDetails = () => {
  return (
    <section className="
              space
              section--dark
              bg-color--dark--1
              token-sale-details token-sale-details--v1
          " id="token-sale-details">
      <MemContainer />
    </section>

  );
};

export const MemTokenDetails = React.memo(TokenDetails);
