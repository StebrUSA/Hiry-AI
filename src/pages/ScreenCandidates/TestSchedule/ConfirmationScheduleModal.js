import PropTypes from "prop-types";
import React from "react";
import { Modal, ModalBody } from "reactstrap";

const ConfirmationScheduleModal = ({ show, onConfirmClick, onCloseClick }) => {
  return (
    <Modal fade={true} isOpen={show} toggle={onCloseClick} centered={true}>
      <ModalBody className="py-3 px-5">
        <div className="mt-4 pt-2 text-center   fs-20">
          <p className="text-success  fs-20 mx-4 mb-0">
            Your Scheduled tests Details
          </p>
          <p className="text-muted fs-14 mt-3 mb-0">
            Date of the Test : 31st August
          </p>
          <p className="text-muted fs-14 mt-3 mb-0">
            Duration of the Test : 60 min
          </p>
        </div>

        <div className="d-flex gap-2 justify-content-center mt-5 mb-2">
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
            className="btn w-sm btn-danger "
            id="delete-record"
            onClick={onConfirmClick}
          >
            Confirm
          </button>
        </div>
      </ModalBody>
    </Modal>
  );
};

ConfirmationScheduleModal.propTypes = {
  onCloseClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  show: PropTypes.any,
};

export default ConfirmationScheduleModal;
