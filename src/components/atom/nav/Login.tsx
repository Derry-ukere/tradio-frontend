import React from 'react';

const Login = () => {
  return (
    <a href="https://portal.tradiobtc.com" className="color--primary font-w--600 mr-2 d-none d-sm-inline-block">Login</a>
  );
};

export const  MemoizedLogin = React.memo(Login);
