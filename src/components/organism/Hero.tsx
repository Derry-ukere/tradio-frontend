import React from 'react';
import {MemoizedHeroInage} from '../atom/hero/HeroInage';
import {MemoizedHeroBody} from '../molecule/hero/HeroBody';

export const Hero = () => {
  return (
    <section className="hero hero--v3 section--dark bg-color--dark--1 d-flex align-items-center hidden" id = "hero">
      <MemoizedHeroInage />
      < MemoizedHeroBody />
    </section>
  );
};

export const  MemoizedHero = React.memo(Hero);
