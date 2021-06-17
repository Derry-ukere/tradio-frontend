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
  security.
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
    True value creation
            </h3>
            <p>
  Using innovation and creativity, our community of
  architects, developers revolutionaries believe in the
  creation of a bid meets an ask.
            </p>
          </div>
        </div>
      </div>
      {/* end of single item col */}
    </div>
  );
};

export const MemColTwo = React.memo(ColTwo);
