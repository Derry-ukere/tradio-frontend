import React from 'react';

const BottomRow = () => {
  return (
    <div className="col-12 col-lg-4 ml-auto direct">
      <div className="content allocation-content reveal">
        <h3 className="h4-font font-w--600 mb-3">Token Allocation</h3>
        <div className="
                      allocation-bar-wrapper
                      bar-chart--v1
                      position-relative
                      d-flex
                      mb-3
                  ">
          <div className="bar-portion jsElement" style={{backgroundColor: 'rgb(140, 168, 255)', width: '40%'}}>
            <span data-tooltip>Core phase of tokens sale 40%</span>
          </div>
          <div className="bar-portion jsElement" style={{backgroundColor: 'rgb(50, 96, 237)', width: '25%'}}>
            <span data-tooltip>Partners and advisors 25%</span>
          </div>
          <div className="bar-portion jsElement" style={{backgroundColor: 'rgb(182, 189, 0)', width: '20%'}}>
            <span data-tooltip>Project partners 20%</span>
          </div>
          <div className="bar-portion jsElement" style={{backgroundColor: 'rgb(214, 88, 0)', width: '10%'}}>
            <span data-tooltip>Operational fund within the project 10%</span>
          </div>
          <div className="bar-portion jsElement" style={{backgroundColor: 'rgb(255, 183, 85)', width: '5%'}}>
            <span data-tooltip>Project consultation 5%</span>
          </div>
        </div>
        {/* end of bar */}
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
              <span className="content-list__name">Core phase of tokens sale</span>
            </div>
            <span className="content-list__value">40%</span>
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
              <span className="content-list__name">Partners and advisors</span>
            </div>
            <span className="content-list__value">25%</span>
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
              <span className="content-list__name">Project partners</span>
            </div>
            <span className="content-list__value">20%</span>
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
              <span className="content-list__name">Operational fund within the project</span>
            </div>
            <span className="content-list__value">10%</span>
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
              <span className="content-list__name">Project consultation</span>
            </div>
            <span className="content-list__value">5%</span>
          </li>
        </ul>
      </div>
      {/* end of Token Allocation content */}
    </div>
  );
};

export const MemBottomRow = React.memo(BottomRow);
