import React from 'react';

const Intro = () => {
  return (
    <div className="row">
      <div className="col-12 text-center mb-4">
        <p>You can purchase Bitcoins through services</p>
      </div>
    </div>
  );
};

export const MemoIntro = React.memo(Intro);
