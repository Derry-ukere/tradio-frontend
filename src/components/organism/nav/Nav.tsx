import React,{useState} from 'react';
import {MemoizedTogglerButtun} from '../../atom/TogglerButtun';
import {MemoizedInternalMobileNav} from '../../molecule/InternalMobileNav';
import {MemoizedBrand} from '../../atom/Brand';
import {MemoizedAuthen} from '../../molecule/Authen';

const Nav = () => {
  const [sideDrawerOpen, setsideDrawerOpen] = useState(false);

  const openDrawer = ()=>{
    setsideDrawerOpen((prevState)=> !prevState);
  };

  const closeDrawer = ()=>{
    setsideDrawerOpen((prevState)=> !prevState);
  };

  const backdroHandler = ()=> {
    setsideDrawerOpen((prevState)=> !prevState);
  };
  // eslint-disable-next-line quotes
  const open = "navbar navbar-sticky sticky-bg-color--dark navbar-expand-lg navbar-dark active";
  // eslint-disable-next-line quotes
  const close = "navbar navbar-sticky sticky-bg-color--dark navbar-expand-lg navbar-dark";
  return (
    <header className={sideDrawerOpen ? open : close}>
      <div className="container-fluid position-relative">
        <MemoizedBrand />
        <MemoizedTogglerButtun ClickHandler = {openDrawer}/>
        <MemoizedInternalMobileNav clickHandler = {closeDrawer} clickHandlerTwo = {backdroHandler}/>
        <MemoizedAuthen />
      </div>
    </header>
  
  );
};

export const  MemoisedNavBar = React.memo(Nav);
 
