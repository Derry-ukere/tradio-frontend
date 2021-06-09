import React from 'react';


interface propTypes {
  clickHandlerTwo : () => void;
  
  }
const Backdrop = (props : propTypes) => {
  return (
    <div className = "backdrop"  onClick = {props.clickHandlerTwo}/>
  );
};

export const MemoizedBackdrop = React.memo(Backdrop);
