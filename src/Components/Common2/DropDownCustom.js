import React from "react";
import {
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownItem,
} from "reactstrap";

const DropDownCustomComponent = (props) => {
     const handleDropdownValue=(value)=>{
      console.log(value,"value")
     }
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
          <DropdownMenu  className={props.width}>
            {props.options.map((ele, index) => {
              return <DropdownItem onClick={()=>handleDropdownValue(ele.value)} key={index}>{ele.value}</DropdownItem>;
            })}
          </DropdownMenu>
        </UncontrolledDropdown>
      </ButtonGroup>
    </div>
  );
};

export default DropDownCustomComponent;
