import React, { useState } from 'react';

import {
    Card,
    CardBody,
    Col,
    Row
} from "reactstrap";

const ServiceOffered = [
    {label:"Custom Software Development.",value:"Custom Software Development."},
    {label:"Web Application Development.",value:"Web Application Development."},
    {label:"Mobile Application Development.",value:"Mobile Application Development."},
    {label:"IT Consulting.",value:"IT Consulting."},
    {label:"Software Prototyping.",value:"Software Prototyping."},
    {label:"Platform Selection.",value:"Platform Selection."},
    {label:"Hire a Reliable Software Company",value:"Hire a Reliable Software Company"},
]
const OfferServicesTab = () => {
  return (
    <><Card>
    <CardBody>
        <h5 className="card-title mb-3">Services offered</h5>
        <Row>
            <Col xxl={4} xl={4} lg={4} sm={12}>
                <ul className="vstack gap-2">
                    {ServiceOffered.map((item,index)=>{
                        return <li key={index}>{item.label}</li>
                    })}
                </ul>
            </Col>
            <Col xxl={4} xl={4} lg={4} sm={12}>
                <ul className="vstack gap-2">
                    {ServiceOffered.map((item,index)=>{
                        return <li key={index}>{item.label}</li>
                    })}
                </ul>
            </Col>
        </Row>

    </CardBody>
</Card></>
  )
}

export default OfferServicesTab