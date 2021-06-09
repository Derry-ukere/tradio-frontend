import React from 'react';
import {MemoizedInnerContainer} from '../../atom/footer/InnerContainer';

const NewsleterContainer = () => {
  return (
    <div className="container">
      < MemoizedInnerContainer />
    </div>
  );
};

export const MemoizedNewsleterContainer = React.memo(NewsleterContainer);
