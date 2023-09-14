import React, { useState } from "react";
import { Link } from "react-router-dom";

//import images

import hirylogo from "../../../assets/images/hiry_logo.svg";

//import Components

import ProfileDropdown from "../../../Components/Common/ProfileDropdown";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="test-header mb-4">
          <div className="navbar-header">
            <div className="d-flex">
              <div classname="ml-2">
                <Link to="/">
                  <img src={hirylogo} alt="" height="60" />
                </Link>
              </div>

              <div className="fs-18 text-white fw-bold ml-5  mt-3 text-center">
                AI Based Assessment
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
