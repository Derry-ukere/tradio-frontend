import React,{useState} from 'react';
import TogglerButtun from '../../atom/TogglerButtun';
import InternalMobileNav from '../../molecule/InternalMobileNav';
import Brand from '../../atom/Brand';
import Authen from '../../molecule/Authen';

const Nav = () => {
  const [sideDrawerOpen, setsideDrawerOpen] = useState(false);

  const openDrawer = ()=>{
    setsideDrawerOpen((prevState)=> !prevState);
  };

  const closeDrawer = ()=>{
    setsideDrawerOpen((prevState)=> !prevState);
  };

  // eslint-disable-next-line quotes
  const open = "navbar navbar-sticky sticky-bg-color--dark navbar-expand-lg navbar-dark active";
  // eslint-disable-next-line quotes
  const close = "navbar navbar-sticky sticky-bg-color--dark navbar-expand-lg navbar-dark";
  return (
    <header className={sideDrawerOpen ? open : close}>
      <div className="container-fluid position-relative">
        <Brand />
        {/*  End of brand logo */}
        <TogglerButtun ClickHandler = {openDrawer}/>
        {/* end of Nav toggler */}
        <InternalMobileNav clickHandler = {closeDrawer}/>
        <Authen />
        {/* end of nav cta button */}
      </div>
      {/* end of container */}
    </header>
  
  );
};

export default Nav;
