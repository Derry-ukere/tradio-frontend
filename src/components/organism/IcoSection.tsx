import React from 'react';
import {MemoizedIcoContainer} from '../molecule/ico/IcoContainer';

const IcoSection = () => {
  return (
    <section className="ico-progress ico-progress--v2 section--dark bg-color--dark--1">
      < MemoizedIcoContainer />
    </section>
  );
};

export const MemoizedIcoSection = React.memo(IcoSection);
