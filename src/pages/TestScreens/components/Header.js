import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownToggle, Form } from "reactstrap";

//import images

import logoLight from "./../../../assets/images/logo-light.png";

//import Components

import ProfileDropdown from "../../../Components/Common/ProfileDropdown";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="test-header">
          <div className="navbar-header bg-secondary">
            <div className="d-flex">
              <div className="navbar-brand-box horizontal-logo mt-1">
                <Link to="/" className="d-inline-block auth-logo">
                  <img src={logoLight} alt="" height="20" />
                </Link>
              </div>

              <div className="fs-18 text-white fw-bold ml-5 ">ATSKill Test</div>
            </div>

            <div className="fs-18 text-white fw-bold">Time left: 00:00:00</div>

            <div className="d-flex align-items-center">
              <div className="fs-18 text-white fw-bold ">Answered: 0 / 5</div>
              {/* Dark/Light Mode set */}

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
