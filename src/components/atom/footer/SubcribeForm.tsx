import React from 'react';

const SubcribeForm = () => {
  return (
    <form action="#" className="form">
      <div className="input-group input-group--rounded d-flex">
        <input type="email" className="form-control" placeholder="Enter your email" />
        <button className="btn btn-bg--primary rounded--full btn-hover--splash" type="submit">
          <span className="btn__text">Join Now</span>
        </button>
      </div>
    </form>
  );
};

export const MemoizedSubcribeForm =React.memo(SubcribeForm);
