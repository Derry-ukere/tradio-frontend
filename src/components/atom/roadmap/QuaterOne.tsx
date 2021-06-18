/* eslint-disable quotes */
import React from 'react';
// import {CountContext} from './Body';

const QuaterOne = () => {
  // const context = useContext(CountContext);
  // const count =  context?.countState;
  // const checkCount = (num: number)=> count && count === num;


  // useEffect(()=>{
  //   console.log('count -1 is ', checkCount(-1));
  // },[count]);

  // const oldClass = "slide mb-1 slick-slide";
  // const newClass = "slide mb-1 slick-slide slick-current slick-active";

  return (
    <div className="slide mb-1 slick-slide direct slick-current slick-active" data-year={2017} style={{width: '510px', margin: '16px 0px'}} data-slick-index={1} aria-hidden="true" tabIndex={-1}>
      <div className="d-md-flex align-items-md-center">
        <div className="mr-5 pr-5 mr-xl-7 pr-xl-7 mb-3 mb-md-0 position-relative">
          <h5 className="slide__title font-size--26 text-color--200 font-w--600">
            <div className="d-flex align-items-center">
              <span className="mr-2"><img src="img/avatar-3.png" alt="avatar" /></span>
              <div className="d-flex flex-column">
                <span className="client-name font-size--17 font-w--600">Alan Rogers 7</span>
                <span>Themeforest</span>
              </div>
            </div>
          </h5>
          <span className="d-none d-md-inline-block decor decor--square decor--light" />
        </div>
      </div>
      <div className="slide slick-slide slick-cloned" style={{width: '508px'}} tabIndex={-1} data-slick-index={5} aria-hidden="true">
        <div className="d-md-flex p-3 py-lg-5 pl-lg-4 pr-lg-10">
          <span className="testimonial__quote color--coral mr-3"><i className="icon icon-quote" /></span>
          <div>
            <blockquote className="blockquote mb-3 ">7SpaceMax is designed to pioneer the plasma architecture, the leading scalability network is a stakeholder and infinitely scalable blockchain for plasma. Quisque ac dolor nec nisl pell entesque ullan mor. Vestibu
            um sed per ultrices mi etamor. Amcorper uique ac do lo nec nis im pites mane.
            </blockquote> 
          </div>
        </div>
      </div>
    </div>
  );
};

export const MemQuaterOne= React.memo(QuaterOne);
