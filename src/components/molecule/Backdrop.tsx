/* eslint-disable quotes */
import React from 'react';


interface propTypes {
  clickHandlerTwo : () => void;
  state: boolean
  
  }
const Backdrop = (props : propTypes) => {
  const oldClass = "backdrop hide" ;
  const newClass = "backdrop";
  return (
    <div className = {props.state ? newClass : oldClass}  onClick = {props.clickHandlerTwo}/>
  );
};

export const MemoizedBackdrop = React.memo(Backdrop);
