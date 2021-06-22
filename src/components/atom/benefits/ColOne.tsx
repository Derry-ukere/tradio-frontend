import React from 'react';

const ColOne = () => {
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
            <img src="img/icon-decentralized.svg" alt="icon" />
          </span>
          <div>
            <h3 className="h5-font font-w--600 text-color--200 mb-2">
            24/7/365 Trading
            </h3>
            <p>
            Our suite of trading tools are always connected.
            Ready to execute trades and simultaneously process signals from a myriad of sources.
            </p>
          </div>
        </div>
      </div>
      {/* end of single item col */}
      <div className="col-12 col-md-6 col-lg-5 direct">
        <div className="d-lg-flex mb-4 mb-lg-0 text-center text-md-left">
          <span className="mb-3 mb-lg-0 mr-md-3">
            <img src="img/icon-p2p.svg" alt="icon" />
          </span>
          <div>
            <h3 className="h5-font font-w--600 text-color--200 mb-2">
            Advanced Crypto Trading
            </h3>
            <p>
            Leverage advanced functionality such as custom order types, bot extensions,
             market scanners, portfolio management, and much more.
             Access powerful trading tools from your desktop, mobile, or tablet. 
            Trade from anywhere you have an Internet connection with no software to install.
            </p>
          </div>
        </div>
      </div>
      {/* end of single item col */}
    </div>
  );
};

export const MemColOne = React.memo(ColOne);
