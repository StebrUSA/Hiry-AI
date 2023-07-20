import React, { useState } from "react";
import {
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownItem,
} from "reactstrap";

const DropDownCustomComponent = ({LabelName,options,width,tagName,value,dropDownButtonClass,className,handleTypeChange}) => {

  const [selectToggleValue,setSelectTogglevalue] = useState(LabelName)

    //  const onChange=(value)=>{
    //   setSelectTogglevalue(value)
    //  }
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
          <DropdownMenu className={width}>
            {options.map((ele, index) => {
              return <DropdownItem onClick={()=>handleTypeChange(ele.value)} key={index}>{ele.value}</DropdownItem>;
            })}
          </DropdownMenu>
        </UncontrolledDropdown>
      </ButtonGroup>
    </div>
  );
};

export default DropDownCustomComponent;
