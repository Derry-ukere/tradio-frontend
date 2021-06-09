import React from 'react';
import {MemoizedHeroContent} from '../atom/HeroContent';
import {MemoizedHeroSocialMediaIcons} from '../atom/HeroSocialMediaIcons';

const HeroSectionOne = () => {
  return (
    <div className="row">
      <MemoizedHeroContent />
      <MemoizedHeroSocialMediaIcons />
    </div>
  );
};

export const MemoizedHeroSectionOne  = React.memo(HeroSectionOne);
