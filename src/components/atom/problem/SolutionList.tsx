import React from 'react';

const SolutionList = () => {
  return (
    <div className="col-12 col-lg-6 reveal">
      <div className="bg-color--dark--1 border--around p-3 rounded--10">
        <h3 className="mb-2">Our solution</h3>
        <p className="h6-font">
        We have built smart contracts that release ICO funds to the
        project only following the decision of its token buyers once the
        project meets its milestones.
          <br />
          <br />
        To create a transparent, decentralized infrastructure, where one
        can track the targeted use of funds. Thanks to the W12 protocol,
        any party can create a Tradio organization of the type they
        need, set up its roadmap and determine the use of funds. Each
        participant will be able to track and control funds, and assess
        the impact of the contribution.
        </p>
      </div>
    </div>
  );
};

export const MemoSolutionList = React.memo(SolutionList);
