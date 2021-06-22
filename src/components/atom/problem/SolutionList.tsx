import React from 'react';

const SolutionList = () => {
  return (
    <div className="col-12 col-lg-6 reveal">
      <div className="bg-color--dark--1 border--around p-3 rounded--10">
        <h3 className="mb-2">Our solution</h3>
        <p className="h6-font direct">
        Since 2014, HaasOnline has democratized high-frequency trading on the most well-known digital asset platforms by leveraging integrations through APIs. HaasOnline products and technology are simple enough for any trader to use, yet robust enough to power some of the world’s most advanced automated trading algorithms
          <br />
          <br />
          By making automated trading a valuable part of every crypto trader’s toolkit, HaasOnline is enabling pioneers in fintech  from cryptocurrency hobbyists to emerging institutional leaders  to create ingenious automated trading strategies.
        </p>
      </div>
    </div>
  );
};

export const MemoSolutionList = React.memo(SolutionList);
