import React from 'react';

const Title = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-9 mx-auto mx-md-0">
        <div className="mb-5 mb-lg-7 text-center text-md-left reveal">
          <h2 className="h3-font mb-2">Benefits of using Tradio</h2>
          <p className="h6-font">
        gives people access to wristbands that allow cashless payments
        at events, festivals, and venues across borders. During that
        time, our sample size was three million, one hundred and
        twenty-nine thousand drivers. According to our information, this
        is the largest dataset in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export const MemTitle = React.memo(Title);
