import React from 'react';

const Title = () => {
  return (
    <div className="col-12">
      <div className="text-center text-lg-left mb-5 mb-lg-6 reveal">
        <h2 className="h3-font">
            Main problem of the <br />
            current market?
        </h2>
      </div>
    </div>
  );
};

export const MemoTitle = React.memo(Title);
