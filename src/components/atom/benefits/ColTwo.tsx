import React from 'react';

const ColTwo = () => {
  return (
    <div className="
    row
    horizontal-border
    justify-content-between
    mb-lg-5
    pb-lg-5
    reveal
">
      <div className="col-12 col-md-6 col-lg-5 direct">
        <div className="d-lg-flex mb-4 mb-lg-0 text-center text-md-left">
          <span className="mb-3 mb-lg-0 mr-md-3">
            <img src="img/icon-wallet.svg" alt="icon" />
          </span>
          <div>
            <h3 className="h5-font font-w--600 text-color--200 mb-2">
  Multicurrency crypto wallet
            </h3>
            <p>
  Our crypto wallet function will use the bank's
  infrastructure for cold storage of funds with bank grade
  security.When you spend more time refining your trading mBTCodology,
  you’re less likely to react emotionally under stressful trading events.
            </p>
          </div>
        </div>
      </div>
      {/* end of single item col */}
      <div className="col-12 col-md-6 col-lg-5 direct">
        <div className="d-lg-flex mb-4 mb-lg-0 text-center text-md-left">
          <span className="mb-3 mb-lg-0 mr-md-3">
            <img src="img/icon-ledger.svg" alt="icon" />
          </span>
          <div>
            <h3 className="h5-font font-w--600 text-color--200 mb-2">
            Cloud Management
            </h3>
            <p>
            Focus on managing and optimizing your trading strategies and 
            let our team of professionals manage our secure, high-speed, global infrastructure.
            Save hundreds of hours over the lifetime of your trading when you replicate and automate 
            your manual trading tasks.
            </p>
          </div>
        </div>
      </div>
      {/* end of single item col */}
    </div>
  );
};

export const MemColTwo = React.memo(ColTwo);
