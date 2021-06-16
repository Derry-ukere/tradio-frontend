import React from 'react';

const QuaterNine = () => {
  return (
      
    <div className="slide mb-1 slick-slide" data-year={2019} style={{width: '459px'}} tabIndex={-1} data-slick-index={8} aria-hidden="true">
      <div className="d-md-flex align-items-md-center">
        <div className="
                          mr-5
                          pr-5
                          mr-xl-7
                          pr-xl-7
                          mb-3 mb-md-0
                          position-relative
                      ">
          <span className="text-color--400 font-w--600 mb-1 opacity--60">2019</span>
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
        Listing INT token on exchanges (Approximately
        3-month after Main-sale concludes.
            </p>
          </li>
          <li className="text-color--400">
            <p className="h6-font">
        Integration of platform in line with blockchain
        including fiat and cryptocurrency payment
        methods.
            </p>
          </li>
          <li className="text-color--400">
            <p className="h6-font">
        Peer-to-Peer chat option and amalgamation of
        AI-based dispute system development.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const QuaterNineM = React.memo(QuaterNine);