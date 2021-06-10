import React from 'react';

const SubcribeSection = () => {
  return (
    <div className="col-12 col-lg-6 mb-2 mb-lg-0">
      <h3 className="font-size--30 mb-2 mb-md-0">
              Subscribe and stay updated
      </h3>
    </div>
  );
};

export const MemoizedSubcribeSection = React.memo(SubcribeSection);
