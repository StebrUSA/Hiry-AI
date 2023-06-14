import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  UncontrolledCollapse,
  CardFooter,
  Button,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalBody,
  ModalFooter,
  Input,
  ModalHeader
} from "reactstrap";

const leadDiscover = (props) => {

  const [modal, setModal] = useState(false);
  const [addNote, setAddnote] = useState('');

  const toggle = () => setModal(!modal);
  const handleNote = ()=>{
    console.log(addNote,"addNote")
  }

  console.log(props, "props")
  return (
    <div className="col">
      <Card>
        <Link
          to="#"
          className={"card-header bg-soft-" + props.deal.bgColor}
          id={"leadDiscovered" + props.index}
        >
          <h5 className="card-title text-uppercase fw-semibold mb-1 fs-15">
            {props.deal.title}
          </h5>
          {/* <p className="text-muted mb-0">
            {props.deal.price}{" "}
            <span className="fw-medium">{props.deal.deals} Deals</span>
          </p> */}
        </Link>
      </Card>
      <UncontrolledCollapse
        toggler={"#leadDiscovered" + props.index}
        defaultOpen={true}
      >
        {props.deal.subItem.map((subitem, subitemkey) => (
          <React.Fragment key={subitemkey}>
            <Card
              className={
                subitem.isRibbon
                  ? "mb-1 ribbon-box ribbon-fill ribbon-sm"
                  : "mb-1"
              }
            >
              {subitem.isRibbon && (
                <div className="ribbon ribbon-info">
                  <i className="ri-flashlight-fill"></i>
                </div>
              )}
              <CardBody>
                <Link
                  to="#"
                  className="d-flex align-items-center"
                  id={"leadInnerDiscovered" + props.index + subitemkey}
                >
                  <div className="flex-shrink-0">
                    <img
                      src={subitem.img}
                      alt=""
                      className="avatar-xs rounded-circle"
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="fs-14 mb-1">{subitem.title}</h6>
                    <p className="text-muted mb-0">
                      {subitem.date}
                    </p>
                  </div>
                </Link>
              </CardBody>
              <UncontrolledCollapse
                className="border-top border-top-dashed"
                toggler={"#leadInnerDiscovered" + props.index + subitemkey}
                defaultOpen={subitem.isOpen === true ? true : false}
              >
                <CardBody>
                  <h6 className="fs-14 mb-1">
                    {subitem.subTitle}{" "}
                    <small
                      className={
                        "badge badge-soft-" + subitem.timeDurationClass
                      }
                    >
                      {subitem.timeDuration}
                    </small>
                  </h6>
                  <p className="text-muted">
                    As a company grows however, you find it's not as easy to
                    shout across
                  </p>
                  <ul className="list-unstyled vstack gap-2 mb-0">
                    <li>
                      <div className="d-flex">
                        <div className="flex-shrink-0 avatar-xxs text-muted">
                          <i className="ri-question-answer-line"></i>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0">Meeting with Thomas</h6>
                          <small className="text-muted">
                            Yesterday at 9:12AM
                          </small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <div className="flex-shrink-0 avatar-xxs text-muted">
                          <i className="ri-mac-line"></i>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0">Product Demo</h6>
                          <small className="text-muted">
                            Monday at 04:41PM
                          </small>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <div className="flex-shrink-0 avatar-xxs text-muted">
                          <i className="ri-earth-line"></i>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0">Marketing Team Meeting</h6>
                          <small className="text-muted">
                            Monday at 04:41PM
                          </small>
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardBody>
                <CardFooter className="hstack gap-2">
                  {/* <Button color="warning" className="btn-sm w-100">
                    <i className="ri-phone-line align-bottom me-1"></i> Status
                  </Button> */}
                  <UncontrolledDropdown>
                    <DropdownToggle style={{ width: "45px" }} tag="a" href="#" className="btn btn-soft-secondary btn-sm btn-icon">
                      <i className="w-100 ri-more-fill"></i>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-end">
                      <li><DropdownItem><i className="ri-eye-fill me-2 align-bottom text-muted"></i>In Progress</DropdownItem></li>
                      <li><DropdownItem><i className="ri-download-2-fill me-2 align-bottom text-muted"></i>On Hold</DropdownItem></li>
                      <li><DropdownItem><i className="ri-download-2-fill me-2 align-bottom text-muted"></i>Rejected</DropdownItem></li>
                      <li><DropdownItem><i className="ri-download-2-fill me-2 align-bottom text-muted"></i>Approved</DropdownItem></li>

                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <Button color="info" className="btn-sm w-100" onClick={toggle}>
                    <i className="ri-question-answer-line align-bottom me-1"></i>{" "}
                    Add Note
                  </Button>
                </CardFooter>
              </UncontrolledCollapse>
            </Card>
          </React.Fragment>
        ))}
      </UncontrolledCollapse>
      <Modal onSubmit={handleNote} isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add Note</ModalHeader>
        <ModalBody>
          <Input value={addNote} type="textarea" onChange={(e)=>setAddnote(e.target.value)}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Save
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default leadDiscover;
