import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const TestSider = ({
  navigationData,
  activeQuestion,
  handleNavigationItemClick,
}) => {
  return (
    <div className="sidebar">
      <Nav vertical className="sidebar-nav">
        <NavItem>
          <NavLink href="#">
            <i className="fas fa-home fa-lg"></i>{" "}
          </NavLink>
        </NavItem>
        {navigationData.map((section) => (
          <React.Fragment key={section.heading}>
            <NavItem className="fs-14 heading fw-bold">
              {section.heading}
            </NavItem>
            <Nav vertical className="ml-3">
              {section.problems.map((problem, index) => (
                <NavItem key={problem.text}>
                  <NavLink
                    className="fs-12"
                    href="#"
                    onClick={() => handleNavigationItemClick(index)}
                  >
                    {problem.text}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
            <hr className="sidebar-divider" />
          </React.Fragment>
        ))}
      </Nav>
    </div>
  );
};

export default TestSider;
