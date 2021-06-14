import React from 'react';
import {MemTitle} from '../../atom/sales-info/Title';
import {MemBody} from '../../atom/sales-info/Body';

const Container = () => {
  return (
    <div className="container">
      <MemTitle />
      {/* end of section title row */}
      <MemBody />
      {/* end of token dist row */}
    </div>
  );
};

export const  MemContainer = React.memo(Container);
