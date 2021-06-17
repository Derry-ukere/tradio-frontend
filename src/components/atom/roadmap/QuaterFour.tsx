import React from 'react';

const QuaterFour = () => {
  return (
    <div className="slide mb-1 slick-slide direct slick-current slick-active" data-year={2018} style={{width: '459px'}} tabIndex={0} data-slick-index={3} aria-hidden="false">

      <div className="d-md-flex align-items-md-center">
        <div className="
                        mr-5
                        pr-5
                        mr-xl-7
                        pr-xl-7
                        mb-3 mb-md-0
                        position-relative
                    ">
          <span className="text-color--400 font-w--600 mb-1 opacity--60">2018</span>
          <h3 className="
                            slide__title
                            font-size--26
                            text-color--200
                            font-w--600
                        ">
    Quarter - 1
          </h3>
          <span className="
                            d-none d-md-inline-block
                            decor decor--square decor--light
                        " />
        </div>
        <ul className="pl-2 pl-md-0">
          <li className="text-color--400">
            <p className="h6-font">
      Release V.2 of the IcoNijna platform updated now
      offering Airlines platform.
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
      Development of ICO personal account.
            </p>
          </li>
          <li className="text-color--400">
            <p className="h6-font">Beta testing.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const QuaterFourMem = React.memo(QuaterFour);
