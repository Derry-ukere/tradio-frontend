import React from 'react';

const MainContent = () => {
  return (
    <div className="col-12 col-lg-7 col-xl-6">
      <div className="text-center text-lg-left reveal">
        <h2 className="h3-font mb-3">
Tradio is the future <br />
Be part of the revolution
        </h2>
        <h3 className="h5-font text-color--300 mb-3">
The main objectives of the project are to meet the needs of
cryptocurrency projects and users for traditional services, and
to provide access to investment product
        </h3>
        <p className="h6-font mb-3">
The protocol uses blockchain technology to ensure the
transparency and addressability of transactions. The Tradio
solution also includes mechanism for ICT creation and a platform
that allows projects to raise funds
        </p>
        <div className="
             d-flex
             align-items-center
             justify-content-center justify-content-lg-start
         ">
          <a className="lightbox d-flex align-items-center vbox-item"  target= "_blank" data-autoplay="true" data-vbtype="video" href="https://www.youtube.com/watch?v=UR_LepLsq1U">
            <span className="
                     btn btn-media
                     btn-media-size--sm
                     btn-bg--cta--1
                     rounded--full
                     mr-1
                 ">
              <i className="icon icon-triangle-right" /></span>
            <span className="font-w--700 color--white">Watch our video</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const MemoMainContent = React.memo(MainContent);
