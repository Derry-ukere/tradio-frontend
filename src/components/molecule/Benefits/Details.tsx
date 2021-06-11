import React from 'react';
import {MemBoarder} from '../../atom/benefits/Boarder';
import {MemColOne} from '../../atom/benefits/ColOne';
import {MemColTwo} from '../../atom/benefits/ColTwo';

const Details = () => {
  return (
    <div className="position-relative remove-space--bottom">
      <MemBoarder />
      <MemColOne />
      <MemColTwo />
    </div>
  );
};

export const MemDetails = React.memo(Details);
