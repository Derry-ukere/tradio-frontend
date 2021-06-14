import React from 'react';
import {MemTitle} from '../../atom/patners/Title';
import {MemLogos} from '../../atom/patners/Logos';


const Container = () => {
  return (
    <div className="container">
      <MemTitle />
      <MemLogos />
    </div>   
  );
};

export const MemContainer = React.memo(Container);
