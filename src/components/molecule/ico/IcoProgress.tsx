import React from 'react';
import {MempIcoProgOne} from '../../atom/ico/IcoProgOne';
import {MemoPriceTwo} from '../../atom/ico/PriceTwo';


const IcoProgress = () => {
  return (
    <div className="bg-color--dark--2 rounded--10 mb-2">
      <MempIcoProgOne />
      {/* end of progress text */}
      {/* < MemoIcoProgTwo /> */}
      < MemoPriceTwo />

    </div>
  );
};

export const MemoizedIcoProgress = React.memo(IcoProgress);
