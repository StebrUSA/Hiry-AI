import React from 'react'
import {Nav, NavItem,NavLink} from "reactstrap"
const TestSider = () => {
    return (
        <div className="sidebar">
            <Nav vertical className="sidebar-nav">
                <NavItem className="">
                    <NavLink href="#">
                        <i className="fas fa-home fa-lg"></i>{" "}
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="fs-16" href="#">
                        1
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="fs-16" href="#">
                        2
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="fs-16" href="#">
                        3
                    </NavLink>
                </NavItem>
                {/* Add more NavItems for additional questions */}
            </Nav>
        </div>
    )
}

export default TestSider;