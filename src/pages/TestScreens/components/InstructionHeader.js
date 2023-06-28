import React, { useState } from "react";
import { Link } from "react-router-dom";

//import images

import logoLight from "./../../../assets/images/logo-light.png";

//import Components

import ProfileDropdown from "../../../Components/Common/ProfileDropdown";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="test-header">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box horizontal-logo mt-1">
                <Link to="/" className="d-inline-block auth-logo">
                  <img src={logoLight} alt="" height="20" />
                </Link>
              </div>

              <div className="fs-18 text-white fw-bold ml-5 ">ATSKill Test</div>
            </div>

            <div className="d-flex mt-1 align-items-center">
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
