import React from 'react';
import {MemoizedSubcribeForm} from './SubcribeForm';
const SubscribeFormContainer = () => {
  return (
    <div className="col-12 col-lg-6 ml-md-auto pl-lg-4 pl-xl-0">
      <div className="newsletter-form  form--v1  d-lg-flex align-items-lg-center justify-content-lg-between">
        <MemoizedSubcribeForm /> 
      </div>
    </div>
  );
};

export const MemoizedSubscribeFormContainer = React.memo(SubscribeFormContainer);
