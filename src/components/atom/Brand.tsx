import React from 'react';

export const Brand = () => {
  return (
    <a className="navbar-brand" href="" data-testid="brand" >
      <img className="navbar-brand__regular" src="img/logo.png" alt="brand-logo" />
    </a>
  );
};

export const MemoizedBrand = React.memo(Brand);
