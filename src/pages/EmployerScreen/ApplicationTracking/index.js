import React, { useState } from "react";

import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  Input,
} from "reactstrap";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import TrackingSystem from "./TrackingSystem";
import { ApplicantsData } from "../../../common/data/applicationTracking"

// Import actions
import { getDeals as onGetDeals } from "../../../slices/thunks";
// redux
import { useSelector, useDispatch } from "react-redux";


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

  const [searchQuery, setSearchquery] = useState('');

  const handleSearchCandidate = (event) => {
    const query = event.target.value;
    setSearchquery(query);

    //chats is a array of object
    const searchList = ApplicantsData.filter((item) => {
      return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setTrackingData(searchList);
  }

  const handleStatusChange = (subitem, status, currentStatus) => {
    const updatedArray = [...trackingData]
    updatedArray.forEach((el) => {
      if (el.title == status) {
        el.subItem.push(subitem)
      } else if (el.title == currentStatus) {
        el.subItem = el.subItem.filter(item => item.id !== subitem.id)
      }
    })
    setTrackingData([...updatedArray]);
  }
  document.title = "Application Trcaking | Hiry AI |  Job Search, Hiring, Technical Screening unified platform";

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
          <Row className="row-cols-xxl-6 row-cols-lg-3 row-cols-md-2 row-cols-1">
            {trackingData.length > 0 && trackingData.map((applicant, key) => (
              <React.Fragment key={key}>
                <TrackingSystem handleStatusChange={handleStatusChange} applicantDetail={applicant} index={key} />
              </React.Fragment>
            ))}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ApplicationTracking;
