import React from 'react';

const Image = () => {
  return (
    <div className="col-12 col-lg-5 col-xl-6 mb-6 mb-lg-0">
      <picture className="about__image reveal">
        <img src="img/about.png" alt="illustration" className="img-fluid" />
      </picture>
    </div>
  );
};

export const MemoImage = React.memo(Image);
