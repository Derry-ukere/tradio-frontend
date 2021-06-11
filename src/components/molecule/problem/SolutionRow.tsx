import React from 'react';
import {MemoProblemList} from '../../atom/problem/ProblemList';
import {MemoSolutionList} from '../../atom/problem/SolutionList';

const SolutionRow = () => {
  return (
    <div className="row pb-6">
      <MemoProblemList />
      {/* end of problem list */}
      <MemoSolutionList />
      {/* end of solutions */}
    </div>
  );
};

export const MemoSolutionRow = React.memo(SolutionRow);
