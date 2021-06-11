import React from 'react';
import {MemoTitleRow} from '../problem/TitleRow';
import {MemoSolutionRow} from '../problem/SolutionRow';

const ProblemsContainer = () => {
  return (
    <div className="container">
      <MemoTitleRow />
      <MemoSolutionRow />
      <hr className="border--bottom" />
    </div>
  );
};

export const MemoizedProblemsContainer = React.memo(ProblemsContainer);
