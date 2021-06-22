import React from 'react';

const PriceTwo = () => {
  return (
    <div className="position-relative pt-3">
      <div className="d-flex">
        <div className="ico-progress__stages jsElement" style={{left: '10%'}}>
          <span className="body-font font-w--300">Soft cap</span>
          <p className="color--white font-w--700 text-left">
  3,000 <span className="font-w--500">BTC</span>
          </p>
        </div>
        <div className="ico-progress__stages jsElement" style={{left: '80%'}}>
          <span className="body-font color--white font-w--300">Hard cap</span>
          <p className="color--white font-w--700">
  20,000<span className="font-w--500">BTC</span>
          </p>
        </div>
      </div>
      <div className="
      ico-progress-bar
      rounded--full
      d-flex
      align-items-center
      mb-2
  ">
        <div className="
          ico-progress-bar__inner
          rounded--full
          bg-color--primary
          jsElement
      " style={{width: '35%'}} />
      </div>
    </div>
  );
};

export const MemoPriceTwo = React.memo(PriceTwo);



