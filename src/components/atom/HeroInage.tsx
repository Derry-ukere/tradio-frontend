import React from 'react';

const HeroInage = () => {
  return (
    <div className="background-holder background--move z-index1">
      <img src="img/layout/bg-overlay-06.svg" alt="image" className="background-image-holder" />
    </div>
  );
};

export const MemoizedHeroInage = React.memo(HeroInage);
