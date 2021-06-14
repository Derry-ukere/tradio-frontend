import React from 'react';
import {MemTitle} from '../../atom/team/Title';
import {MemRow} from '../../atom/team/Row';

const Container = () => {
  return (
    <div className="container">
      <MemTitle />
      {/* end of section title row */}
      <MemRow /> 
    </div>
  );
};

export const MemContainer = React.memo(Container);
