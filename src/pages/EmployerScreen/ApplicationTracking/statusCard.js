import React from "react";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";

const StatusCard = ({ applicantDetail, index }) => {
  return (
    <>
      <div key={index}>
        <Card>
          <Link
            to="#"
            className={"card-header bg-soft-" + applicantDetail.bgColor}
            id={"leadDiscovered" + index}
          >
            <h5 className="card-title text-uppercase fw-semibold mb-1 fs-15">
              {applicantDetail.title}
            </h5>
            <p className="text-muted mb-0">
              <span className="fw-medium">
                {applicantDetail.subItem.length} Candidates
              </span>
            </p>
          </Link>
        </Card>
      </div>
    </>
  );
};

export default StatusCard;
