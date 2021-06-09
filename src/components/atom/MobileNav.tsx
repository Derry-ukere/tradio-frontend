import React from 'react';
import {MemoizedBackdrop} from '../molecule/Backdrop';

interface ToggleProps {
  clickHandlerTwo: () => void;
  state: boolean;
}
const MobileNav = (props :ToggleProps ) => {
  return (
    <nav>
      <ul className="navbar-nav" id="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#working-process">How it works</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#token-sale-details">Token details</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#roadmap">Roadmap</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#team">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#documents">Documents</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#faq">FAQ</a>
          <MemoizedBackdrop clickHandlerTwo = {props.clickHandlerTwo} state = {props.state}/>
        </li>
      </ul>
    </nav>
    
  );
};

export const  MemoizedMobileNav = React.memo(MobileNav);
