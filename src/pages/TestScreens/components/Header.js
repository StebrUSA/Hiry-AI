import React, { useState } from "react";
import { Link } from "react-router-dom";

//import images

import hirylogo from "./../../../assets/images/hiry_logo.svg";

//import Components

import ProfileDropdownTestScreen from "../../../Components/Common/ProfileDropdownTestScreen";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="test-header">
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

            <div className="fs-18 text-white fw-bold">Time left: 00:00:00</div>

            <div className="d-flex align-items-center">
              <div className="fs-18 text-white fw-bold ">Answered: 0 / 5</div>
              {/* Dark/Light Mode set */}

              {/* ProfileDropdown */}
              <ProfileDropdownTestScreen />
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
