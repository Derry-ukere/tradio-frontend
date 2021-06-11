import React from 'react';
import {MemoSvg} from '../../atom/how-it-works/Svg';
import {MemoMobileContent} from '../../atom/how-it-works/MobileContent';

const Contents = () => {
  return (
    <div className="row">
      <div className="col-12 text-center">
        <div className="position-relative mt-xl-10 reveal">
          <div className="pos-abs-center d-none d-lg-block">
            <MemoSvg />
            <img src="img/brand-logo-icon.png" alt="brand-logo" className="pos-abs-center" />
          </div>
          {/* end of center image */}
          <div className="d-sm-flex justify-content-between ml-6 ml-sm-0">
            <div className="options options--left text-left remove-space--bottom">
              <div className="option mb-3 mb-sm-10">
                <h3 className="h6-font text-sm-right text-uppercase font-w--700">
          Exchange <br />commissions
                </h3>
                <span className="decor decor--light" />
              </div>
              <div className="option mb-3 mb-sm-10">
                <h3 className="h6-font text-sm-right text-uppercase font-w--700">
          Investment <br />platform commissions
                </h3>
                <span className="decor decor--light" />
              </div>
              <div className="option mb-3 mb-sm-10">
                <h3 className=" h6-font text-sm-right text-uppercase font-w--700 ">
          Mining <br />pool commission
                </h3>
                <span className="decor decor--light" />
              </div>
            </div>
            {/* end of left side content */}
            <div className=" process__circle--mobile  position-relative  d-none d-sm-flex d-lg-none align-items-center">
              <span className="mobile-logo">
                <img src="img/brand-logo-icon.png" alt="brand-logo" className="pos-abs-center" />
              </span>
            </div>
            {/* end of mobile content */} 
            <MemoMobileContent />
          </div>
        </div>
      </div>
      {/* end of col */}
    </div>
  );
};

export const MemoContents = React.memo(Contents);
