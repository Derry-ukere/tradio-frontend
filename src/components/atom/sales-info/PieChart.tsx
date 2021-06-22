import React from 'react';

const PieChart = () => {
  return (
    <div className="content dist-content direct">
      <h3 className="h4-font font-w--600 mb-3">Crypto Currency Statistics</h3>
      <ul className="content-list list-unstyled remove-space--bottom">
        <li className="
                        text-color--300
                        font-w--500
                        d-flex
                        align-items-center
                        justify-content-between
                        mb-1
                    ">
          <div className="d-flex align-items-center">
            <span className="oval--md mr-1 jsElement" style={{backgroundColor: 'rgb(50, 96, 237)'}} />
            <span className="content-list__name">Blockchain size</span>
          </div>
          <span className="content-list__value">310 gigabytes</span>
        </li>
        <li className="
                        text-color--300
                        font-w--500
                        d-flex
                        align-items-center
                        justify-content-between
                        mb-1
                    ">
          <div className="d-flex align-items-center">
            <span className="oval--md mr-1 jsElement" style={{backgroundColor: 'rgb(140, 168, 255)'}} />
            <span className="content-list__name">Bitcoin ATMs</span>
          </div>
          <span className="content-list__value">15,000</span>
        </li>
        <li className="
                        text-color--300
                        font-w--500
                        d-flex
                        align-items-center
                        justify-content-between
                        mb-1
                    ">
          <div className="d-flex align-items-center">
            <span className="oval--md mr-1 jsElement" style={{backgroundColor: 'rgb(182, 189, 0)'}} />
            <span className="content-list__name">Popularity of Cryptocurrency</span>
          </div>
          <span className="content-list__value">38.6%</span>
        </li>
        <li className="
                        text-color--300
                        font-w--500
                        d-flex
                        align-items-center
                        justify-content-between
                        mb-1
                    ">
          <div className="d-flex align-items-center">
            <span className="oval--md mr-1 jsElement" style={{backgroundColor: 'rgb(214, 88, 0)'}} />
            <span className="content-list__name">Total Value of All Bitcoins</span>
          </div>
          <span className="content-list__value">$653 billion</span>
        </li>
        <li className="
                        text-color--300
                        font-w--500
                        d-flex
                        align-items-center
                        justify-content-between
                        mb-1
                    ">
          <div className="d-flex align-items-center">
            <span className="oval--md mr-1 jsElement" style={{backgroundColor: 'rgb(255, 183, 85)'}} />
            <span className="content-list__name">Volume (24hr)</span>
          </div>
          <span className="content-list__value">46.96b</span>
        </li>
        <li className="
                        text-color--300
                        font-w--500
                        d-flex
                        align-items-center
                        justify-content-between
                        mb-1
                    ">
          <div className="d-flex align-items-center">
            <span className="oval--md mr-1 jsElement" style={{backgroundColor: 'rgb(242, 60, 66)'}} />
            <span className="content-list__name">Bounty company</span>
          </div>
          <span className="content-list__value">4%</span>
        </li>
      </ul>
    </div>
  );
};

export const MemPieChart = React.memo(PieChart);
