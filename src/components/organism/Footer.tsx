import React from 'react';
import {MemoisedNewsLetter} from '../molecule/footer/NewsLetter';
import FooterContainer from '../molecule/footer/FooterContainer';

const Footer = () => {
  return (
    <footer className="footer footer--fixed section--dark bg-color--dark--3">
      <MemoisedNewsLetter />
      <FooterContainer />  
    </footer>
  );
};

export const MemoizedFooter = React.memo(Footer);
