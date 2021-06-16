import React from 'react';

const Logos = () => {
  return (
    <div className="position-relative reveal">
      <div className="vertical-border d-flex pos-abs-center h-100 w-100">
        <span className="column-border" />
        <span className="column-border" />
        <span className="column-border" />
      </div>
      <div className="
                  row
                  horizontal-border
                  text-center
                  mb-lg-6
                  pb-lg-6
                  d-flex
                  align-items-center
              ">
        <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0">
          <span><img src="img/pat1.png" alt="partner-logo" className="img-fluid" /></span>
        </div>
        {/* end of single item */}
        <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0">
          <span><img src="img/pat2.png" alt="partner-logo" className="img-fluid" /></span>
        </div>
        {/* end of single item */}
        <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0">
          <span><img src="img/pat3.png" alt="partner-logo" className="img-fluid" /></span>
        </div>
        {/* end of single item */}
        <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0">
          <span><img src="img/pat4.png" alt="partner-logo" className="img-fluid" /></span>
        </div>
        {/* end of single item */}
      </div>
      {/* end of item row */}
      <div className="
                  row
                  horizontal-border
                  text-center
                  mb-lg-6
                  pb-lg-6
                  d-flex
                  align-items-center
              ">
        <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0">
          <span><img src="img/pat5.png" alt="partner-logo" className="img-fluid" /></span>
        </div>
        {/* end of single item */}
        <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0">
          <span><img src="img/pat6.png" alt="partner-logo" className="img-fluid" /></span>
        </div>
        {/* end of single item */}
        <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0">
          <span><img src="img/pat7.png" alt="partner-logo" className="img-fluid" /></span>
        </div>
        {/* end of single item */}
        <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0">
          <span><img src="img/pat8.png" alt="partner-logo" className="img-fluid" /></span>
        </div>
        {/* end of single item */}
      </div>
    </div>
  );
};

export const MemLogos = React.memo(Logos);
