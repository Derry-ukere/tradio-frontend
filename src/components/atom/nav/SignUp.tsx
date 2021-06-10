import React from 'react';

const SignUp = () => {
  return (
    <a href="#" className="btn btn-size--md btn-bg--primary rounded--full btn-hover--3d btn-hover--splash">
      <span className="btn__text d-flex align-items-center">
        <i className="icon icon-a-add color--white pr-1 h6-font font-w--700" />
        Sign up
      </span>
    </a>
  );
};

export const  MemoizedSignUp = React.memo(SignUp);
