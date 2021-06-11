import React from 'react';
import {MTitle} from '../../atom/how-it-works/Title';
import {MemoContents} from '../../molecule/how-it-works/Contents';
import {MemoButton} from '../../atom/how-it-works/Button';

const Container = () => {
  return (
    <div className="container">
      <MTitle />
      {/* end of section title row */}
      <MemoContents />
      {/* end of row */}
      <MemoButton />
      {/* end of button row */}
    </div>
  );
};

export const MContainer = React.memo(Container);
