import React from 'react';
import Wideget from './Widget';
import ButtomWiget from './ButtomWidget';

const InnerFooterContainer = () => {
  return (
    <div className="container">
      <div className="row">
        <Wideget />
        {/* end of widget col */}
        <ButtomWiget /> 
        {/* end of col */}
      </div>
      {/* end of row */}
    </div>
  );
};

export default InnerFooterContainer;
