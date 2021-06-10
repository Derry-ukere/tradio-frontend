import React from 'react';
import {MemoizeAboutContent} from './AboutContent';
import {MemoLogogroup} from '../../atom/About/Logogroup';

const AboutContainer = () => {
  return (
    <div className="container">
      <MemoizeAboutContent />
      {/* end of main body content */}
      <MemoLogogroup />
      {/* end of logo group row */}
    </div>
  );
};

export const MemoisedAboutContainer = React.memo(AboutContainer);
