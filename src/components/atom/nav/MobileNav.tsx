import React from 'react';
import { Link } from 'react-scroll';
import {MemoizedBackdrop} from '../../molecule/nav/Backdrop';

interface ToggleProps {
  clickHandlerTwo: () => void;
  state: boolean;
}
const MobileNav = (props :ToggleProps ) => {
  return (
    <nav>
      <ul className="navbar-nav" id="navbar-nav">
        <li className="nav-item"  >
          <Link className="nav-link" to="working-process" onClick = {props.clickHandlerTwo} spy={true} smooth={true} offset={0} duration={750}>How  it  works</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link" to="token-sale-details" onClick = {props.clickHandlerTwo} spy={true} smooth={true} offset={0} duration={750} >Token details</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link" to="roadmap" onClick = {props.clickHandlerTwo} spy={true} smooth={true} offset={0} duration={750} >Roadmap</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link" to="team" onClick = {props.clickHandlerTwo} spy={true} smooth={true} offset={0} duration={750} >Team</Link>
        </li>
       
        <li className="nav-item" >
          <Link className="nav-link" to="faq" onClick = {props.clickHandlerTwo} spy={true} smooth={true} offset={0} duration={750} >FAQ</Link>
        </li>
      </ul>
      <MemoizedBackdrop clickHandlerTwo = {props.clickHandlerTwo} state = {props.state}/>
    </nav>  
  );
};

export const  MemoizedMobileNav = React.memo(MobileNav);
