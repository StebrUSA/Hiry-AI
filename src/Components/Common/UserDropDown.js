import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { get } from "lodash";
import user from "../../common/users";
import { showMenuBar } from "../../slices/leftSideMenuBar/reducer";
import { useDispatch } from "react-redux";

const UserDropDown = () => {
  const dispatch = useDispatch();
  // Declare a new state variable, which we'll call "menu"
  const [selectedUser, setSelectedUser] = useState("employer");
  const [isUserDropdown, setIsUserDropdown] = useState(false);

  const changeUserAction = (SelectedUser) => {
    dispatch(showMenuBar(SelectedUser));
    setSelectedUser(SelectedUser);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdown(!isUserDropdown);
  };
  return (
    <React.Fragment>
      <Dropdown
        isOpen={isUserDropdown}
        toggle={toggleUserDropdown}
        className="ms-1 topbar-head-dropdown header-item"
      >
        <DropdownToggle
          className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
          tag="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="17px"
            viewBox="0 0 448 512"
          >
            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
          </svg>
        </DropdownToggle>
        <DropdownMenu className="notify-item py-2">
          {Object.keys(user).map((key) => (
            <DropdownItem
              key={key}
              onClick={() => changeUserAction(key)}
              className={`notify-item ${
                selectedUser === key ? "active" : "none"
              }`}
            >
              <span className="align-middle">{get(user, `${key}`)}</span>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default UserDropDown;
