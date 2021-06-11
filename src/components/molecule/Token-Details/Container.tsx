import React from 'react';
import {MemTitle} from '../../atom/token-details/Title';
import { MemRowOne } from '../../molecule/Token-Details/RowOne';
import {MemRowTwo} from '../../molecule/Token-Details/RowTwo';

const Container = () => {
  return (
    <div className="container">
      <MemTitle />
      {/* end of section title row */}
      <MemRowOne />
      {/* end of row */}
      {/* end token details row */}
      < MemRowTwo />
      {/* end of public token sale area */}
    </div>
  );
};

export const MemContainer  = React.memo(Container);
