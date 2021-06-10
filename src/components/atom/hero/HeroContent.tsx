import React from 'react';

const HeroContent = () => {
  return (
    <div className="
    col-12 col-md-10 col-lg-8
    px-lg-0
    mx-auto
    mb-3 mb-lg-0
    mt-8 mt-lg-0
    text-center
    z-index2
">
      <div className="hero-content">
        <h1 className="hero__title h2-font mb-2">
Building solutions for inheritance, asset distribution and asset
control
        </h1>
        <p className="hero__description font-size--20 mb-3 mb-lg-5 mb-md-6">
By using Blockchain technology, we aim to get making service
faster and cheaper. For more information, you can read the
whitepaper
        </p>
        <a href="#" className="
            btn
            btn-bg--cta--1
            rounded--full
            btn-hover--3d btn-hover--splash
            mb-2
        ">
          <span className="btn__text">Get Started Now</span>
        </a>
        <p className="color--white font-w--600">
          <span className="color--primary">15% OFF</span> only in October
        </p>
      </div>
      {/* end of content */}
    </div>
  );
};

export const MemoizedHeroContent = React.memo(HeroContent);
