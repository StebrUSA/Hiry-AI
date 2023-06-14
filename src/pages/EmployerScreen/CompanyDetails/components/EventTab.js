import React from 'react';

import {
    Card,
    CardBody,
    Col,
    Row
} from "reactstrap";
import illustarator from "../../../../assets/images/user-illustarator-2.png";

const EventTab = () => {
  return (
    <> <Card className='w-100'>
    <CardBody>
        <Row>
            <Col xxl={2} xl={2} sm={2} lg={2} className='text-center'>
                <img src={illustarator} className="img-fluid" alt="" />
            </Col>
            <Col xxl={10} xl={10} sm={10} lg={10}>
                <div>
                    <h5 className="card-title mb-3"> Improv Workshops</h5>
                    <p>Improv workshops teach trust and quick thinking. At these events, team members act out impromptu scenes without scripts and react to the actions that unfold. You can plan an afternoon or evening of playing simple theatre games in the office. Or, to make the event more robust, hire an actor or travel to an improv studio or theatre.</p>
                     <div className='d-flex gap-4'>

<div className='d-flex align-items-center gap-1'>
    <div ><svg xmlns="http://www.w3.org/2000/svg" height="11px" className='mb-1' viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" /></svg></div>
    <div>June. 20 - June. 25, 2023 </div>
</div>


<div className='d-flex align-items-center gap-1'>  <div><svg xmlns="http://www.w3.org/2000/svg" height="11px" className='mb-1' viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg></div><span>Auditorium</span>
</div>
<div className='d-flex align-items-center gap-1'><div><svg xmlns="http://www.w3.org/2000/svg" height="11px" className='mb-1' viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg></div><span>10:30AM - 1:30PM</span>
</div>
<div className='w-25'>
<span class="badge rounded-pill w-50 bg-primary">Upcoming</span>
</div>
</div>
                </div>

            </Col>
        </Row>

    </CardBody>

</Card>
<Card>
    <CardBody>
        <Row>
            <Col xxl={2} xl={2} sm={2} lg={2} className='text-center'>
                <img src={illustarator} className="img-fluid" alt="" />
            </Col>
            <Col xxl={10} xl={10} sm={10} lg={10}>
                <div>
                    <h5 className="card-title mb-3"> Interdepartmental Socials</h5>
                    <p>Interdepartmental socials, also called cross-department mixers, are gatherings where groups from two or more departments get together and socialize. These events can have a specific theme and structure, for example, a go-kart racing outing, pizza party, or trivia night.</p>
                    <div className='d-flex gap-4'>

                        <div className='d-flex align-items-center gap-1'>
                            <div ><svg xmlns="http://www.w3.org/2000/svg" height="11px" className='mb-1' viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" /></svg></div>
                            <div>July. 5 - July. 10, 2023</div>
                        </div>


                        <div className='d-flex align-items-center  gap-1'>  <div><svg xmlns="http://www.w3.org/2000/svg" height="11px" className='mb-1' viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg></div><span>Auditorium</span>
                        </div>
                        <div className='d-flex align-items-center gap-1'><div><svg xmlns="http://www.w3.org/2000/svg" height="11px" className='mb-1' viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg></div><span>10:30AM - 1:30PM</span>
                        </div>
                        <div className='w-25'>
                        <span class="badge rounded-pill w-50 bg-success">Success</span>
                        </div>
                    </div>
                </div>

            </Col>
        </Row>

    </CardBody>
</Card>
<Card>
    <CardBody>
        <Row>
            <Col xxl={2} xl={2} sm={2} className='text-center'>
                <img src={illustarator} className="img-fluid" alt="" />
            </Col>
            <Col xxl={10} xl={10} sm={10} lg={10}>
                <div>
                    <h5 className="card-title mb-3">Company Offsites</h5>
                    <p>Company offsites are outings where employees leave the worksite and spend time together in the wider world. These activities’ purpose is to temporarily remove team members from the work environment and allow them to connect with colleagues in new ways.</p>
                    <div className='d-flex gap-4'>
                        <div className='d-flex align-items-center gap-1'><div><svg xmlns="http://www.w3.org/2000/svg" height="11px" className='mb-1' viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" /></svg></div> <span>June. 1 - June. 5, 2023 </span></div>
                        <div className='d-flex align-items-center gap-1'> <div><svg xmlns="http://www.w3.org/2000/svg" height="11px" className='mb-1' viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg></div> <span>Auditorium</span>
                        </div>
                        <div className='d-flex align-items-center gap-1'><div><svg xmlns="http://www.w3.org/2000/svg" height="11px" className='mb-1' viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg></div><span>10:30AM - 1:30PM</span>
                        </div>
                        <div className="w-25"><div class="badge rounded-pill w-50 bg-light text-dark">Inactive</div></div>
                    </div>
                </div>

            </Col>
        </Row>

    </CardBody>
</Card></>
  )
}

export default EventTab