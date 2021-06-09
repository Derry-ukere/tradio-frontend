import React from 'react';

interface ToggleProps {
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}
const TogglerButtun = (props : ToggleProps ) => {
  return (
    <button className="navbar-toggler d-lg-none" onClick = {props.ClickHandler} type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
  
  );
};

export const  MemoizedTogglerButtun = React.memo(TogglerButtun);
