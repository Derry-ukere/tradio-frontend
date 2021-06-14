import React from 'react';

const Overlay = () => {
  return (
    <div className="background-holder background--cover background--top opacity--08" style={{backgroundImage: 'url("img/layout/sphere.svg")', backgroundRepeat: 'no-repeat'}}>
      <img src="img/layout/sphere.svg" alt="image" className="background-image-holder" style={{display: 'none'}} />
    </div>
  );
};

export const MemOverlay = React.memo(Overlay);
