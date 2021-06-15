import React from 'react';
import {MemOverlay} from './Overlay';
import {MemQuatersContainer} from './QuatersContainer';

const Body = () => {
  return (
    <div className="row align-items-center pb-7 pb-md-0 reveal">
      <MemOverlay /> 
      <MemQuatersContainer />
    </div>
  );
};

export const MemBody = React.memo(Body);
