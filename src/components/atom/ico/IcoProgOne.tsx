import React from 'react';

const IcoProgOne = () => {
  return (
    <div className="
d-sm-flex
justify-content-sm-between
p-3
border--bottom
mb-8
">
      <div className="
    ico-progress__text
    text-center text-sm-left
    mb-1 mb-sm-0
">
        <span className="body-font text-color--400">Raised funds</span>
        <p className="color--primary font-size--24 font-w--700">
17.5M ICT
        </p>
      </div>
      <div className="ico-progress__text text-center mb-1 mb-sm-0">
        <span className="body-font text-color--400">Token Distributed</span>
        <p className="color--primary font-size--24 font-w--700">
156.45
        </p>
      </div>
      <div className="ico-progress__text text-center text-sm-right">
        <span className="body-font text-color--400">Total USD Rised</span>
        <p className="color--primary font-size--24 font-w--700">
$56.000.000
        </p>
      </div>
    </div>
  );
};

export const MempIcoProgOne = React.memo(IcoProgOne);




