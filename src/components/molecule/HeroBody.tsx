import React from 'react';
import {MemoizedHeroSectionOne} from '../atom/HeroSectionOne';

const HeroBody = () => {
  return (
    <div className="container">
      <MemoizedHeroSectionOne />
    </div>
  );
};

export const MemoizedHeroBody = React.memo(HeroBody);
