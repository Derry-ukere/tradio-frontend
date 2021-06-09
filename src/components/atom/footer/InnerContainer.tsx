import React from 'react';
import {MemoizedSubcribeSection} from '../footer/SubcribeSection';
import {MemoizedSubscribeFormContainer} from './SubscribeFormContainer';

const InnerContainer = () => {
  return (
    <div className="row align-items-center text-center text-lg-left">
      <MemoizedSubcribeSection /> 
      <MemoizedSubscribeFormContainer />
    </div>
  );
};

export const MemoizedInnerContainer = React.memo(InnerContainer);
