import React from 'react';


interface ToggleProps {
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void,
 
}

const TopBuuton = (props : ToggleProps ) => {
  return (
    <button type="button" onClick = {props.ClickHandler} className="carosuel-arrow carosuel-arrow--vertical carosuel-arrow--prev slick-arrow" aria-disabled="false" style={{}}><i className="icon icon-left-arrow" /></button>
  );
};

export default TopBuuton;
