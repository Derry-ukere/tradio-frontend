import React from 'react';
interface ToggleProps {
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
 
}

export const CloseToggleButton = (props : ToggleProps ) => {
  
  return (
    <button className = "navbar-toggler d-lg-none" type="button" data-testid="toggle" onClick = {props.ClickHandler}  data-toggle="navbarToggler" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon active" />
    </button>
  );
};

export const  MemoizedCloseToggleButton = React.memo(CloseToggleButton);

