import React, { useState } from "react";
import {
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownItem,
} from "reactstrap";

const DropDownCustomComponent = (props) => {
  const [selectToggleValue, setSelectTogglevalue] = useState(props.LabelName);

  const handleDropdownValue = (value) => {
    setSelectTogglevalue(value);
  };
  return (
    <div>
      <ButtonGroup className={width}>
        <UncontrolledDropdown className={width}>
          <DropdownToggle
            // tag={props.tagName}
            className={` ${className} ${width}`}
          >
            {selectToggleValue}
            <i className={dropDownButtonClass}></i>
          </DropdownToggle>
          <DropdownMenu className={props.width}>
            {props.options.map((ele, index) => {
              return (
                <DropdownItem
                  onClick={() => handleDropdownValue(ele.value)}
                  key={index}
                >
                  {ele.value}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </UncontrolledDropdown>
      </ButtonGroup>
    </div>
  );
};

export default DropDownCustomComponent;
