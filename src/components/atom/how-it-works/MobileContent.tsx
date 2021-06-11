import React from 'react';

const MobileContent = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="  options options--right text-right remove-space--bottom ">
        <div className="option mb-3 mb-sm-10">
          <h3 className=" h6-font text-left text-uppercase font-w--700 ">
        Margin <br />trading commissions
          </h3>
          <span className="decor decor--light" />
        </div>
        <div className="option mb-3 mb-sm-10">
          <h3 className="  h6-font text-left text-uppercase font-w--700">
       Electronic<br />payment system
          </h3>
          <span className="decor decor--light" />
        </div>
        <div className="option mb-3 mb-sm-10">
          <h3 className="  h6-font text-left text-uppercase font-w--700 ">
       Bank <br />commission
          </h3>
          <span className="decor decor--light" />
        </div>
      </div>
      {/* end of right side content */}
    </div>
  );
};

export const MemoMobileContent = React.memo(MobileContent);
