import React from 'react';

const Title = () => {
  return (
    <div className="row">
      <div className="col-12 col-sm-10 col-md-8 mx-auto">
        <div className="text-center mb-5 reveal direct">
          <h2 className="h3-font mb-2">How it works</h2>
          <p className="h6-font">
          Tradio trading bots are computer programs that automagically buy and sell
          various cryptocurrencies at the right time with the goal of generating a profit.
          
          </p>
        </div>
      </div>
    </div>
  );
};

export const MTitle = React.memo(Title);
