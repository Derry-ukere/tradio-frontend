import React from 'react';
import  {MemTopRow} from './TopRow';
import {MemBottomRow} from './BottomRow';

const Body = () => {
  return (
    <div className="row">
      <MemTopRow />
      <MemBottomRow />
    </div>
  );
};

export const MemBody = React.memo(Body);
