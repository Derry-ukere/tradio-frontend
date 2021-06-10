import React from 'react';

const Divider = () => {
  return (<div className="height-emulator d-none d-lg-block" style={{'height': '489px'}}></div>);
};

export const MemoizedDivider = React.memo(Divider);
