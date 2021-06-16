/* eslint-disable quotes */
import React from 'react';


interface ToggleProps {
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
  disableButton:Boolean
 
}

const TopBuuton = (props : ToggleProps ) => {
  
  const oldClass = "carosuel-arrow carosuel-arrow--vertical carosuel-arrow--prev slick-arrow";
  const newClass = "carosuel-arrow carosuel-arrow--vertical carosuel-arrow--prev slick-arrow slick-disabled";


  return (
    <button type="button" onClick = {props.ClickHandler} className={props.disableButton? newClass : oldClass } aria-disabled={props.disableButton ? "true" : "false"} style={{}} disabled = {props.disableButton && true} ><i className="icon icon-left-arrow" /></button>
  );
};

export default TopBuuton;
