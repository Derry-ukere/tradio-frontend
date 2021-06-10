import React from 'react';
import {MemoIntro} from '../../atom/payment/Intro';
import {MemoizedDetails} from '../../atom/payment/Details';


const PaymentContaner = () => {
  return (
    <div className="container">
      < MemoIntro />
      <MemoizedDetails />
    </div>
  );
};

export const MemoizedPaymentContaner = React.memo(PaymentContaner);

