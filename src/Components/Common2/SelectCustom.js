import React from "react";
import Select from "react-select";

const SelectCustom = ({
  className,
  isMulti,
  options,
  handleChange = (val) => {},
}) => {
  return (
    <>
      <Select
        className={className}
        isMulti={isMulti}
        options={options}
        onChange={handleChange}
      />
    </>
  );
};

export default SelectCustom;
