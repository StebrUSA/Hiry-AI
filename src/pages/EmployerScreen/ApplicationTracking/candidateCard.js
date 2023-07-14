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
  Tooltip,
} from "reactstrap";
const statusOptions = [
  "Applied",
  "Shortlisted",
  "Interview Scheduled",
  "Awaiting result",
  "Selected",
  "Rejected",
];

const CandidateCard = ({ handleStatusChange, index, applicant }) => {
  const [modal, setModal] = useState(false);
  const [addNote, setAddnote] = useState("");
  const [noteValue, setNoteValue] = useState("");
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipOpenNote, setTooltipOpenNote] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(null);
  const Tooltiptoggle = () => setTooltipOpen(!tooltipOpen);
  const TooltiptoggleNote = () => setTooltipOpenNote(!tooltipOpenNote);

  const toggle = (subitemkey) => {
    setCurrentCardIndex(subitemkey);
    setModal(!modal);
  };

  const handleNote = () => {
    setNoteValue(addNote);
    const newDataArray = [...applicant.subItem];
    newDataArray[currentCardIndex].notes.push(addNote);
    setAddnote("");
    setModal(!modal);
  };

  return (
    <>
      <div key={index}>
        <UncontrolledCollapse
          toggler={"#leadDiscovered" + index}
          defaultOpen={true}
        >
          {applicant.subItem.map((subitem, subitemkey) => (
            <React.Fragment key={subitemkey}>
              <Card className={subitem.isRibbon ? "mb-1" : "mb-1"}>
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
                      <p className="text-muted mb-0">{subitem.date}</p>
                    </div>
                  </Link>
                </CardBody>
                <UncontrolledCollapse
                  className="border-top border-top-dashed"
                  toggler={"#leadInnerDiscovered" + index + subitemkey}
                  defaultOpen={subitem.isOpen === true ? true : false}
                >
                  {subitem.notes?.length > 0 && (
                    <CardBody>
                      <>{subitem.notes?.length > 0 && <h5>Notes :</h5>}</>
                      {subitem.notes?.length > 0 &&
                        subitem.notes.map((note, noteInd) => {
                          return (
                            <li key={noteInd}>
                              <>
                                <span className="text-muted mb-0">{note} </span>
                              </>
                            </li>
                          );
                        })}
                    </CardBody>
                  )}
                  <CardFooter className="hstack gap-2">
                    <UncontrolledDropdown key={subitemkey+subitem.id}>
                      <DropdownToggle key={subitemkey+subitem.id} tag="a" href="#">
                        <Button key={subitemkey}
                          className="btn-sm"
                          style={{ width: "45px" }}
                          color="light"
                          data-bs-toggle="tooltip" data-bs-placement="top" title="Change Status"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1.25em"
                            viewBox="0 0 512 512"
                          >
                            <path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                          </svg>
                          <DropdownMenu key={subitemkey} className="dropdown-menu-end">
                            {statusOptions.map((status, ind) => {
                              return (
                                <li key={ind}>
                                  <DropdownItem
                                    onClick={() =>
                                      handleStatusChange(
                                        subitem,
                                        status,
                                        applicant.title
                                      )
                                    }
                                    key={status}
                                  >
                                    {status}
                                  </DropdownItem>
                                </li>
                              );
                            })}
                          </DropdownMenu>
                        </Button>
                      </DropdownToggle>
                    </UncontrolledDropdown>
                    <Button
                      style={{ width: "45px" }}
                      key={index}
                      color="light"
                      className="btn-sm"
                      onClick={() => toggle(subitemkey)}
                      data-bs-toggle="tooltip" data-bs-placement="top" title="Add Note"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1.25em"
                        viewBox="0 0 512 512"
                      >
                        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                      </svg>
                    </Button>
                    
                  </CardFooter>
                </UncontrolledCollapse>
              </Card>
            </React.Fragment>
          ))}
        </UncontrolledCollapse>
      </div>

      <Modal key={index} isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Note</ModalHeader>
        <ModalBody>
          <Input
            value={addNote}
            type="textarea"
            onChange={(e) => setAddnote(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleNote}>
            Save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CandidateCard;
