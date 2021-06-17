import React from 'react';
import {MemRow} from '../../atom/faq/Row';
// import Card from '../../atom/faq/Card';

const Container = () => {
  // const [show, setshow] = useState(false);


  // const handleClick = () =>{
  //   setshow((prev) => !prev);
  // };

  return (
    <div className="container" >
      < MemRow />
    </div>
  );
};

export const MemContainer = React.memo(Container);
