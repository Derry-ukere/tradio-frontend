import React from 'react';
import {MemoizedProblemsContainer} from '../molecule/problem/ProblemsContainer';

const Problems = () => {
  return (
    <section className="space--top pb-6 section--dark bg-color--dark--2">
      <MemoizedProblemsContainer />
    </section>
  );
};

export const MemoProblems = React.memo(Problems);
