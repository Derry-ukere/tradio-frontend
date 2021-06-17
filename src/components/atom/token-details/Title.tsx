import React from 'react';

const Title = () => {
  return (
    <div className="row">
      <div className="col-12 col-sm-10 col-md-8 mx-auto reveal direct">
        <div className="text-center mb-5 mb-lg-7 reveal">
          <h2 className="h3-font mb-2">Token sale details</h2>
          <p className="h6-font">
        Total amount of INT released is 1,000,000,000. No additional
        token releases will take place. If all INT available for sale
        are not purchased, the remaining tokens are destroyed.
          </p>
        </div>
      </div>
    </div>
  );
};

export const MemTitle = React.memo(Title);
