import React from 'react';
import {MemTitle} from '../../atom/benefits/Title';
import {MemDetails} from '../../molecule/Benefits/Details';

const Container = () => {
  return (
    <div className="container">
      <MemTitle />
      <MemDetails />
    </div>
  );
};

export const MemContainer = React.memo(Container);
