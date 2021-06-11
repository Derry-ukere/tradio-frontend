import React from 'react';

const Boarder = () => {
  return (
    <div className="vertical-border d-flex pos-abs-center h-100 w-100">
      <span className="column-border" />
    </div>
  );
};

export const MemBoarder = React.memo(Boarder);
