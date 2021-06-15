import React from 'react';

const Overlay = () => {
  return (
    <div className="col-12 col-xl-1 mx-auto mx-lg-0 text-center">
      <ul className="roadmap__year list-unstyled d-xl-flex flex-xl-column"><li className="h3-font font-w--700">2017</li><li className="h3-font font-w--700 active">2018</li><li className="h3-font font-w--700">2019</li></ul>
    </div>
  );
};

export const  MemOverlay = React.memo(Overlay);
