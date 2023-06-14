import React, { useState } from 'react';
import {  Input, Label, Row, Card, CardBody, Col, Button, } from 'reactstrap';

const OfferServicesTab1 = () => {
    const [offerService, setOfferService] = useState([])
    const [offerServiceName, setOfferServiceName] = useState("")
  
    const handleServiceChange = (e) => {
        setOfferServiceName(e.target.value);
      }
  return (
    <div className='pb-5 mb-3'><Card >
    <CardBody className=''>
      <div className="mb-3">
        <Row >
          <Col xxl={3}>
            <Label htmlFor="serviceOfferedInput" className="form-label">
              Service
            </Label>
            <Input
              value={offerServiceName}
              type="text"
              className="form-control"
              id="serviceOfferedInput"
              placeholder="Enter Service"
              onChange={handleServiceChange}


            />
            <Button className='mt-3 text' color="primary" onClick={() => {
              if (offerServiceName.length === 0) {

              } else {
                setOfferService([...offerService, { offerServiceName: offerServiceName }]);
                setOfferServiceName("")
              }

            }}>
              <i className="ri-add-fill me-1 align-bottom"></i> Add</Button>
            <Button className='mt-3 ms-2' color="soft-success">
              Cancel</Button>
          </Col>
          </Row>
          <Row className='pt-5'>
          <Col xxl={3}>
            <ul>
            {
              offerService.map((ele, index) => {
                return <div key={index} className='w-100 d-flex justify-content-between'>
                  <li className='text-dark fs-5'>{ele.offerServiceName}</li>
                  <button style={{border:"none",backgroundColor:"white"}}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path fill="red" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
                </div>
              })
            }
            </ul>

          </Col>
        </Row>

      </div>

    </CardBody>
  </Card></div>
  )
}

export default OfferServicesTab1