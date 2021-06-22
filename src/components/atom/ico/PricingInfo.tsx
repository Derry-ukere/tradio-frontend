/* eslint-disable security/detect-object-injection */
import React,{useState,useEffect } from 'react';

const PricingInfo = () => {


  const calculateTimeLeft = () => {
    const year = new Date().getFullYear();
    const difference = +new Date(`10/01/${year}`) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    const timerComponents: any = [];

    Object.values(timeLeft).forEach((interval) => {
      timerComponents.push(interval);
    });
    return timerComponents;
  };


  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft()); 

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

 

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
0.00512 <span className="font-w--500">BTC</span>
          </p>
          <span className="discount h6-font">15% OFF</span>
        </div>
        {/* end of active item */}
        <div className="pricing-info-item">
          <span className="text-color--400 text-color--400">Next Price</span>
          <p className="font-size--20 font-w--700">
0.0079 <span className="font-w--500">BTC</span>
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
                    " id="days">{timeLeft[0]}</span>
            <span className="text-color--400">Days</span>
          </li>
          <li className="d-flex flex-column mr-2 mr-sm-3">
            <span className="
                        countdown__count
                        color--white
                        opacity--80
                        font-size--30
                        font-w--600
                    " id="hours">{timeLeft[1]}</span>
            <span className="text-color--400">Hours</span>
          </li>
          <li className="d-flex flex-column mr-2 mr-sm-3">
            <span className="
                        countdown__count
                        color--white
                        opacity--80
                        font-size--30
                        font-w--600
                    " id="minutes">{timeLeft[2]}</span>
            <span className="text-color--400">Minutes</span>
          </li>
          <li className="d-flex flex-column">
            <span className="
                        countdown__count
                        color--white
                        opacity--80
                        font-size--30
                        font-w--600
                    " id="seconds">{timeLeft[3]}</span>
            <span className="text-color--400">Seconds</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export const MemoPricingInfo = React.memo(PricingInfo);







