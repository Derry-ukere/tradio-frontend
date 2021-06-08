import React from 'react';
import Login from '../atom/Login';
import Signup from '../atom/SignUp';
import Flag from '../atom/Flag';

const Authen = () => {
  return (
    <div className="d-flex align-items-center ml-lg-1 ml-xl-2 mr-5 mr-sm-6 m-lg-0">
      < Login />
      < Signup />
      < Flag />
    </div>
  );
};

export default Authen;
