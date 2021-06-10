import React from 'react';
import {MemoizedIcoRow} from '../ico/IcoRow';

const IcoContainer = () => {
  return (
    <div className="container">
      <MemoizedIcoRow />
    </div>
  );
};

export const MemoizedIcoContainer = React.memo(IcoContainer);


