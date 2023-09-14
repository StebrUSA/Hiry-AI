import React, { useState } from "react";
import { Link } from "react-router-dom";

//import images

import logoDark from "../../../assets/images/hiry_logo.svg";

//import Components

import ProfileDropdown from "../../../Components/Common/ProfileDropdown";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="test-header mb-4">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box horizontal-logo mt-1">
                <Link to="/" className="d-inline-block auth-logo">
                  <img src={logoDark} alt="Logo" height="120" width="150" />
                </Link>
              </div>

              <div className="fs-18 text-white fw-bold ml-5 ">
                AI Based Test
              </div>
            </div>

            <div className="d-flex mt-2 align-items-center">
              {/* ProfileDropdown */}
              <ProfileDropdown />
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
