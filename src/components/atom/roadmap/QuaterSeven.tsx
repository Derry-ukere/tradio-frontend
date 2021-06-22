import React from 'react';

const QuaterSeven = () => {
  return (
    <div className="slide mb-1 slick-slide direct slick-current slick-active " data-year={2017} style={{width: '510px', margin: '16px 0px'}} data-slick-index={1} aria-hidden="true" tabIndex={-1}>
      <div className="d-md-flex align-items-md-center"  style = {{display : 'flex', alignItems: 'center', justifyContent : 'center'}}>
        <div className="mr-5 pr-5 mr-xl-7 pr-xl-7 mb-3 mb-md-0 position-relative">
          <h5 className="slide__title font-size--26 text-color--200 font-w--600">
            <div className="d-flex align-items-center">
              <span className="mr-2"><img src="img/tes1.jpg" alt="avatar" /></span>
              <div className="d-flex flex-column">
                <span className="client-name font-size--17 font-w--600">James  Reuben</span>
                <span>ENG, UK</span>
              </div>
            </div>
          </h5>
          <span className="d-none d-md-inline-block decor decor--square decor--light" />
        </div>
      </div>
      <div className="slide slick-slide slick-cloned"  tabIndex={-1} data-slick-index={5} aria-hidden="true">
        <div className="d-md-flex p-3 py-lg-5 pl-lg-4 pr-lg-10">
          <span className="testimonial__quote color--coral mr-3"><i className="icon icon-quote" /></span>
          <div>
            <blockquote className="blockquote mb-3" style = {{fontSize:'2vh', textSizeAdjust:'auto'}}>
            As an overseas investor, I needed assurance in a company through every stage of the process, and Tradio have provided just that. Their professionalism and commitment meant that my armchair deal really was hassle free.
            </blockquote> 
          </div>
        </div>
      </div>
    </div>
  );
};

export const QuaterSevenMem = React.memo(QuaterSeven);
