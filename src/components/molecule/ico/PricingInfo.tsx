import React from 'react';
import {MemoCountDown} from './CountDown';

const PricingInfo = () => {
  return (
    <>
    
      <div className="
    bg-color--dark--2
    rounded--10
    pr-lg-3
    d-md-inline-block d-lg-block
">
        <MemoCountDown />
      </div>
      {/* end of pricing info */}
    </>
 
  );
};

export const  MemoisedPricingInfo = React.memo(PricingInfo);





