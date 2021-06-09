import React from 'react';

const ButtomWidget = () => {
  return (
    <div className="col-12 col-lg-6 ml-lg-auto text-center text-lg-right">
      <ul className="
                          icon-group icon-rounded
                          icon-rounded-color--gray
                          justify-content-center justify-content-lg-end
                          mb-2 mb-lg-2
                      ">
        <li>
          <a href="#" className="text-color--300"><i className="fab fa-facebook-f" /></a>
        </li>
        <li>
          <a href="#" className="text-color--300"><i className="fab fa-telegram-plane" /></a>
        </li>
        <li>
          <a href="#" className="text-color--300"><i className="fab fa-linkedin-in" /></a>
        </li>
        <li>
          <a href="#" className="text-color--300"><i className="fab fa-twitter" /></a>
        </li>
        <li>
          <a href="#" className="text-color--300"><i className="fab fa-medium-m" /></a>
        </li>
        <li>
          <a href="#" className="text-color--300"><i className="fab fa-bitcoin" /></a>
        </li>
        <li>
          <a href="#" className="text-color--300"><i className="fab fa-youtube" /></a>
        </li>
      </ul>
      {/* end of social icon */}
      <ul className="
                          list-unstyled
                          d-flex
                          flex-wrap
                          justify-content-center justify-content-lg-end
                          remove-space--x
                      ">
        <li className="mx-2 ml-lg-2">
          <a href="#" className="body-font text-color--300">Terms &amp; Conditions</a>
        </li>
        <li className="mx-2 ml-lg-2">
          <a href="#" className="body-font text-color--300">Privacy Policy</a>
        </li>
        <li className="mx-2 ml-lg-2">
          <a href="#" className="body-font text-color--300">Cookie Preferences</a>
        </li>
      </ul>
      {/* end of nav item */}
      <p className="text-color--400 font-size--14">
    © 2018 <a href="#" className="text-color--400">Tradio Technologies</a>. All
    Rights Reserved.
      </p>
    </div>
  );
};

export default ButtomWidget;
