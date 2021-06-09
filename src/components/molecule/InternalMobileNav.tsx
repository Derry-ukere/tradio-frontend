import React from 'react';
import {MemoizedCloseToggleButton} from '../atom/CloseToggleButton';
import {MemoizedMobileNav} from '../atom/MobileNav';


interface ToggleProps {
clickHandler : (event: React.MouseEvent<HTMLButtonElement>) => void;
clickHandlerTwo: () => void;
state : boolean;
}

const InternalMobileNav = (props:ToggleProps) => {
  return (
    <div className="navbar-inner">
      <MemoizedCloseToggleButton ClickHandler = {props.clickHandler} />
      <MemoizedMobileNav clickHandlerTwo = {props. clickHandlerTwo} state = {props.state}/>
    </div>
  );
};

export const  MemoizedInternalMobileNav = React.memo(InternalMobileNav);
