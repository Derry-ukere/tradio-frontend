import React from 'react';

const Title = () => {
  return (
    <div className="row">
      <div className="col-12 col-sm-10 col-md-8 mx-auto reveal direct">
        <div className="text-center mb-5 mb-lg-7">
          <h2 className="h3-font mb-2">Token sale Information</h2>
          <p className="h6-font">
            gives people access to wristbands that allow cashless payments
            at events, festivals, and venues across borders. During that
            time, our sample size was three million.
          </p>
        </div>
      </div>
    </div>
  );
};

export const MemTitle = React.memo(Title);
