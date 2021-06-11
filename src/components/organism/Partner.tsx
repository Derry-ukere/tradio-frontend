import React from 'react';

const Partner = () => {
  return (
    <section className="space--top pb-4 section--dark bg-color--dark--2">
      <div className="background-holder opacity--05" style={{backgroundImage: 'url("img/layout/bg-overlay-04.png")', backgroundRepeat: 'no-repeat'}}>
        <img src="img/layout/bg-overlay-04.png" alt="image" className="background-image-holder" style={{display: 'none'}} />
      </div>
      {/* end of section overlay */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 mx-auto">
            <div className="text-center mb-5 mb-lg-6 reveal">
              <h2 className="h3-font mb-2">Our partners</h2>
            </div>
          </div>
          {/* end of section title col */}
        </div>
        {/* end of section title row */}
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
              <span><img src="img/partner-logo-v2-1.png" alt="partner-logo" className="img-fluid" /></span>
            </div>
            {/* end of single item */}
            <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span><img src="img/partner-logo-v2-2.png" alt="partner-logo" className="img-fluid" /></span>
            </div>
            {/* end of single item */}
            <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span><img src="img/partner-logo-v2-3.png" alt="partner-logo" className="img-fluid" /></span>
            </div>
            {/* end of single item */}
            <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span><img src="img/partner-logo-v2-4.png" alt="partner-logo" className="img-fluid" /></span>
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
              <span><img src="img/partner-logo-v2-5.png" alt="partner-logo" className="img-fluid" /></span>
            </div>
            {/* end of single item */}
            <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span><img src="img/partner-logo-v2-6.png" alt="partner-logo" className="img-fluid" /></span>
            </div>
            {/* end of single item */}
            <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span><img src="img/partner-logo-v2-7.png" alt="partner-logo" className="img-fluid" /></span>
            </div>
            {/* end of single item */}
            <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span><img src="img/partner-logo-v2-8.png" alt="partner-logo" className="img-fluid" /></span>
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
              <span><img src="img/partner-logo-v2-9.png" alt="partner-logo" className="img-fluid" /></span>
            </div>
            {/* end of single item */}
            <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span><img src="img/partner-logo-v2-10.png" alt="partner-logo" className="img-fluid" /></span>
            </div>
            {/* end of single item */}
            <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span><img src="img/partner-logo-v2-11.png" alt="partner-logo" className="img-fluid" /></span>
            </div>
            {/* end of single item */}
            <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0">
              <span><img src="img/partner-logo-v2-12.png" alt="partner-logo" className="img-fluid" /></span>
            </div>
            {/* end of single item */}
          </div>
          {/* end of item row */}
        </div>
        {/* end of logo area */}
      </div>
    </section>
  );
};

export const MemPartner = React.memo(Partner);
