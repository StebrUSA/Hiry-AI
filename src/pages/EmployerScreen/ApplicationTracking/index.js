import React, { useState } from "react";

import { Col, Container, Row, Card, CardBody, Input } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { ApplicantsData } from "../../../common/data/applicationTracking";

// Import actions
import { getDeals as onGetDeals } from "../../../slices/thunks";
// redux
import { useSelector, useDispatch } from "react-redux";
import StatusCard from "./statusCard";
import CandidateCard from "./candidateCard";

const ApplicationTracking = () => {
  const [trackingData, setTrackingData] = useState(ApplicantsData);
  // const dispatch = useDispatch();
  // const { deals } = useSelector((state) => ({
  //   deals: state.Crm.deals,
  // }));

  // useEffect(() => {
  //   if (deals && !deals.length) {
  //     dispatch(onGetDeals());
  //   }
  // }, [dispatch, deals]);

  const [searchQuery, setSearchquery] = useState("");

  const handleSearchCandidate = (event) => {
    const query = event.target.value;
    setSearchquery(query);
    //chats is a array of object
    const searchList = ApplicantsData.map((item) => {
      const filteredSubItemArray = item.subItem.filter(
        (subitem) =>
          subitem.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
      return { ...item, subItem: filteredSubItemArray };
    });
    setTrackingData(searchList);
  };

  const handleStatusChange = (subitem, status, currentStatus) => {
    const updatedArray = [...trackingData];
    updatedArray.forEach((el) => {
      if (el.title == status) {
        el.subItem.push(subitem);
      } else if (el.title == currentStatus) {
        el.subItem = el.subItem.filter((item) => item.id !== subitem.id);
      }
    });
    setTrackingData([...updatedArray]);
  };
  document.title =
    "Application Trcaking | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Application Tracking" pageTitle="TRACKING" />
          <Card>
            <CardBody>
              <Row className="g-3">
                <Col md={3}>
                  <div className="search-box">
                    <Input
                      value={searchQuery}
                      onChange={handleSearchCandidate}
                      type="text"
                      className="form-control search"
                      placeholder="Search for candidates..."
                    />
                    <i className="ri-search-line search-icon"></i>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <div>
            <Row>
              {trackingData.length > 0 &&
                trackingData.map((applicant, key) => (
                  <Col xxl={2} lg={2} md={2} sm={2} xs={2} key={key}>
                    <StatusCard applicantDetail={applicant} index={key} />
                  </Col>
                ))}
            </Row>
            <Row className="scrollbar_tracking">
              {trackingData.length > 0 &&
                trackingData.map((applicant, key) => (
                  <Col xxl={2} lg={2} md={2} sm={2} xs={2} key={key}>
                    <CandidateCard
                      applicant={applicant}
                      handleStatusChange={handleStatusChange}
                      index={key}
                    />
                  </Col>
                ))}
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ApplicationTracking;
