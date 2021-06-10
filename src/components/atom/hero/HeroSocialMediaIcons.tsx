import React from 'react';

const HeroSocialMediaIcons = () => {
  return (
    <div className="col-12 col-md-1 mr-md-3 text-center icon-group--sticky">
      <ul className="icon-group icon-group--vertical rounded--full rounded--full justify-content-center">
        <li>
          <a href="facebook.com" className="color--primary"><i className="fab fa-facebook-f" /></a>
        </li>
        <li>
          <a href="telegram.com" className="color--primary"><i className="fab fa-telegram-plane" /></a>
        </li>
        <li>
          <a href="linkedin.com" className="color--primary"><i className="fab fa-linkedin-in" /></a>
        </li>
        <li>
          <a href="twitter.com" className="color--primary"><i className="fab fa-twitter" /></a>
        </li>
        <li>
          <a href="medium.com" className="color--primary"><i className="fab fa-medium-m" /></a>
        </li>
        <li>
          <a href="bitcoin.com" className="color--primary"><i className="fab fa-bitcoin" /></a>
        </li>
        <li>
          <a href="youtube.com" className="color--primary"><i className="fab fa-youtube" /></a>
        </li>
      </ul>
    </div>
  );
};

export const MemoizedHeroSocialMediaIcons = React.memo(HeroSocialMediaIcons);
