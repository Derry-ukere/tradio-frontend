import React from 'react';
import {MemoizedIcoProgress} from '../ico/IcoProgress';
import {MemoisedPricingInfo} from '../ico/PricingInfo';

const IcoPricing = () => {
  return (
    <div className="col-12 col-xl-10 mx-auto text-md-center">
      <MemoizedIcoProgress/>
      <MemoisedPricingInfo />
    </div>
  );
};

export const MemoizedIcoPricing = React.memo(IcoPricing);
