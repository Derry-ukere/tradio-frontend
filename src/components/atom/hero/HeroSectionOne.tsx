import React from 'react';
import {MemoizedHeroContent} from '../hero/HeroContent';
import {MemoizedHeroSocialMediaIcons} from '../hero/HeroSocialMediaIcons';

const HeroSectionOne = () => {
  return (
    <div className="row">
      <MemoizedHeroContent />
      <MemoizedHeroSocialMediaIcons />
    </div>
  );
};

export const MemoizedHeroSectionOne  = React.memo(HeroSectionOne);
