import React from 'react';

const ProblemList = () => {
  return (
    <div className="col-12 col-lg-6 reveal">
      <ul className="pl-2">
        <li className="color--primary mb-3 h5-font">
          <h3 className="h5-font font-w--600 mb-1">Lack of transparency</h3>
          <p className="h6-font">
        Up to 60% of the young generation admits that transparency
        influences their decision to donate.
          </p>
        </li>
        <li className="color--primary mb-3 h5-font">
          <h3 className="h5-font font-w--600 mb-1">Expensive admin costs</h3>
          <p className="h6-font">
        High marketing upfront costs and fund transfer commissions
        make smaller charities difficult to maintain.
          </p>
        </li>
        <li className="color--primary mb-3 h5-font">
          <h3 className="h5-font font-w--600">Managing a portfolio</h3>
          <p className="h6-font">
        Large portfolios are hard to manage because of low
        liquidity, slippage and high transaction costs.
          </p>
        </li>
      </ul>
    </div>
  );
};

export const MemoProblemList = React.memo(ProblemList);
