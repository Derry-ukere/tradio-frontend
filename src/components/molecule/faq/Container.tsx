import React,{useState} from 'react';
import {MemRow} from '../../atom/faq/Row';

const Container = () => {
  const [show, setshow] = useState(false);


  const handleClick = () =>{
    setshow((prev) => !prev);
  };

  return (
    <div className="container">
      <MemRow  show = {show} click = {handleClick} />
    </div>
  );
};

export const MemContainer = React.memo(Container);
