import React from 'react';
import {MemRow} from '../../atom/faq/Row';

const Container = () => {
  return (
    <div className="container">
      <MemRow />
    </div>
  );
};

export const MemContainer = React.memo(Container);
