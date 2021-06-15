import React from 'react';

const QuaterOne = () => {
  return (
    <div className="slide mb-1 slick-slide slick-current slick-active" data-year={2017} style={{width: '459px'}} tabIndex={-1} data-slick-index={0} aria-hidden="true">
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
        Founders of INT meet to confirm ideas around
        decentralized travel platform.
            </p>
          </li>
          <li className="text-color--400">
            <p className="h6-font">
        Token is tested and ready for release.
            </p>
          </li>
          <li className="text-color--400">
            <p className="h6-font">
        Whitepaper available in both English and
        Chinese.
            </p>
          </li>
          <li className="text-color--400">
            <p className="h6-font">Sale website optimized.</p>
          </li>
          <li className="text-color--400">
            <p className="h6-font">
        Web platform and application designed around
        user accessibility.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const MemQuaterOne= React.memo(QuaterOne);
