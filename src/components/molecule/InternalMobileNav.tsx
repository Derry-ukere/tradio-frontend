import React from 'react';
import CloseToggleButton from '../atom/CloseToggleButton';
import MobileNav from '../atom/MobileNav';

interface ToggleProps {
clickHandler : (event: React.MouseEvent<HTMLButtonElement>) => void;

}

const InternalMobileNav = (props:ToggleProps) => {
  return (
    <div className="navbar-inner">
      {/*  Nav close button inside off-canvas/ mobile menu */}
      <CloseToggleButton ClickHandler = {props.clickHandler} />
      {/* end of Nav Toggoler */}
      <MobileNav />
    </div>
  );
};

export default InternalMobileNav;
