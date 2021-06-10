import React from 'react';
import {MemoizedIcoPricing} from '../ico/IcoPricing';

const IcoRow = () => {
  return (
    <div className="row">
      <MemoizedIcoPricing />
    </div>
  );
};

export const MemoizedIcoRow = React.memo(IcoRow);

