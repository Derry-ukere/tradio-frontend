import React from 'react';

const Logogroup = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="logo-group justify-content-xl-between">
         
          <a href="#" className="logo-group__image mr-lg-0 ml-lg-0 reveal">
            <img src="img/directory-site2.png" alt="directory-site-logo" className="img-fluid" />
          </a>
          <a href="#" className="logo-group__image mr-lg-0 ml-lg-0 reveal">
            <img src="img/directory-site3.png" alt="directory-site-logo" className="img-fluid" />
          </a>
          <a href="#" className="logo-group__image mr-lg-0 ml-lg-0 reveal">
            <img src="img/directory-site4.png" alt="directory-site-logo" className="img-fluid" />
          </a>
          <a href="#" className="logo-group__image mr-lg-0 ml-lg-0 reveal">
            <img src="img/directory-site-logo-5.png" alt="directory-site-logo" className="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const MemoLogogroup = React.memo(Logogroup);
