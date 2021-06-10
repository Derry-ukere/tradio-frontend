import React from 'react';
import {MemoMainContent} from '../../atom/About/MainContent';
import {MemoImage} from '../../atom/About/Image';

const AboutContent = () => {
  return (
    <div className="
    row
    align-items-center
    flex-column-reverse flex-lg-row
    text-center text-lg-left
    mb-10
">
      <MemoMainContent />
      <MemoImage />
    </div>
   
  );
};

export const MemoizeAboutContent = React.memo(AboutContent);
