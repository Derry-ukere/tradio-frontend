import React from 'react';

const Overlay = () => {
  return (
    <div className="background-holder background--bottom background--contain background--move" style={{backgroundImage: 'url("img/layout/bg-overlay-08.jpg")', backgroundRepeat: 'no-repeat'}}>
      <img src="img/layout/bg-overlay-08.jpg" alt="image" className="background-image-holder" style={{display: 'none'}} />
    </div>
  );
};

export const MemoOverlay = React.memo(Overlay);
