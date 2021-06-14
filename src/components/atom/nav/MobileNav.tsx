import React from 'react';
import {MemoizedBackdrop} from '../../molecule/nav/Backdrop';

interface ToggleProps {
  clickHandlerTwo: () => void;
  state: boolean;
}
const MobileNav = (props :ToggleProps ) => {
  return (
    <nav>
      <ul className="navbar-nav" id="navbar-nav">
        <li className="nav-item" >
          <a className="nav-link" href="#working-process" onClick = {props.clickHandlerTwo}>How  it  works</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#token-sale-details" onClick = {props.clickHandlerTwo} >Token details</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#roadmap" onClick = {props.clickHandlerTwo} >Roadmap</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#team"onClick = {props.clickHandlerTwo} >Team</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="#faq" onClick = {props.clickHandlerTwo} >FAQ</a>
        </li>
      </ul>
      <MemoizedBackdrop clickHandlerTwo = {props.clickHandlerTwo} state = {props.state}/>
    </nav>
    
  );
};

export const  MemoizedMobileNav = React.memo(MobileNav);
