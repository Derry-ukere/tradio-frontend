/* eslint-disable quotes */
import React,{useState,useEffect} from 'react';
import {MemoizedTogglerButtun} from '../atom/nav/TogglerButtun';
import {MemoizedInternalMobileNav} from '../molecule/nav/InternalMobileNav';
import {MemoizedBrand} from '../atom/nav/Brand';
import {MemoizedAuthen} from '../molecule/nav/Authen';

const Nav = () => {
  const [sideDrawerOpen, setsideDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  let  close = "navbar navbar-sticky sticky-bg-color--dark navbar-expand-lg navbar-dark";


  const handleScroll = () => {
    const offset=window.scrollY;
    offset > 200 &&  setScrolled (() => !scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
  },[]);

  
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
  if(scrolled){
    close = 'navbar navbar-sticky sticky-bg-color--dark navbar-expand-lg navbar-dark navbar-sticky--moved-up navbar-sticky--transitioned navbar-sticky--on';
  } 

  return (
    <header className={sideDrawerOpen ? open : close}>
      <div className="container-fluid position-relative">
        <MemoizedBrand />
        <MemoizedTogglerButtun ClickHandler = {openDrawer}/>
        <MemoizedInternalMobileNav clickHandler = {closeDrawer} clickHandlerTwo = {backdroHandler} state = {sideDrawerOpen}/>
        <MemoizedAuthen />
      </div>
    </header>
  
  );
};

export const  MemoisedNavBar = React.memo(Nav);
 
