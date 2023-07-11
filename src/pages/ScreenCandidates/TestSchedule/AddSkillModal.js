import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody, Input } from "reactstrap";
import { skillSuggestions } from "../../../common/data/skillSuggestions";
import SimpleBar from "simplebar-react";

const AddSkillModal = ({ show, onAddClick, onCloseClick }) => {
  const [skillList, setskillList] = useState(skillSuggestions);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const searchSkills = (ele) => {
    let search = ele.target.value;
    if (search) {
      search = search.toUpperCase();
      setskillList(
        skillSuggestions.filter((data) =>
          data.lable.toUpperCase().includes(search)
        )
      );
    } else {
      setskillList(skillSuggestions);
    }
  };

  const handleSkillSelection = (event, skill) => {
    if (event.target.checked) {
      setSelectedSkills((prevSelectedSkills) => [...prevSelectedSkills, skill]);
    } else {
      setSelectedSkills((prevSelectedSkills) =>
        prevSelectedSkills.filter(
          (selectedSkill) => selectedSkill.lable !== skill.lable
        )
      );
    }
  };

  const handleAddSkills = () => {
    onAddClick(selectedSkills);
    console.log("selected", selectedSkills);
  };

  return (
    <Modal fade={true} isOpen={show} toggle={onCloseClick} centered={true}>
      <ModalBody className="py-4 px-4">
        <p className="text-primary text-left fw-semibold  fs-18 mx-2  mb-3">
          Add New Skills
        </p>
        <div className="search-box">
          <input
            type="text"
            className="form-control bg-light border-light"
            autoComplete="off"
            id="searchList"
            placeholder="Search for skills..."
            onKeyUp={(e) => searchSkills(e)}
          />
          <i className="ri-search-line search-icon"></i>
        </div>
        <SimpleBar
          data-simplebar
          style={{ maxHeight: "190px" }}
          className="px-3 mx-n3"
        >
          <ul className="list-unstyled mb-0 pt-2" id="candidate-list">
            {(skillList || []).map((item, index) => (
              <li className="list-group-item ps-0" key={index}>
                <div className="d-flex align-items-start mt-3">
                  <div className="form-check ps-0 flex-shrink-0 me-2">
                    <input
                      type="checkbox"
                      className="form-check-input ms-0"
                      onChange={(e) => handleSkillSelection(e, item)}
                    />
                  </div>
                  <div className="flex-shrink-0 me-2">
                    <div className="avatar-xs">
                      <img
                        src={item.img}
                        alt=""
                        className="img-fluid rounded-circle candidate-img"
                      />
                    </div>
                  </div>

                  <div className="flex-shrink-0 me-2">
                    <label className="form-check-label mb-0 ps-2">
                      {item.lable}
                    </label>
                  </div>
                  <div className="flex-shrink-0 ms-2">
                    <p className="text-muted fs-12 mb-0">{item.version}</p>
                  </div>
                </div>
              </li>
            ))}
            {skillList <= 0 && (
              <div className="align-items-center ms-2 p-2">
                No matching records found
              </div>
            )}
          </ul>
        </SimpleBar>

        <div className="d-flex gap-2 justify-content-end mt-5 mb-2">
          <button
            type="button"
            className="btn w-sm btn-light"
            data-bs-dismiss="modal"
            onClick={onCloseClick}
          >
            Close
          </button>
          <button
            type="button"
            className="btn w-sm btn-danger"
            onClick={handleAddSkills}
          >
            <i className="ri-add-line align-bottom me-1"></i>
            Add Skill
          </button>
        </div>
      </ModalBody>
    </Modal>
  );
};

AddSkillModal.propTypes = {
  onCloseClick: PropTypes.func,
  onDeleteClick: PropTypes.func,

  show: PropTypes.any,
};

export default AddSkillModal;
