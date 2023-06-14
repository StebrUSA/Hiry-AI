import React,{useState} from 'react';
import {  Input, Label, Row, Card, CardBody, Col,  Button} from 'reactstrap';

//import images
import avatar1 from "../../../../assets/images/users/avatar-1.jpg";

const EventTab1 = () => {

const [events, setEvents] = useState([])


  const [eventName, setEventName] = useState("");
  const [eventVenue, setEventVenue] = useState("")
  const [eventDescription, setEventDescription] = useState("")
  const [eventStartTime, setEventStartTime] = useState("")
  const [eventEndTime, setEventEndTime] = useState("")
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");

    // Button handle for event
  const handleEventNameChange = (e) => {
    setEventName(e.target.value)
  }
  const handleEventDescription = (e) => {
    setEventDescription(e.target.value)
  }
  const handleEventVenueChange = (e) => {
    setEventVenue(e.target.value);
  }
  const handleEventStartDateChange = (e) => {
    setEventStartDate(e.target.value)
  }
  const handleEventEndDateChange = (e) => {
    setEventEndDate(e.target.value)
  }
  const handleEventStartTimeChange = (e) => {
    setEventStartTime(e.target.value);
  }
  const handleEventEndTimeChange = (e) => {
    setEventEndTime(e.target.value)
  }
  return (
   <div className='pb-5 mb-3'>
   <Row>
   <Col xxl={12}>

     <Row>
       <Col xxl={2}>
         <div className="text-center">
           <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
             <img
               src={avatar1}
               className="rounded-circle avatar-xl img-thumbnail user-profile-image"
               alt="user-profile"
             />
             <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
               <Input
                 id="profile-img-file-input"
                 type="file"
                 className="profile-img-file-input"
               />
               <Label
                 htmlFor="profile-img-file-input"
                 className="profile-photo-edit avatar-xs"
               >
                 <span className="avatar-title rounded-circle bg-light text-body">
                   <i className="ri-camera-fill"></i>
                 </span>
               </Label>
             </div>
           </div>
         </div>
       </Col>
       <Col>
         <Row>
           <Col xxl={3}><Label htmlFor="eventName" className="form-label">
             Event Name
           </Label>
             <Input onChange={handleEventNameChange}
               value={eventName}
               type="text"
               className="form-control"
               id="eventName"
               placeholder="Name of Event"
               defaultValue="Workshop"
             /></Col>
           <Col xxl={3}>
             <Row>
               <Col xxl={6}>
                 <Label htmlFor="EventStartDate" className="form-label">
                   Start Date
                 </Label>
                 <Input
                   value={eventStartDate}
                   type="date"
                   className="form-control"
                   id="EventStartDate"
                   onChange={handleEventStartDateChange}

                 />
               </Col>
               <Col xxl={6}>
                 <Label htmlFor="EventEndDate" className="form-label">
                   End Date
                 </Label>
                 <Input
                   value={eventEndDate}
                   type="date"
                   className="form-control"
                   id="EventEndDate"
                   onChange={handleEventEndDateChange}

                 />
               </Col></Row></Col>
           <Col xxl={3}><Row>
             <Col xxl={6}>
               <Label htmlFor="StartTimeForEvent" className="form-label">
                 Start Time
               </Label>
               <Input
                 value={eventStartTime}
                 type="time"
                 className="form-control"
                 id="StartTimeForEvent"
                 onChange={handleEventStartTimeChange}
               /></Col>
             <Col xxl={6}>
               <Label htmlFor="EndTimeForEvent" className="form-label">
                 End Time
               </Label>
               <Input
                 value={eventEndTime}
                 type="time"
                 className="form-control"
                 id="EndtTmeForEvent"
                 onChange={handleEventEndTimeChange}
               /></Col>
           </Row>
           </Col>
           <Col xxl={3}><Label htmlFor="eventVenue" className="form-label">
             Place/Venue
           </Label>
             <Input onChange={handleEventVenueChange}
               value={eventVenue}
               type="text"
               className="form-control"
               id="eventVenue"
               placeholder="Venue"
               defaultValue="Workshop"
             /></Col>
         </Row>

         <Row><Col xxl={12}>
           <Label htmlFor="firstnameInput" className="form-label mt-2">
             Description
           </Label>
           <textarea
             value={eventDescription}
             onChange={handleEventDescription}
             className="form-control"
             id="exampleFormControlTextarea"
             rows="5"
           ></textarea>
         </Col></Row>

         <div className='text-end'><Button className='mt-3' color="primary" onClick={() => {
           if (eventName.length === 0 || eventStartDate.length === 0 || eventEndDate.length === 0 || eventStartTime.length === 0 || eventEndTime.length == 0 || eventDescription === 0) {

           } else {
             setEvents([...events, { image: "alt", nameOfEvent: eventName, eventDescription: eventDescription, eventVenue: eventVenue, eventStartTime: eventStartTime, eventEndTime: eventEndTime, eventStartDate: eventStartDate, eventEndDate: eventEndDate }]);
             setEventDescription("")
             setEventName("")
             setEventVenue("")
             setEventEndDate("")
             setEventEndTime("");
             setEventStartDate("");
             setEventStartTime("");
           }

         }}>
           <i className="ri-add-fill me-1 align-bottom"></i> Add</Button>
           <Button className='mt-3 ms-2' color="soft-success">
             Cancel</Button></div>
       </Col>
     </Row>

   </Col>
 </Row>
 <h4>Events</h4>
 {
   events.map((ele, index) => {
     return <Card className='mt-5' key={index}>
       <CardBody>
         <Row><Col xxl={2} xl={2} sm={2} lg={2} className='text-center'>
           <img
             src={avatar1}
             className="rounded-circle avatar-xl img-thumbnail user-profile-image"
             alt="user-profile"
           />
         </Col>
           <Col xxl={10} xl={10} sm={10} lg={10}>
             <div>
              <div className='d-flex justify-content-between'> <h5 className="card-title mb-3">{ele.nameOfEvent}</h5>
              <div> <button style={{border:"none",backgroundColor:"white"}}><svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 448 512"><path fill="red" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button></div>
              </div>
               <p>{ele.eventDescription}</p>
               <div className='d-flex gap-5'>

                 <div className='d-flex align-items-center gap-1'>
                   <div> <svg xmlns="http://www.w3.org/2000/svg" height="11px" className='mb-1' viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" /></svg></div>

                   <div><span>{ele.eventStartDate} </span>-
                     <span>{ele.eventEndDate} </span>


                   </div>
                 </div>


                 <div className='d-flex align-items-center gap-1'>
                   <div><svg xmlns="http://www.w3.org/2000/svg" height="11px" className='mb-1' viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg></div>  <span>{ele.eventVenue}</span>
                 </div>
                 <div className='d-flex align-items-center gap-1'><div><svg xmlns="http://www.w3.org/2000/svg" height="11px" className='mb-1' viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg></div><span>{ele.eventStartTime}</span> -<span>{ele.eventEndTime}</span>

                 </div>

               </div>
             </div>

           </Col></Row>

       </CardBody>
     </Card>
   })
 }</div>
  )
}

export default EventTab1