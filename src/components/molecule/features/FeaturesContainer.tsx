import React from 'react';
import {MemoFeaturesContent} from '../../atom/features/FeaturesContent';

const FeaturesContainer = () => {
  return (
    <div className="container">
      <MemoFeaturesContent />
      {/* end of content row */}
    </div>
  );
};

export const MemoFeaturesContainer = React.memo(FeaturesContainer);
