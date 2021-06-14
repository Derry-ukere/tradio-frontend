import React from 'react';
import {MemTitle} from '../../atom/roadmap/Title';
import {MemBody} from '../../atom/roadmap/Body';

const Container = () => {
  return (
    <div className="container">
      <MemTitle />
      <MemBody />
    </div>
  );
};

export const MemContainer = React.memo(Container);
