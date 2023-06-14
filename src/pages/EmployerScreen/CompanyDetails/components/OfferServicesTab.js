import React, { useState } from 'react';

import {
    Card,
    CardBody,
    Col,
    Row
} from "reactstrap";
const OfferServicesTab = () => {
  return (
    <><Card>
    <CardBody>
        <h5 className="card-title mb-3">Services offered</h5>
        <Row>
            <Col xxl={4} xl={4} lg={4} sm={12}>
                <ul className="vstack gap-2">
                    <li>
                        Custom Software Development.
                    </li>
                    <li>
                        Web Application Development.
                    </li>
                    <li>Mobile Application Development.</li>
                    <li>
                        IT Consulting.
                    </li>
                    <li>
                        Software Prototyping.
                    </li>
                    <li>Platform Selection.</li>
                    <li>Hire a Reliable Software Company</li>
                </ul>
            </Col>
            <Col xxl={4} xl={4} lg={4} sm={12}>
                <ul className="vstack gap-2">
                    <li>
                        Custom Software Development.
                    </li>
                    <li>
                        Web Application Development.
                    </li>
                    <li>Mobile Application Development.</li>
                    <li>
                        IT Consulting.
                    </li>
                    <li>
                        Software Prototyping.
                    </li>
                    <li>Platform Selection.</li>
                    <li>Hire a Reliable Software Company</li>
                </ul></Col>
        </Row>

    </CardBody>
</Card></>
  )
}

export default OfferServicesTab