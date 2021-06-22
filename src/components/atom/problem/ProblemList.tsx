import React from 'react';

const ProblemList = () => {
  return (
    <div className="col-12 col-lg-6 reveal">
      <ul className="pl-2 ">
        <li className="color--primary mb-3 h5-font">
          <h3 className="h5-font font-w--600 mb-1">Focus on the Customer</h3>
          <p className="h6-font direct">
          Spend the time to understand our customer and solve problems from their perspectives,We’re driven to build a meaningful and impactful crypto fintech company. Embrace revolutionary ideas, everything big once started small.
          </p>
        </li>
        <li className="color--primary mb-3 h5-font">
          <h3 className="h5-font font-w--600 mb-1">Investing in Others</h3>
          <p className="h6-font direct">
          We believe that releasing customer potential is critical. Stay humble, and understand it’s not about us,Always act in an honest, direct, and transparent way that positively uplifts the entire crypto-ecosystem.
          </p>
        </li>
        <li className="color--primary mb-3 h5-font">
          <h3 className="h5-font font-w--600">Take Ownership</h3>
          <p className="h6-font direct">
          Think long term, and spend money sensibly. Owners understand a business, and agonize over the small things.
          </p>
        </li>
      </ul>
    </div>
  );
};

export const MemoProblemList = React.memo(ProblemList);
