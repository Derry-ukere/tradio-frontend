import React from 'react';

const Loader = () => {
  return (
    <div className="preloader">
      <div className="wrapper">
        <div className="blobs">
          <div className="blob-center" />
          <div className="blob" />
          <div className="blob" />
          <div className="blob" />
          <div className="blob" />
          <div className="blob" />
          <div className="blob" />
        </div>
        <div>
          <div className="loader-canvas canvas-left" />
          <div className="loader-canvas canvas-right" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
