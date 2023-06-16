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
  ModalHeader,
  Tooltip
} from "reactstrap";
const statusOptions = ['Pending', 'Interviewed', 'On Hold', 'Rejected', 'Approved'];

const TrackingSystem = ({ applicantDetail, index, handleStatusChange }) => {
  const [modal, setModal] = useState(false);
  const [addNote, setAddnote] = useState('');
  const [noteValue, setNoteValue] = useState('');
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(null);
  const Tooltiptoggle = () => setTooltipOpen(!tooltipOpen);


  const toggle = () => {
    setCurrentCardIndex(index);
    setModal(!modal);
  }

  const handleNote = () => {
    setNoteValue(addNote)
    const newDataArray = [...applicantDetail.subItem]
    newDataArray[currentCardIndex].notes.push(addNote)
    console.log(newDataArray, "newDataArray")
    setAddnote("")
    setModal(!modal)
  }

  return (

    <div className="col">
      <Card>
        <Link
          to="#"
          className={"card-header bg-soft-" + applicantDetail.bgColor}
          id={"leadDiscovered" + index}
        >
          <h5 className="card-title text-uppercase fw-semibold mb-1 fs-15">
            {applicantDetail.title}
          </h5>
        </Link>
      </Card>
      <UncontrolledCollapse
        toggler={"#leadDiscovered" + index}
        defaultOpen={true}
      >
        {applicantDetail.subItem.map((subitem, subitemkey) => (
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
                  id={"leadInnerDiscovered" + index + subitemkey}
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
                toggler={"#leadInnerDiscovered" + index + subitemkey}
                defaultOpen={subitem.isOpen === true ? true : false}
              >
                <CardBody>
                  <>
                    <h5>Notes :</h5>
                  </>
                  {subitem.notes?.length > 0 && subitem.notes.map((note, noteInd) => {
                    return (
                      <li>
                        <>
                          <span className="text-muted mb-0">
                            {note}{" "}
                          </span>
                        </>
                      </li>

                    )
                  })}
                </CardBody>
                <CardFooter className="hstack gap-2">
                  <UncontrolledDropdown id="TooltipExample">
                    <DropdownToggle style={{ width: "45px" }} tag="a" href="#" className="btn btn-soft-secondary btn-sm btn-icon">
                      <i className="w-100 ri-more-fill"></i>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-end">
                      {statusOptions.map((status) => {
                        return <li><DropdownItem onClick={() => handleStatusChange(subitem, status, applicantDetail.title)} key={status} >{status}</DropdownItem></li>
                      }
                      )}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <Button key={index} color="info" className="btn-sm w-100" onClick={() => toggle(index)}>
                    <i className="ri-question-answer-line align-bottom me-1"></i>{" "}
                    Add Note
                  </Button>
                  <Tooltip
                    isOpen={tooltipOpen}
                    target="TooltipExample"
                    toggle={Tooltiptoggle}
                    placement="top"
                  >
                    Select Status
                  </Tooltip>
                </CardFooter>
              </UncontrolledCollapse>
            </Card>
          </React.Fragment>
        ))}
      </UncontrolledCollapse>
      <Modal key={index} isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Note</ModalHeader>
        <ModalBody>
          <Input value={addNote} type="textarea" onChange={(e) => setAddnote(e.target.value)} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleNote}>
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

export default TrackingSystem;
