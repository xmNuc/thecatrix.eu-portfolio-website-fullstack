import React from 'react';
export const TopBar = ({ scrolled }) => {
  return (
    <>
      <div
        id="topbar"
        className={`d-flex align-items-center fixed-top ${scrolled && 'topbar-scrolled'}`}
      >
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="d-flex align-items-center">
              <span>Contact: xmnuc@o2.pl</span>
            </i>
          </div>

          {/* <div className="languages d-none d-md-flex align-items-center">
            <ul>
              <li>EN COMMING SOON</li>
              <li>PL COMMING SOON</li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
};
