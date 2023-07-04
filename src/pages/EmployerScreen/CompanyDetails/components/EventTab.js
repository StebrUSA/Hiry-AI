import React from "react";

import { Card, CardBody, Col, Row } from "reactstrap";
import Events from "./TotalEvents";

const EventTab = () => {
  return (
    <>
      {" "}
      <Card className="w-100">
        <CardBody>
          <Events
          heading="Improv Workshops"
          description=" Improv workshops teach trust and quick thinking. At these
          events, team members act out impromptu scenes without scripts
          and react to the actions that unfold. You can plan an
          afternoon or evening of playing simple theatre games in the
          office. Or, to make the event more robust, hire an actor or
          travel to an improv studio or theatre."
          startDate="June 20"
          endDate="June 25"
          venue="Auditorium"
          startTime="10:30"
          endTime="13:50"
          status="Upcoming"
          statusColor="secondary"
          />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Events
          heading="Interdepartmental Socials"
           description=" Interdepartmental socials, also called cross-department
           mixers, are gatherings where groups from two or more
           departments get together and socialize. These events can have
           a specific theme and structure, for example, a go-kart racing
           outing, pizza party, or trivia night."
           startDate="June 14"
           endDate="June 20"
           venue="Auditorium"
           startTime="8:20"
           endTime="11:30"
           status="Live"
           statusColor="success"
           />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Events
          heading="Company Offsites"
          description="Company offsites are outings where employees leave the
          worksite and spend time together in the wider world. These
          activities’ purpose is to temporarily remove team members from
          the work environment and allow them to connect with colleagues
          in new ways."
          startDate="June 1"
          endDate="June 5"
          venue="Auditorium"
          startTime="13:30"
          endTime="17:30"
          status="Inactive"
          statusColor="danger"
          />
        </CardBody>
      </Card>
    </>
  );
};

export default EventTab;
