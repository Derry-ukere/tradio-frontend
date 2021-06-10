import React from 'react';

const PricingInfo = () => {
  return (
      
    <>
      <div className="
            d-md-flex
            align-items-center
            justify-content-md-center justify-content-lg-start
            text-center text-md-left
            mb-md-2 mb-lg-0
        ">
        <div className="
                pricing-info-item pricing-info-item--active
                mr-md-4
            ">
          <span className="text-color--400 text-color--400">Current Price</span>
          <p className="font-size--20 font-w--700">
0.00065 <span className="font-w--500">ETH</span>
          </p>
          <span className="discount h6-font">15% OFF</span>
        </div>
        {/* end of active item */}
        <div className="pricing-info-item">
          <span className="text-color--400 text-color--400">Next Price</span>
          <p className="font-size--20 font-w--700">
0.00070 <span className="font-w--500">ETH</span>
          </p>
          <span className="discount h6-font">15% OFF</span>
        </div>
        {/* end of regular item */}
      </div>
      {/* end of pricing info */}
      <div className="text-center text-lg-left pb-2 pb-lg-0 px-3">
        <ul className="
                countdown
                d-flex
                justify-content-center justify-content-lg-start
                text-left
            " id="date" data-date="Sep 30, 2019">
          <li className="d-flex flex-column mr-2 mr-sm-3">
            <span className="
                        countdown__count
                        color--white
                        opacity--80
                        font-size--30
                        font-w--600
                    " id="days">-620</span>
            <span className="text-color--400">Days</span>
          </li>
          <li className="d-flex flex-column mr-2 mr-sm-3">
            <span className="
                        countdown__count
                        color--white
                        opacity--80
                        font-size--30
                        font-w--600
                    " id="hours">-17</span>
            <span className="text-color--400">Hours</span>
          </li>
          <li className="d-flex flex-column mr-2 mr-sm-3">
            <span className="
                        countdown__count
                        color--white
                        opacity--80
                        font-size--30
                        font-w--600
                    " id="minutes">-8</span>
            <span className="text-color--400">Minutes</span>
          </li>
          <li className="d-flex flex-column">
            <span className="
                        countdown__count
                        color--white
                        opacity--80
                        font-size--30
                        font-w--600
                    " id="seconds">-58</span>
            <span className="text-color--400">Seconds</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export const MemoPricingInfo = React.memo(PricingInfo);







