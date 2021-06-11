import React from 'react';
import {MemoFeaturesContainer} from '../molecule/features/FeaturesContainer';

const Features = () => {
  return (
    <section className="pb-3 pb-lg-10 section--dark bg-color--dark--2">
      <MemoFeaturesContainer />
    </section>
  
  );
};

export const MemoFeatures = React.memo(Features);
