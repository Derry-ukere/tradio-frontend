import React from 'react';

const Title = () => {
  return (
    <div className="row">
      <div className="col-12 col-sm-10 col-md-8 mx-auto reveal direct">
        <div className="text-center mb-5 mb-lg-7">
          <h2 className="h3-font mb-2">Reasons Why You Should Invest</h2>
          <p className="h6-font">
          Statistics have shown that there are over 5 million users on the Bitcoin network,
          with many joining with each passing day. They are keen to invest in this cryptocurrency
          as they are convinced that it is a smart investment.
          </p>
        </div>
      </div>
    </div>
  );
};

export const MemTitle = React.memo(Title);
