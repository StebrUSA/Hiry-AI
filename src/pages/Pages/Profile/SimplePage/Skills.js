import React from "react";
import { Grid, _ } from "gridjs-react";

const Skills = () => {
  const data2 = [
    ["ReactJS", "7", "8"],
    ["Redux", "5", "8"],
    ["MongoDB", "6", "4"],
    ["Jasmine", "6", "7"],
    ["Angular", "2", "6"],
    ["Jest", "2", "6"],
    ["SQL", "6", "4"],
    ["Python", "6", "4"],
  ];
  return (
    <React.Fragment>
      <Grid
        data={data2}
        columns={["Skill", "Experience", "Rating out of 10"]}
        sort={true}
        pagination={{ enabled: true, limit: 5 }}
      />
    </React.Fragment>
  );
};

export default Skills;
