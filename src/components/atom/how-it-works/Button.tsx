import React from 'react';

const Button = () => {
  return (
    <div className="row mt-lg-2">
      <div className="col-12 text-center mt-5 mt-lg-10 reveal">
        <a href="#" className="  btn  btn-bg--cta--1  rounded--full  btn-hover--splash btn-hover--3d"><span className="btn__text">Join the Whitelist</span></a>
      </div>
    </div>
  );
};

export const MemoButton = React.memo(Button);
