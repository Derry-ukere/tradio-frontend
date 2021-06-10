import React from 'react';
import {MemoPricingInfo} from '../../atom/ico/PricingInfo';

const CountDown = () => {
  return (
    <>
      <div className="
        pricing-info
        d-lg-flex
        align-items-center
        justify-content-between
    ">
        <MemoPricingInfo />
      </div>
    </>
   
  );
};

export const MemoCountDown = React.memo(CountDown);

