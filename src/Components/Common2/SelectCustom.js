import React from "react";
import Select from "react-select";

const SelectCustom = ({
  className,
  isMulti,
  options,
  styles,
  handleChange = (val) => {},
}) => {
  return (
    <>
      <Select
        className={className}
        isMulti={isMulti}
        styles={styles}
        options={options}
        onChange={handleChange}
      />
    </>
  );
};

export default SelectCustom;
