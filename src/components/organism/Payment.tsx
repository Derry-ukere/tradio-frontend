import React from 'react';
import {MemoizedPaymentContaner} from '../molecule/payment/PaymentContaner';

const Payment = () => {
  return (
    <section className="pt-4 pb-5 pb-lg-10 section--dark bg-color--dark--1 border--bottom">
      <MemoizedPaymentContaner />
    </section>
  );
};

export const MemoizedPayment  = React.memo(Payment);

