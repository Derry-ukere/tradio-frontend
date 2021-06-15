import React from 'react';


interface ToggleProps {
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
 
}


const ButtomButton = (props: ToggleProps) => {
  return (
    <button type="button" onClick = {props.ClickHandler} className="carosuel-arrow carosuel-arrow--vertical carosuel-arrow--next slick-arrow" style={{}} aria-disabled="false"><i className="icon icon-right-arrow" /></button>
  );
};

export default ButtomButton;
