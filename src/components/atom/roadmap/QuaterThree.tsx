import React from 'react';

const QuaterThree = () => {
  return (
    <div className="slide mb-1 slick-slide" data-year={2017} style={{width: '459px'}} tabIndex={-1} data-slick-index={2} aria-hidden="true">
      <div className="d-md-flex align-items-md-center">
        <div className="
                          mr-5
                          pr-5
                          mr-xl-7
                          pr-xl-7
                          mb-3 mb-md-0
                          position-relative
                      ">
          <span className="text-color--400 font-w--600 mb-1 opacity--60">2017</span>
          <h3 className="
                              slide__title
                              font-size--26
                              text-color--200
                              font-w--600
                          ">
      Quarter - 3
          </h3>
          <span className="
                              d-none d-md-inline-block
                              decor decor--square decor--light
                          " />
        </div>
        <ul className="pl-2 pl-md-0">
          <li className="text-color--400">
            <p className="h6-font">
        Release of IcoNijna beta application and web
        platform Release Ticket bookings on the
        platform.
            </p>
          </li>
          <li className="text-color--400">
            <p className="h6-font">
        Release V.2 of the IcoNijna platform updated now
        offering Airlines platform.
            </p>
          </li>
          <li className="text-color--400">
            <p className="h6-font">
        Development of Smart contract.
            </p>
          </li>
          <li className="text-color--400">
            <p className="h6-font">Sale website optimized.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const MemQuaterThree = React.memo(QuaterThree);
