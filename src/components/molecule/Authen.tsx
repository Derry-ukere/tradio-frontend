import React from 'react';
import {MemoizedLogin} from '../atom/Login';
import {MemoizedSignUp} from '../atom/SignUp';
import {MemoizedFlag} from '../atom/Flag';

const Authen = () => {
  return (
    <div className="d-flex align-items-center ml-lg-1 ml-xl-2 mr-5 mr-sm-6 m-lg-0">
      < MemoizedLogin />
      < MemoizedSignUp />
      < MemoizedFlag />
    </div>
  );
};

export const MemoizedAuthen = React.memo(Authen);
