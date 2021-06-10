import React from 'react';

export const Flag = () => {
  return (
    <div className="dropdown-module dropdown-module--dark d-inline-block position-relative ml-1 ml-sm-2" data-testid='flag'>
      <button className="dropdown-module__toggler" type="button">
        <span className="flag-image">
          <img src="img/flag/uk.svg" alt="flag" className="svg" />
        </span>
      </button>
    </div>
  );
};

export const  MemoizedFlag = React.memo(Flag);
