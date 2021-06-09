import React from 'react';
import {MemoizedHeroInage} from '../atom/HeroInage';
import {MemoizedHeroBody} from '../molecule/HeroBody';

export const Hero = () => {
  return (
    <section className="hero hero--v3 section--dark bg-color--dark--1 d-flex align-items-center hidden">
      <MemoizedHeroInage />
      < MemoizedHeroBody />
    </section>
  );
};

export const  MemoizedHero = React.memo(Hero);
