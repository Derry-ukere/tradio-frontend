import React from 'react';

const Login = () => {
  return (
    <a href="https://adoring-jepsen-5ed0f3.netlify.app" className="color--primary font-w--600 mr-2 d-none d-sm-inline-block">Login</a>
  );
};

export const  MemoizedLogin = React.memo(Login);
