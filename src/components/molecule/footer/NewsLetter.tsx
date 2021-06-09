import React from 'react';
import {MemoizedNewsleterContainer} from '../../atom/footer/NewsleterContainer';

const NewsLetter = () => {
  return (
    <div className="border--bottom pt-4 pb-4">
      <MemoizedNewsleterContainer />
    </div>
  );
};

export const MemoisedNewsLetter = React.memo(NewsLetter);
