import React from 'react';

const Details = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg-10 mx-auto">
        <div className="logo-group">
          <span className="logo-group__image">
            <img src="img/visa.png" alt="payment-mehtod-logo" className="img-fluid" />
          </span>
          <span className="logo-group__image">
            <img src="img/wire.png" alt="payment-mehtod-logo" className="img-fluid" />
          </span>
          <span className="logo-group__image">
            <img src="img/mastercard.png" alt="payment-mehtod-logo" className="img-fluid" />
          </span>
          <span className="logo-group__image">
            <img src="img/ether.png" alt="payment-mehtod-logo" className="img-fluid" />
          </span>
          <span className="logo-group__image">
            <img src="img/btc.png" alt="payment-mehtod-logo" className="img-fluid" />
          </span>
        </div>
      </div>
    </div>
  );
};

export const  MemoizedDetails  = React.memo(Details);
