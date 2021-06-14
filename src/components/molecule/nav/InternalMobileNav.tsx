import React from 'react';
import {MemoizedMobileNav} from '../../atom/nav/MobileNav';


interface ToggleProps {
clickHandler : (event: React.MouseEvent<HTMLButtonElement>) => void;
clickHandlerTwo: () => void;
state : boolean;
}

const InternalMobileNav = (props:ToggleProps) => {
  return (
    <div className="navbar-inner">
      <MemoizedMobileNav clickHandlerTwo = {props. clickHandlerTwo} state = {props.state}/>
    </div>
  );
};

export const  MemoizedInternalMobileNav = React.memo(InternalMobileNav);
