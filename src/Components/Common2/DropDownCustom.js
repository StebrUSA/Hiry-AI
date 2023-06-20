import React from "react";
import {
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownItem,
} from "reactstrap";
const DropDownCustomComponent = (props) => {
  return (
    <div>
      <ButtonGroup className={props.width}>
        <UncontrolledDropdown className={props.width}>
          <DropdownToggle
            tag={props.tagName}
            className={` ${props.className} ${props.width}`}
          >
            {props.LabelName}
            <i className={props.dropDownButtonClass}></i>
          </DropdownToggle>
          <DropdownMenu className={props.width}>
            {props.members.map((ele, index) => {
              return <DropdownItem key={index}>{ele.value}</DropdownItem>;
            })}
          </DropdownMenu>
        </UncontrolledDropdown>
      </ButtonGroup>
    </div>
  );
};

export default DropDownCustomComponent;
