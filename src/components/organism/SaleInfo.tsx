import React from 'react';
import {MemOverlay} from '../atom/sales-info/Overlay';
import {MemContainer} from '../molecule/sales-info/Container';

const SaleInfo = () => {
  return (
    <section className="space token-saleinfo token-saleinfo--v1 section--dark bg-color--dark--2">
      <MemOverlay />
      {/* end of section overlay */}
      < MemContainer />
    </section>

  );
};

export const MemSaleInfo = React.memo(SaleInfo);
