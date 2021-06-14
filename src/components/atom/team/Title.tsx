import React from 'react';

const Title = () => {
  return (
    <div className="row">
      <div className="col-12 col-sm-10 col-md-8 mx-auto reveal">
        <div className="text-center mb-5 mb-lg-7">
          <h2 className="h3-font mb-2">Our team</h2>
        </div>
      </div>
    </div>
  );
};

export const MemTitle = React.memo(Title);
