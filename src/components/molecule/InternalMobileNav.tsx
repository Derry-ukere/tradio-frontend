import React from 'react';
import {MemoizedCloseToggleButton} from '../atom/CloseToggleButton';
import {MemoizedMobileNav} from '../atom/MobileNav';
import {MemoizedBackdrop} from '../molecule/Backdrop';


interface ToggleProps {
clickHandler : (event: React.MouseEvent<HTMLButtonElement>) => void;
clickHandlerTwo: () => void;
}

const InternalMobileNav = (props:ToggleProps) => {
  return (
    <div className="navbar-inner">
      <MemoizedBackdrop clickHandlerTwo = {props.clickHandlerTwo}/>
      <MemoizedCloseToggleButton ClickHandler = {props.clickHandler} />
      <MemoizedMobileNav />
    </div>
  );
};

export const  MemoizedInternalMobileNav = React.memo(InternalMobileNav);
