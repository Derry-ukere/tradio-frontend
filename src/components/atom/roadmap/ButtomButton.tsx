/* eslint-disable quotes */
import React from 'react';


interface ToggleProps {
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
  disableDownButton:boolean
 
}
const ButtomButton = (props: ToggleProps) => {
  const oldClass = "carosuel-arrow carosuel-arrow--vertical carosuel-arrow--next slick-arrow ";
  const newClass = "carosuel-arrow carosuel-arrow--vertical carosuel-arrow--next slick-arrow slick-disabled";
  return (
    <button type="button" onClick = {props.ClickHandler} className={props.disableDownButton ? newClass : oldClass}  style={{}} aria-disabled={props.disableDownButton ? "true" : "false"} disabled = {props.disableDownButton && true} ><i className="icon icon-right-arrow"/></button>
  );
};

export default ButtomButton;
