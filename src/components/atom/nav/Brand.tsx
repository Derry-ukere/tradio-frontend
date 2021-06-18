import React from 'react';
import { Link } from 'react-scroll';


export const Brand = () => {
  return (
    <Link className="navbar-brand"  data-testid="brand" to="ico"  spy={true} smooth={true} offset={0} duration={750}>
      <img className="navbar-brand__regular" src="img/logo.png" alt="brand-logo" />
      <img className="navbar-brand__sticky" src="img/logo.png" alt="brand-logo" />
    </Link>
  );
};

export const MemoizedBrand = React.memo(Brand);
