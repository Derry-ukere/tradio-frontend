import React from 'react';
import {MemoTitle} from '../../atom/problem/Title';

const TitleRow = () => {
  return (
    <div className="row">
      <MemoTitle />
    </div>
  );
};

export const MemoTitleRow = React.memo(TitleRow);
