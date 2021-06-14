import React from 'react';

const Overlay = () => {
  return (
    <div className="background-holder opacity--05" style={{backgroundImage: 'url("img/layout/bg-overlay-04.png")', backgroundRepeat: 'no-repeat'}}>
      <img src="img/layout/bg-overlay-04.png" alt="image" className="background-image-holder" style={{display: 'none'}} />
    </div>
  );
};

export const MemOverlay = React.memo(Overlay);
