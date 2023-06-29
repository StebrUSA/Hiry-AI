import React, { useState } from "react";
import {
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownItem,
} from "reactstrap";

const DropDownCustomComponent = (props) => {

  const [selectToggleValue,setSelectTogglevalue] = useState(props.LabelName)

     const handleDropdownValue=(value)=>{
      setSelectTogglevalue(value)
     }
  return (
    <div>
      <ButtonGroup className={props.width}>
        <UncontrolledDropdown className={props.width}>
          <DropdownToggle
            // tag={props.tagName}
            className={` ${props.className} ${props.width}`}
          >

            {selectToggleValue}
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
