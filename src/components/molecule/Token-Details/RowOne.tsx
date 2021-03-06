import React from 'react';

const RowOne = () => {
  return (
    <div className="row">
      <div className="col-6 col-lg-4 mb-3 reveal">
        <div className="
                      card
                      bg-color--black-opacity--15
                      border--none
                      p-2 p-md-4
                      w-100
                  ">
          <span className="body-font font-w--500 mb-1">Ticker</span>
          <span className="color--primary h4-font font-w--700">INT</span>
        </div>
      </div>
      {/* end of single item col */}
      <div className="col-6 col-lg-4 mb-3 reveal">
        <div className="
                      card
                      bg-color--black-opacity--15
                      border--none
                      p-2 p-md-4
                      w-100
                      h-100
                  ">
          <span className="body-font font-w--500 mb-1">Platform</span>
          <span className="color--primary h4-font font-w--700">Bitcoin</span>
        </div>
      </div>
      {/* end of single item col */}
      <div className="col-6 col-lg-4 mb-3 reveal">
        <div className="
                      card
                      bg-color--black-opacity--15
                      border--none
                      p-2 p-md-4
                      w-100
                      h-100
                  ">
          <span className="body-font font-w--500 mb-1">Token Type</span>
          <span className="color--primary h4-font font-w--700">ERC20</span>
        </div>
      </div>
      {/* end of single item col */}
      <div className="col-6 col-lg-4 mb-3 reveal">
        <div className="
                      card
                      bg-color--black-opacity--15
                      border--none
                      p-2 p-md-4
                      w-100
                      h-100
                  ">
          <span className="body-font font-w--500 mb-1">Total Invested  </span>
          <span className="color--primary h4-font font-w--700">7000,000 Btc</span>
        </div>
      </div>
      {/* end of single item col */}
      <div className="col-6 col-lg-4 mb-3 reveal">
        <div className="
                      card
                      bg-color--black-opacity--15
                      border--none
                      p-2 p-md-4
                      w-100
                      h-100
                  ">
          <span className="body-font font-w--500 mb-1">ICO Price</span>
          <span className="color--primary h4-font font-w--700">0.0002 BTC</span>
        </div>
      </div>
      {/* end of single item col */}
      <div className="col-6 col-lg-4 mb-3 reveal">
        <div className="
                      card
                      bg-color--black-opacity--15
                      border--none
                      p-2 p-md-4
                      w-100
                      h-100
                  ">
          <span className="body-font font-w--500 mb-1">Hard Cap</span>
          <span className="color--primary h4-font font-w--700">60 BTC</span>
        </div>
      </div>
      {/* end of single item col */}
    </div>
  );
};

export const MemRowOne = React.memo(RowOne);
