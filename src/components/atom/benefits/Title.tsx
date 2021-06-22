import React from 'react';

const Title = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-9 mx-auto mx-md-0 direct ">
        <div className="mb-5 mb-lg-7 text-center text-md-left reveal">
          <h2 className="h3-font mb-2">Benefits of using Tradio</h2>
          <p className="h6-font">
          Tradio seeks to create and maintain advanced automated trading technologies.
          We strive to grow our company with the same honesty and integrity we use to craft 
          our products while giving back to our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export const MemTitle = React.memo(Title);
